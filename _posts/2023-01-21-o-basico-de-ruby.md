---
layout: post
title: "O Básico de Ruby"
image: assets/images/obasicoderuby.png
permalink: o-basico-de-ruby
date: 2023-01-21 16:57:32
comments: true
description: "O Básico de Ruby"
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


Continuando com a saga de *como se tornar um programador*, agora vou falar sobre o básico da linguagem ruby, não irei contar a história de ruby e nem como instalar, vou adicionar links que vai ajudar você a lê e instalar.

Vamos entender primeiro o que é o básico do Ruby, o básico é o que serve como base, essencial e relevante e principalmente fundamental para sua carreira, entendido isso, não tenha dúvida que esse estudo é obrigatório para entender como funciona a linguagem.

## Tipos de dados

No ruby não existem tipos primitivos, todos os tipos são classes
- Object é a classe mãe de todas as outras classes em Ruby
- Numeric é uma classe abstrata que representa números
- Integer é uma classe que representa números inteiros
- Fixnum representa números inteiros de precisão fixa
- Bignum representa números inteiros de precisão infinita, dependente apenas da memória disponível
- Float é uma classe que representa números de ponto flutuante(números reais)
- String uma cadeia de caracteres. Pode ser delimitado por apóstrofes(‘)ou aspas(“). Tudo o que há entre apóstrofes literalmente, entres aspas o programador deve utilizar de símbolos para representar caracteres específicos, como C. Exemplo: ‘azul’, “a\nb\nc\”
- Symbol é semelhante a uma string, mas dois símbolos iguais possuem o mesmo endereço de memória, sendo assim é ótimo para se utilizar como índice numa Hash. Porém, devido à sua natureza, o coletor de lixo de ruby não os elimina. É definido com um sinal de dois pontos (:), por exemplo, :none
- Array são arrays dinâmicos, que podem ser usados para representar matrizes e vetores. É delimitado por colchetes([]) e cada valor é separado por vírgula. Exemplo: [4, ‘azul’, :termometro]
- Hash representa um vetor associativo, e, assim como as Arrays, é dinâmica. É delimitada por chaves ({}), e o índice precede o valor com um sinal ‘=>’. Exemplo: {:controller =>’user’, :action = ‘index’}. 

Qualquer objeto pode ser índice, mas os mais usados são as Strings e os Symbols
- Regex representa expressões regulares, delimitadas por //.
    Funciona de forma semelhante a Perl. Exemplo: 
    /a|ae/


Esses são os tipos de dados usados na linguagem desde o início.

Entenda isso e você vai entender a linguagem.

Um dos conceitos básicos da linguagem é a declaração das variáveis, que basta uma associação entre um nome e um valor que é pronto é criada uma variável.

Exemplo:
```ruby
Ano = 37
```
Para você testar, vamos usar o interpretador do ruby que é o IRB(Interactive Ruby Shell).
Vá no seu terminal e digite irb, veja que ele vai abrir 

```ruby  
╰─ irb                       
2.6.6 :001 >
```
Um console que abre informando a versão do seu ruby e o número de vezes que ele foi usado.

No primeiro exemplo declaramos uma variável do tipo inteiro que ela vai ser chamada de ano e atribuímos o valor 37 nela, mais como o interpretador sabe que ali tem uma variável do tipo inteiro.

```ruby  
ano = 37
```

Ruby tem um intérpretador que infere o tipo de variável durante a execução do código.

Uma forma interessante para você identificar o tipo da variável
```ruby  
ano = 37 
puts ano.class
```

Você pediu para o puts mostrar o tipo da variável ano.
 Que o resultado vai ser :
```ruby  
╰─ irb                          
2.6.6 :001 > 2.6.6 :001 > ano = 37 
 => 37 
2.6.6 :002 > puts ano.class
Integer
 => nil 
2.6.6 :003 > 
```

Quando chamamos o **.class** depois de qualquer variável ele trás o tipo de variável.

## Tipagem

Qual é a diferença entre tipagens;

### Estática

Tipagem estática é quando definimos explicitamente o tipo de variáveis de um software no código que na hora da compilação do código ele é conhecido e checado.

Linguagem que usam tipagem estáticas 
Java, C#, F#, Kotlin, Go.

Essa análise ajuda na chamada de segurança de tipos na utilização dos dados pelo programador.

### Dinâmica 

A tipagem dinâmica também é verificada mais de uma maneira diferente, ela verifica direto os tipos de dados.

Linguagem que usam tipagens dinâmicas
Ruby, Python, Clojure, Elixir.



### Forte
A tipagem forte não realiza conversões automaticamente.

### Fraca

A tipagem fraca, vem da característica da linguagem de realizar conversões automaticamente entre diferentes tipos de dados.
