---
layout: post
title: "Methods for handling arrays"
description: "When to use map, select, and each in Ruby, with practical examples."
date: 2023-01-20 15:33:12 -0300
lang: en
translation_key: metodos-para-tratar-array
categories: [Ruby]
tags: [ruby, array, map, select, each]
image: /assets/images/posts/array.png
permalink: /en/articles/methods-for-handling-arrays/
---
I recently ran into an interesting question: when should we use *map*, *select*, and *each*? I usually reach for *each*, and that made me wonder when we should use the other methods and what the difference between them is.

Tip: before searching all over the web, go to the documentation first. If you don't understand it, look for explanations in different contexts. Knowing how to use the documentation matters. Searching the documentation, this is what you'll find:

## MAP

**map** invokes the given block once for each element of self, creating a new array with the values returned by the block. If no block is given, an Enumerator is returned.

#### **map** details:
We can use it with ***arrays***, ***hashes***, and ***ranges***. The main use of ***map*** is to transform data.

#### For example:
Given an array of strings, you can go over each string and make every character uppercase

#### map syntax in Ruby
{% highlight ruby %}
array = ["a", "b", "c"]
array.map { |string| string.upcase } # ["A", "B", "C"]
{% endhighlight %}



## Collect
**collect** invokes the given block once for each element of self and creates a new array with the values returned by the block. If no block is given, an Enumerator is returned. In other words, it's the same as map.

#### collect details

Enumerable's collect() is a built-in Ruby method that returns a new array with the results of running the block once for each element in enum. The object is repeated every time for each enum; if no object is given, it returns nil for each enum.

### Syntax:
{% highlight ruby %}
 (r1..r2).collect { |obj| block }
{% endhighlight %}


Parameters: the function takes the object and the block for each enum, and also r1 and r2, which determine the number of elements in the returned enumerable.

Return value: a new array

Returning the enumerator
{% highlight ruby %}
enu = (2..6).collect { |x| x * 10 } # [20, 30, 40, 50, 60]
# returning nil

enu = (2..6).collect {} # [nil, nil, nil, nil, nil]
{% endhighlight %}

##### Source: GeeksforGeeks
## Select

**select** works in two distinct ways. First, it takes a block so it can be used like Array#select. Second, it modifies the SELECT statement of a query so that only certain fields are retrieved.

Example:

{% highlight ruby %}
[1, 2, 3, 4, 5].select { |num| num.even? } # [2, 4]
{% endhighlight %}

Example 2:

{% highlight ruby %}
a = %w{ a b c d e f }
a.select { |v| v =~ /[aeiou]/ } # ["a", "e"]
{% endhighlight %}

#### select details

select is an Array class method that returns a new array containing all elements of the array for which the given block returns a truthy value.

Syntax: array.select()

Parameter: array

Return: a new array containing all elements of the array for which the given block returns a truthy value.

##### Source: GeeksforGeeks

## Each

**each** calls the given block once for each element in self, passing that element as a parameter, and returns the array itself. If no block is given, it also returns an Enumerator.
{% highlight ruby %}
 a = [ "a", "b", "c" ]
 a.each { |x| print x, "--" } # a--b--c-- => ["a", "b", "c"]
{% endhighlight %}

This was a summary to better understand how to handle your arrays using different methods for different situations.

##### Sources: [Ruby docs](https://ruby-doc.org/core-2.7.0/Array.html)
