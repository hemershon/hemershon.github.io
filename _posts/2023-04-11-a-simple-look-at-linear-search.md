---
layout: post
title: "A simple look at linear search"
description: "How the linear search algorithm works, with an implementation in Ruby."
date: 2023-04-11 16:22:55 -0300
lang: en
translation_key: um-olhar-simples-para-a-buscar-linear
categories: [Algorithms]
tags: [algorithms, ruby, linear-search]
image: /assets/images/posts/linear_search.jpg
permalink: /en/articles/a-simple-look-at-linear-search/
---
The linear search algorithm is very simple and intuitive. The idea is to go through every element of the array one by one, checking whether each element equals the target value we're looking for. If we find the element, we return its index in the array. If we don't, we return nil to indicate the value wasn't found.

In the Ruby implementation, the linear_search function takes two arguments: the array to search and the target value we're looking for. The function then uses an each_with_index loop to iterate over every element of the array. On each iteration, the loop passes the current element and its index to a block that uses the variables item and index.

Inside the block, we check whether the current element equals the target value. If it does, we return the element's index using the return keyword. This means the function ends immediately and doesn't run any further iterations of the loop.

If we reach the end of the loop without finding the target value, the value isn't in the array and the function returns nil.

{% highlight ruby %}
def linear_search(array, target)
  array.each_with_index do |item, index|
    if item == target
      return index
    end
  end

  return nil
end
{% endhighlight %}

Here's an example of using the linear_search function to look for the value 42 in the array [1, 2, 3, 4, 5, 42, 43, 44]:

{% highlight ruby %}
array = [1, 2, 3, 4, 5, 42, 43, 44]
target = 42

index = linear_search(array, target)
if index
  puts "The value #{target} was found at index #{index} of the array"
else
  puts "The value #{target} was not found in the array"
end
{% endhighlight %}

In this example, the linear_search function is used to look for the value 42 in the array. The function returns index 5, which is the index of the value 42 in the array. Then a message is displayed saying the value was found at index 5 of the array.
