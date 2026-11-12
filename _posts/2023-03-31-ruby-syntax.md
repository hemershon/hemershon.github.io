---
layout: post
title: "Ruby syntax"
description: "Examples of Ruby syntax: variables, methods, and expressions."
date: 2023-03-31 16:49:00 -0300
lang: en
translation_key: sintaxe-ruby
categories: [Ruby]
tags: [ruby, syntax, beginner]
permalink: /en/articles/ruby-syntax/
---
Ruby's syntax is based on a simple structure of statements, methods, and expressions. Here are some examples of Ruby syntax:


Declaring variables:
```ruby
name = "Maria"
age = 25
```

Control structures:
```ruby
if age >= 18
  puts "You are an adult"
else
  puts "You are a minor"
end
```


Loops:
```ruby
for i in 1..10
  puts i
end

10.times do |i|
  puts i
end
```

Defining methods:
```ruby
def sum(a, b)
  return a + b
end

result = sum(2, 3)
puts result
```


Working with arrays:

```ruby
numbers = [1, 2, 3, 4, 5]
numbers.each do |number|
  puts number
end
```


Working with strings:

```ruby
name = "Maria"
message = "Hello, #{name}!"
puts message
```

Working with classes:

```ruby
class Person
  def initialize(name, age)
    @name = name
    @age = age
  end

  def introduce
    puts "My name is #{@name} and I am #{@age} years old"
  end
end

person = Person.new("Maria", 25)
person.introduce
```

These are just a few examples of Ruby syntax. The language also offers many other tools and features, such as metaprogramming, regular expressions, file handling, and much more.
