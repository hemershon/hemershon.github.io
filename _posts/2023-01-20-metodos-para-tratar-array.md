---
layout: post
title: "MÉTODOS PARA TRATAR ARRAY"
image: assets/images/array.png
permalink: metodos-para-tratar-array
date: 2023-01-20 15:33:12
comments: true
description: "METODOS PARA TRATAR ARRAY"
keywords: ""
categories:
    - Rails
    - Ruby
    - Code
tags:
  - rails
  - ruby
  - linux
  - metodos
---

Recentemente me deparei em uma situação interessante, qual é o momento em que devemos usar *map*, *select* e o *each*, normalmente eu uso o *each* com frequência aí veio a dúvida em qual momento devemos usar os outros métodos e qual é a diferença entre eles?

Dica: antes de procura em toda parte da web vá primeiro na documentação leia se não entendeu procure contexto diferentes de explicação, por que é importante você saber usar a documentação. Procurando na documentação você se depara com a seguinte situação;

## MAP

O **map** invoca o bloco fornecido uma vez para cada elemento de self. Criando um novo array contendo os valores retornados pelo bloco, se caso nenhum bloco for fornecido, um Enumerador será retornado

#### Detalhes do **map**:
O podemos usar ele com ***arrays***, ***hashes*** e ***ranges*** o principal uso do ***map*** é transformar dados.

#### por exemplo: 
Dada uma matriz de strings, você pode passar por cima de cada string e tornar cada caractere maiúsculo

#### Sintaxe do map no Ruby
{% highlight ruby %}
array = ["a", "b", "c"]
array.map { |string| string.upcase } # ["A", "B", "C"]
{% endhighlight %}



## Collect
A **collect** invoca o bloco fornecido uma vez para cada elemento de self, ele criar um novo array contendo os valores retornados pelo bloco, se não estiver nenhum bloco ele será retornado um Enumerador, no caso é a mesma coisa que o map.

#### Detalhes do collect

O collect() de enumerable é um método embutido em ruby que retorna um novo array com resultados da execução do bloco uma vez para cada elemento em enum O objeto é repetido todas as veses para cada enum, caso nenhum objeto seja fornecido, ele retorna nil para cada enum

### Sintaxe:
{% highlight ruby %}
 (r1..r2).collect {|obj| bloquado }
{% endhighlight %}


Parâmetros: A função pega o objeto e o bloco que é para cada enum, também leva r1 e r2 que decide o número de elementos no enumerável retornado.

valor do retorno: Retorna um novo array

retorna o enumerador
{% highlight ruby %}
enu = (2..6).collect { |x| x * 10 } # [20, 30, 40, 50, 60]
retorna o valor nil

enu = (2..6).collect {} # [nil, nil, nil, nil, nil]
{% endhighlight %}

##### fonte: Geeksforgeeks
## Select

O **select** funciona de duas maneiras únicas; Primeiro: pega o bloco para que possa ser usado como array#select Segundo: Modifica a instrução SELECT da consulta para que apenas determinados campos sejam recuperados.

Exemplo:

{% highlight ruby %}
[1, 2, 3, 4, 5].select { |num| num.event? } # [2, 4]
{% endhighlight %}

Exemplo 2:

{% highlight ruby %}
a = %w{ a b c d e f }
a.select { |v| v =~ /[aeiou]/ } # ["a", "e"]
{% endhighlight %}

#### Detalhes do select

Select é um método de calsse array que retorna um novo array contendo todos os elementos do array para os quais o bloco dado retorna um valor verdadeiro.

Sintaxe: array.select()

Parâmentro: Matriz

Retorno: Uma nova matriz contendo todos os elemetos da matriz para os quais o bloco fornecido retorna um valor verdadeiro.

##### fonte: Geeksforgeeks

O each chama o bloco fornecido uma vez para cada elemento em self, passando esse elemento como um parâmetro, no caso ele retornar o próprio array, se caso nenhum bloco for fornecedor ele também traz um Enumerador.
{% highlight ruby %}
 a = [ "a", "b", "c" ]
 a.each { |x| print x, "--" } # a--b--c-- => ["a", "b", "c"] 
{% endhighlight %}

Isso foi um resumo para entender melhor como tratar seus array usando métodos diferentes para situações diferentes.

##### Fontes: [Apidock](https://ruby-doc.org/core-2.7.0/Array.html)
