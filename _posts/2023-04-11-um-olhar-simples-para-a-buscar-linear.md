---
layout: post
title: "Um olhar simples para a busca linear"
description: "Como funciona o algoritmo de busca linear, com implementação em Ruby."
date: 2023-04-11 16:22:55 -0300
lang: pt
translation_key: um-olhar-simples-para-a-buscar-linear
categories: [Algoritmos]
tags: [algoritmos, ruby, busca-linear]
image: /assets/images/posts/linear_search.jpg
permalink: /pt/artigos/um-olhar-simples-para-a-buscar-linear/
redirect_from:
  - /um-olhar-simples-para-a-buscar-linear/
---
O algoritmo de busca linear é muito simples e intuitivo. A ideia é percorrer todos os elementos do array um por um, verificando se cada elemento é igual ao valor de destino que estamos procurando. Se encontrarmos o elemento que estamos procurando, retornamos o índice do elemento no array. Se não encontrarmos o elemento, retornamos nil para indicar que o valor não foi encontrado.

Na implementação em Ruby, a função linear_search recebe dois argumentos: o array a ser pesquisado e o valor de destino que estamos procurando. Em seguida, a função usa um laço each_with_index para iterar por todos os elementos do array. A cada iteração, o laço passa o elemento atual e o índice desse elemento para um bloco que usa as variáveis item e index.

Dentro do bloco, verificamos se o elemento atual é igual ao valor de destino que estamos procurando. Se o elemento atual for igual ao valor de destino, retornamos o índice do elemento usando a palavra-chave return. Isso significa que a função termina imediatamente e não executa nenhuma iteração adicional do laço.

Se chegarmos ao final do laço sem encontrar o valor de destino, isso significa que o valor não está presente no array e a função retorna nil.

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

Aqui está um exemplo de como usar a função linear_search para procurar o valor 42 no array [1, 2, 3, 4, 5, 42, 43, 44]:

{% highlight ruby %}
array = [1, 2, 3, 4, 5, 42, 43, 44]
target = 42

index = linear_search(array, target)
if index
  puts "O valor #{target} foi encontrado no índice #{index} do array"
else
  puts "O valor #{target} não foi encontrado no array"
end
{% endhighlight %}

Neste exemplo, a função linear_search é usada para procurar o valor 42 no array. A função retorna o índice 5, que é o índice do valor 42 no array. Em seguida, uma mensagem é exibida informando que o valor foi encontrado no índice 5 do array.
