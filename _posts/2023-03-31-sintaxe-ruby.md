---
layout: post
title: "Sintaxe Ruby"
permalink: sintaxe-ruby
date: 2023-03-31 16:49:00
comments: true
description: "Sintaxe Ruby"
keywords: ""
categories:

tags:

---


A sintaxe Ruby é baseada em uma estrutura simples de comandos, métodos e expressões. A seguir, são apresentados alguns exemplos da sintaxe Ruby:


Declaração de variáveis:
```
nome = "Maria"
idade = 25
```

Estruturas de controle:
```
if idade >= 18
  puts "Você é maior de idade"
else
  puts "Você é menor de idade"
end
```


Laços de repetição:
```
for i in 1..10
  puts i
end

10.times do |i|
  puts i
end
Definindo funções:
css
Copy code
def somar(a, b)
  return a + b
end

resultado = somar(2, 3)
puts resultado
```


Trabalhando com arrays:

```
numeros = [1, 2, 3, 4, 5]
numeros.each do |numero|
  puts numero
end
```


Trabalhando com strings:

```
nome = "Maria"
mensagem = "Olá, #{nome}!"
puts mensagem
```

Trabalhando com classes:

```
class Pessoa
  def initialize(nome, idade)
    @nome = nome
    @idade = idade
  end
  
  def apresentar
    puts "Meu nome é #{@nome} e tenho #{@idade} anos"
  end
end

pessoa = Pessoa.new("Maria", 25)
pessoa.apresentar
```

Esses são apenas alguns exemplos da sintaxe Ruby. A linguagem também oferece muitas outras ferramentas e recursos, como metaprogramação, expressões regulares, manipulação de arquivos e muito mais.