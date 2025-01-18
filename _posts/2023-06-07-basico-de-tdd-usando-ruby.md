---
layout: post
title: "Básico de TDD usando Ruby"
image: assets/images/básicodetdd.png
permalink: basico-de-tdd-usando-ruby
date: 2023-06-07 10:21:50
comments: true
description: "Básico de TDD usando Ruby"
keywords: ""
categories:
  - Ruby
  - Code
  - rspec
  - tdd
  - test

tags:
  - ruby
  - rspec
  - tdd

---

# Básico de TDD usando Ruby



O Test-Driven Development (TDD) é uma abordagem de desenvolvimento de software que envolve escrever os testes antes de implementar o código. Aqui está um exemplo básico de como aplicar o TDD usando Ruby:

 - Passo 1: Escrever o teste
Comece escrevendo um teste que descreva o comportamento desejado do código que você irá implementar. Aqui está um exemplo de teste usando o framework RSpec:

{% highlight ruby %}
# arquivo: calculator_spec.rb

require 'rspec'
require_relative 'calculator'

describe Calculator do
  it 'deve somar dois números corretamente' do
    calculator = Calculator.new
    result = calculator.sum(2, 3)
    expect(result).to eq(5)
    end
  end
{% endhighlight %}

Nesse exemplo, estamos testando a funcionalidade de soma em uma classe Calculator. O teste espera que a soma de 2 e 3 seja igual a 5.

- Passo 2: Executar o teste (e falhar)
  Agora, execute o teste. Como você ainda não implementou o código, o teste irá falhar, o que é esperado neste ponto.

{% highlight ruby %}

$ rspec calculator_spec.rb

Failures

  1) Calculator deve somar dois números corretamente
     Failure/Error: expect(result).to eq(5)

        expected: 5
             got: nil
      
      (compared using ==)

{% endhighlight %}


- Passo 3: Implementar o código mínimo necessário
Agora, implemente o código mínimo necessário para fazer o teste passar. Neste caso, crie um arquivo calculator.rb e defina a classe Calculator com o método sum:

{% highlight ruby %}

# arquivo: calculator.rb

class Calculator
  def sum(a, b)
  a + b
  end
end
{% endhighlight %}

- Passo 4: Executar o teste novamente (e passar)
Execute o teste novamente e verifique se ele passa agora:

{% highlight ruby %}
$ rspec calculator_spec.rb

1 example, 0 failures

{% endhighlight %}

O teste deve passar sem erros. Isso significa que a implementação do método sum na classe Calculator está correta.

- Passo 5: Refatorar e repetir

Agora que o teste passou, você pode refatorar o código se necessário. Refatoração envolve melhorar o design, legibilidade e desempenho do código sem alterar seu comportamento. Durante a refatoração, você pode executar os testes novamente para garantir que tudo continua funcionando corretamente.

Repita esses passos para cada nova funcionalidade ou alteração que você desejar fazer no código. O ciclo de TDD é composto por escrever um teste, executá-lo (esperando uma falha), implementar o código mínimo necessário para fazer o teste passar e, em seguida, refatorar o código.

Essa é apenas uma introdução básica ao TDD usando Ruby. À medida que você ganha mais experiência, pode explorar recursos adicionais, como testes mais complexos, testes de borda, testes de integração e ferramentas auxiliares para testes, como mocks e stubs.