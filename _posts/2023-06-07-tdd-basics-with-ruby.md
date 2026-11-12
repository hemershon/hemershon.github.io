---
layout: post
title: "TDD basics with Ruby"
description: "A step-by-step Test-Driven Development example in Ruby."
date: 2023-06-07 10:21:50 -0300
lang: en
translation_key: basico-de-tdd-usando-ruby
categories: [Testing]
tags: [tdd, rspec, ruby]
image: /assets/images/posts/basicodetdd.png
permalink: /en/articles/tdd-basics-with-ruby/
---
Test-Driven Development (TDD) is a software development approach that involves writing tests before implementing the code. Here's a basic example of how to apply TDD with Ruby:

- Step 1: Write the test
Start by writing a test that describes the desired behavior of the code you're going to implement. Here's an example test using the RSpec framework:

{% highlight ruby %}
# file: calculator_spec.rb

require 'rspec'
require_relative 'calculator'

describe Calculator do
  it 'adds two numbers correctly' do
    calculator = Calculator.new
    result = calculator.sum(2, 3)
    expect(result).to eq(5)
  end
end
{% endhighlight %}

In this example, we're testing the sum functionality of a Calculator class. The test expects the sum of 2 and 3 to equal 5.

- Step 2: Run the test (and watch it fail)
  Now run the test. Since you haven't implemented the code yet, the test will fail, which is expected at this point.

{% highlight ruby %}

$ rspec calculator_spec.rb

Failures

  1) Calculator adds two numbers correctly
     Failure/Error: expect(result).to eq(5)

        expected: 5
             got: nil

      (compared using ==)

{% endhighlight %}


- Step 3: Implement the minimum code needed
Now implement the minimum code needed to make the test pass. In this case, create a calculator.rb file and define the Calculator class with the sum method:

{% highlight ruby %}

# file: calculator.rb

class Calculator
  def sum(a, b)
    a + b
  end
end
{% endhighlight %}

- Step 4: Run the test again (and watch it pass)
Run the test again and check that it passes now:

{% highlight ruby %}
$ rspec calculator_spec.rb

1 example, 0 failures

{% endhighlight %}

The test should pass with no errors. This means the implementation of the sum method in the Calculator class is correct.

- Step 5: Refactor and repeat

Now that the test passes, you can refactor the code if needed. Refactoring means improving the code's design, readability, and performance without changing its behavior. While refactoring, you can run the tests again to make sure everything still works correctly.

Repeat these steps for each new feature or change you want to make to the code. The TDD cycle consists of writing a test, running it (expecting a failure), implementing the minimum code needed to make the test pass, and then refactoring the code.

This is just a basic introduction to TDD with Ruby. As you gain more experience, you can explore additional features, such as more complex tests, edge-case tests, integration tests, and testing helpers such as mocks and stubs.
