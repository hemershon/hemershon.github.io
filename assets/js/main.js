(() => {
  // --- Theme Toggle ---
  const root = document.documentElement;
  const themeButton = document.querySelector(".theme-toggle");
  
  // Apply saved theme immediately
  const savedTheme = localStorage.getItem("hs-theme");
  const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = savedTheme || (preferredDark ? "dark" : "light");

  if (themeButton) {
    themeButton.addEventListener("click", () => {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = nextTheme;
      localStorage.setItem("hs-theme", nextTheme);
    });
  }

  // --- Mobile Menu ---
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#site-navigation");
  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // --- Articles Search & Filter ---
  const searchInput = document.getElementById("search-input");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const posts = document.querySelectorAll("#articles-grid .post-card");
  const noResults = document.getElementById("no-results");
  
  function filterPosts() {
    if (!searchInput) return;
    
    const query = searchInput.value.toLowerCase();
    const activeBtn = document.querySelector(".filter-btn.active");
    const activeCategory = activeBtn ? activeBtn.dataset.category : 'all';
    
    let visibleCount = 0;
    
    posts.forEach(post => {
      const title = post.querySelector("h3")?.textContent.toLowerCase() || "";
      const desc = post.querySelector("p")?.textContent.toLowerCase() || "";
      const meta = post.querySelector(".post-card__meta")?.textContent.toLowerCase() || "";
      const tags = post.querySelector(".post-card__tags")?.textContent.toLowerCase() || "";
      
      const matchesSearch = title.includes(query) || desc.includes(query) || tags.includes(query);
      
      // Assume category is in meta if it exists. Replaces hyphens with spaces for better matching.
      const matchesCategory = activeCategory === 'all' || meta.includes(activeCategory.replace(/-/g, ' '));
      
      if (matchesSearch && matchesCategory) {
        post.style.display = "block";
        visibleCount++;
      } else {
        post.style.display = "none";
      }
    });
    
    if (noResults) {
      noResults.style.display = visibleCount === 0 ? "block" : "none";
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", filterPosts);
  }
  
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filterPosts();
    });
  });

  // --- Copy Code Button ---
  document.querySelectorAll('div.highlighter-rouge').forEach((block) => {
    const btn = document.createElement('button');
    btn.className = 'copy-code-btn';
    btn.innerText = 'Copy';
    
    block.style.position = 'relative';
    block.appendChild(btn);
    
    btn.addEventListener('click', async () => {
      const code = block.querySelector('code');
      if (!code) return;
      try {
        await navigator.clipboard.writeText(code.innerText);
        btn.innerText = 'Copied!';
        setTimeout(() => btn.innerText = 'Copy', 2000);
      } catch (err) {
        btn.innerText = 'Error';
      }
    });
  });

  // --- Table of Contents (TOC) ---
  const articleContent = document.querySelector(".prose--article");
  const tocContainer = document.getElementById("toc");
  
  if (articleContent && tocContainer) {
    const headings = articleContent.querySelectorAll("h2, h3");
    if (headings.length > 0) {
      const list = document.createElement("ul");
      let currentH2List = list;
      
      headings.forEach((heading, index) => {
        if (!heading.id) {
          heading.id = `heading-${index}`;
        }
        
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
        listItem.appendChild(link);
        
        if (heading.tagName.toLowerCase() === "h2") {
          list.appendChild(listItem);
          currentH2List = document.createElement("ul");
          listItem.appendChild(currentH2List);
        } else if (heading.tagName.toLowerCase() === "h3") {
          currentH2List.appendChild(listItem);
        }
      });
      
      tocContainer.appendChild(list);
    } else {
      const tocParent = document.querySelector(".toc-container");
      if (tocParent) tocParent.style.display = "none";
    }
  }

  // --- Social Share ---
  const shareButtons = document.querySelectorAll(".share-btn");
  shareButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const url = btn.dataset.url;
      if (btn.classList.contains("share-twitter")) {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, "_blank");
      } else if (btn.classList.contains("share-linkedin")) {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank");
      } else if (btn.classList.contains("share-copy")) {
        navigator.clipboard.writeText(url).then(() => {
          const originalText = btn.innerText;
          btn.innerText = "Copied!";
          setTimeout(() => btn.innerText = originalText, 2000);
        });
      }
    });
  });
})();
