---
layout: post
title: "Ruby basics"
description: "The fundamentals of the Ruby language: data types and essential concepts."
date: 2023-01-21 16:57:32 -0300
lang: en
translation_key: o-basico-de-ruby
categories: [Ruby]
tags: [ruby, beginner, fundamentals]
image: /assets/images/posts/obasicoderuby.png
permalink: /en/articles/ruby-basics/
---
Continuing the saga of *how to become a programmer*, now I'll talk about the basics of the Ruby language. I won't tell the story of Ruby or explain how to install it; I'll add links to help you read up on it and install it.

First, let's understand what "the basics" of Ruby means. The basics are what serve as a foundation: essential, relevant, and above all fundamental to your career. With that in mind, there's no doubt this study is mandatory to understand how the language works.

## Data types

Ruby has no primitive types; every type is a class.
- Object is the parent class of all other classes in Ruby
- Numeric is an abstract class that represents numbers
- Integer is a class that represents whole numbers
- Fixnum represents fixed-precision integers
- Bignum represents integers of unlimited precision, limited only by available memory
- Float is a class that represents floating-point numbers (real numbers)
- String is a sequence of characters. It can be delimited by single quotes (') or double quotes ("). Everything between single quotes is taken literally; between double quotes, the programmer must use escape sequences to represent specific characters, as in C. Example: 'blue', "a\nb\nc"
- Symbol is similar to a string, but two identical symbols share the same memory address, which makes them great as Hash keys. However, due to their nature, Ruby's garbage collector does not remove them. It's defined with a colon (:), for example, :none
- Array is a dynamic array that can be used to represent matrices and vectors. It's delimited by square brackets ([]) and each value is separated by a comma. Example: [4, 'blue', :thermometer]
- Hash represents an associative array and, like Arrays, is dynamic. It's delimited by curly braces ({}), and the key precedes the value with a '=>' sign. Example: {:controller => 'user', :action => 'index'}.

Any object can be a key, but the most commonly used are Strings and Symbols
- Regex represents regular expressions, delimited by //.
    It works similarly to Perl. Example:
    /a|ae/


These are the data types the language has used since the beginning.

Understand them and you'll understand the language.

One of the basic concepts of the language is declaring variables: all it takes is associating a name with a value, and the variable is created.

Example:
```ruby
year = 37
```
To try it out, let's use Ruby's interpreter, IRB (Interactive Ruby Shell).
Go to your terminal and type irb, and you'll see it open:

```ruby
╰─ irb
2.6.6 :001 >
```
A console opens showing your Ruby version and the line number of each command.

In the first example, we declared an integer variable called year and assigned the value 37 to it. But how does the interpreter know it's an integer?

```ruby
year = 37
```

Ruby has an interpreter that infers the variable's type while the code runs.

A handy way to identify a variable's type:
```ruby
year = 37
puts year.class
```

You asked puts to show the type of the year variable.
The result will be:
```ruby
╰─ irb
2.6.6 :001 > year = 37
 => 37
2.6.6 :002 > puts year.class
Integer
 => nil
2.6.6 :003 >
```

When we call **.class** on any variable, it returns the variable's type.

## Typing

What's the difference between typing systems?

### Static

Static typing is when the types of a program's variables are explicitly defined in the code, so they're known and checked at compile time.

Languages that use static typing:
Java, C#, F#, Kotlin, Go.

This analysis helps provide what's called type safety when the programmer uses the data.

### Dynamic

Dynamic typing checks types differently: it checks the data types directly at runtime.

Languages that use dynamic typing:
Ruby, Python, Clojure, Elixir.



### Strong
Strong typing does not perform conversions automatically.

### Weak

Weak typing comes from a language's ability to automatically convert between different data types.
