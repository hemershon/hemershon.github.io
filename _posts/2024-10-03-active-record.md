---
layout: post
title: "Active Record"
permalink: active-record
date: 2024-10-03 13:09:59
comments: true
description: "Active Record"
keywords: ""
image: assets/images/orm.jpg
categories:

tags:

---

Entenda a teoria do Active Record no Ruby on Rails é um padrão de design que facilita a interação entre a aplicação e o banco de dados. Ele é parte da arquitetura MVC (Model-View-Controller) do Rails e serve como uma camada de abstração para o acesso a dados. Aqui estão os principais conceitos e características do Active Record:

### 1. **Modelo como Representação de Dados**
   - Cada classe de modelo no Rails representa uma tabela no banco de dados. Por exemplo, uma classe `User` representa a tabela `users`.
   - Os atributos da classe correspondem às colunas da tabela.

### 2. **CRUD Simplificado**
   - O Active Record fornece métodos para realizar operações CRUD (Create, Read, Update, Delete) de forma simples e intuitiva:
{% highlight ruby %}

     - **Create**: `User.create(name: "John Doe")`
     - **Read**: `User.find(1)` ou `User.where(active: true)`
     - **Update**: `user.update(name: "Jane Doe")`
     - **Delete**: `user.destroy`

{% endhighlight %}

### 3. **Associations (Associações)**
   - Active Record permite definir relações entre diferentes modelos, como `belongs_to`, `has_many` e `has_one`. Essas associações facilitam a recuperação de dados relacionados.
   - Exemplo:
    {% highlight ruby %}
     class Post < ApplicationRecord
       belongs_to :user
     end

     class User < ApplicationRecord
       has_many :posts
     end

    {% endhighlight %}

### 4. **Validations (Validações)**
   - O Active Record permite adicionar validações para garantir que os dados atendam a certos critérios antes de serem salvos no banco de dados.
   - Exemplo:
    {% highlight ruby %}
     class User < ApplicationRecord
       validates :email, presence: true, uniqueness: true
     end
     {% endhighlight %}

### 5. **Callbacks**
   - Active Record permite definir métodos que são executados em pontos específicos do ciclo de vida do modelo, como antes ou depois de criar, atualizar ou destruir registros.
   - Exemplo:
     {% highlight ruby %}
     class User < ApplicationRecord
       before_save :capitalize_name

       private

       def capitalize_name
         self.name = name.capitalize
       end
     end
     {% endhighlight %}

### 6. **Migrations**
   - As migrações são scripts que ajudam a modificar o esquema do banco de dados de forma controlada. O Active Record fornece um sistema de migrações que facilita a criação e alteração de tabelas.
   - Exemplo:
     {% highlight ruby %}
     class CreateUsers < ActiveRecord::Migration[6.0]
       def change
         create_table :users do |t|
           t.string :name
           t.string :email
           t.timestamps
         end
       end
     end
     {% endhighlight %}

### 7. **Scopes**
   - Scopes são métodos que permitem definir consultas reutilizáveis que podem ser encadeadas.
   - Exemplo:
     {% highlight ruby %}
     class User < ApplicationRecord
       scope :active, -> { where(active: true) }
     end
     {% endhighlight %}

**Scopes** são uma funcionalidade do Active Record no Ruby on Rails que permitem definir consultas (queries) reutilizáveis e legíveis de maneira simples e eficaz. Eles são usados para encapsular lógicas de filtragem, tornando o código mais organizado e fácil de entender.

### Vantagens dos Scopes

1. **Reutilização de Código**: Se você precisa repetir uma consulta específica várias vezes em seu código, um scope encapsula essa lógica para que você não tenha que escrever a mesma consulta repetidamente.
2. **Composição de Consultas**: Scopes podem ser encadeados, permitindo compor consultas complexas a partir de várias consultas menores.
3. **Legibilidade**: Utilizar scopes torna o código mais legível, especialmente em projetos grandes.

### Definição de Scopes

Os **scopes** são definidos no modelo (`app/models/`) e têm a seguinte estrutura básica:

{% highlight ruby %}
class ModelName < ApplicationRecord
  scope :name_of_scope, -> { where(condition) }
end
{% endhighlight %}

O scope é definido com `scope :name, -> { query }`, onde `:name` é o nome do scope, e `query` é a condição que define a consulta.

### Exemplo Básico

Vamos supor que temos um modelo `User` com atributos `active` e `created_at`. Aqui estão alguns exemplos de como criar scopes para esse modelo:

{% highlight ruby %}
class User < ApplicationRecord
  # Scope para encontrar usuários ativos
  scope :active, -> { where(active: true) }

  # Scope para encontrar usuários criados no último mês
  scope :created_last_month, -> { where('created_at >= ?', 1.month.ago) }

  # Scope para encontrar usuários com um email específico
  scope :with_email, ->(email) { where(email: email) }
end
{% endhighlight %}

#### Como Usar Scopes

Depois de definir os scopes no modelo, você pode usá-los nas consultas. Aqui estão alguns exemplos de uso:

- Para listar todos os usuários ativos:
  {% highlight ruby %}
  User.active
  {% endhighlight %}

- Para encontrar usuários que foram criados no último mês:
  {% highlight ruby %}
  User.created_last_month
  {% endhighlight %}

- Para encontrar usuários com um email específico:
  {% highlight ruby %}
  User.with_email('example@example.com')
  {% endhighlight %}

- **Encadeando Scopes**:
  Você pode combinar vários scopes juntos, o que resulta em consultas mais poderosas:
  {% highlight ruby %}
  User.active.created_last_month
  {% endhighlight %}

Neste exemplo, o Rails gera uma consulta que encontra usuários ativos que também foram criados no último mês.

### Scopes Dinâmicos

Um scope pode receber parâmetros para tornar a consulta mais flexível. Por exemplo, podemos criar um scope que filtre usuários criados há mais de `n` dias:

{% highlight ruby %}
class User < ApplicationRecord
  # Scope dinâmico com parâmetro
  scope :created_more_than, ->(days) { where('created_at <= ?', days.days.ago) }
end
{% endhighlight %}

Agora, podemos usá-lo passando um valor como argumento:

{% highlight ruby %}
User.created_more_than(30)
{% endhighlight %}

Isso retornaria todos os usuários criados há mais de 30 dias.

### Boas Práticas

1. **Usar lambdas (`->`)**: Sempre defina scopes com lambdas para garantir que eles sejam avaliados no momento da execução, e não no momento da definição do código. Isso evita problemas com consultas que usam variáveis dinâmicas ou dependem de dados atuais.

2. **Encadeamento de Scopes**: Aproveite o encadeamento de scopes para criar consultas mais refinadas de forma progressiva, mantendo cada scope simples e direto.

3. **Evitar Lógica Complexa**: Se a consulta precisa de muita lógica condicional, considere se um **método de classe** não seria mais adequado, uma vez que a intenção dos scopes é manter as consultas simples e reutilizáveis.

### Métodos de Classe vs. Scopes

Embora os scopes sejam convenientes, métodos de classe também podem ser usados quando há necessidade de consultas mais complexas ou quando a lógica não é facilmente expressa com Active Record:

{% highlight ruby %}
class User < ApplicationRecord
  def self.created_last_week
    where('created_at >= ? AND created_at <= ?', 1.week.ago.beginning_of_week, 1.week.ago.end_of_week)
  end
end
{% endhighlight %}

Se a lógica condicional for muito grande, o uso de métodos de classe pode ser mais apropriado do que um scope.

### Scopes Com Ordens e Limites

Scopes também podem incluir ordenações e limites:

{% highlight ruby %}
class Post < ApplicationRecord
  # Scope que retorna os 5 posts mais recentes
  scope :recent, -> { order(created_at: :desc).limit(5) }
end
{% endhighlight %}

Agora, podemos chamar `Post.recent` para obter os 5 posts mais recentes.

Scopes no Active Record são uma forma eficiente de encapsular consultas comuns e reutilizáveis no Rails. Eles tornam o código mais organizado e legível, permitindo consultas flexíveis e poderosas. Quando a lógica é mais complexa, métodos de classe podem ser usados para complementar o uso de scopes.

### 8. **Integração com SQL**
   - Embora o Active Record forneça uma abstração, ele ainda permite que os desenvolvedores escrevam consultas SQL quando necessário, usando o método `find_by_sql` ou passando instruções SQL diretamente.
A integração do **Active Record** com SQL no Ruby on Rails oferece uma camada de abstração que permite realizar operações no banco de dados de forma simples, usando métodos Ruby. No entanto, o Active Record também fornece maneiras de interagir diretamente com SQL quando há necessidade de consultas mais complexas ou específicas.

Aqui estão alguns detalhes sobre como essa integração funciona:

### 1. **Consultas Básicas com Active Record**
Active Record permite executar operações SQL comuns (SELECT, INSERT, UPDATE, DELETE) de forma transparente. Alguns exemplos incluem:

- **SELECT** (leitura de dados):
  {% highlight ruby %}
  User.where(active: true) # SELECT * FROM users WHERE active = true;
  {% endhighlight %}

- **INSERT** (inserção de dados):
  {% highlight ruby %}
  User.create(name: 'John Doe', email: 'john@example.com')
  # INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');
  {% endhighlight %}

- **UPDATE** (atualização de dados):
  {% highlight ruby %}
  user = User.find(1)
  user.update(name: 'Jane Doe')
  # UPDATE users SET name = 'Jane Doe' WHERE id = 1;
  {% endhighlight %}

- **DELETE** (remoção de dados):
  {% highlight ruby %}
  user = User.find(1)
  user.destroy
  # DELETE FROM users WHERE id = 1;
  {% endhighlight %}

### 2. **Consultas SQL Personalizadas com Active Record**
Embora o Active Record permita realizar consultas usando métodos Ruby, às vezes você pode precisar de uma consulta SQL mais complexa ou personalizada. O Active Record permite que você execute SQL bruto diretamente:

- **`find_by_sql`**: Permite executar consultas SQL completas e retornar objetos do modelo correspondente.

  {% highlight ruby %}
  User.find_by_sql("SELECT * FROM users WHERE active = true AND created_at >= '#{1.month.ago}'")
  {% endhighlight %}

  Isso executa a consulta SQL e retorna uma coleção de objetos `User`.

- **`connection.execute`**: Permite executar consultas SQL que não retornam objetos do modelo, como consultas DDL (Data Definition Language), que criam ou alteram tabelas.

  {% highlight ruby %}
  ActiveRecord::Base.connection.execute("DELETE FROM users WHERE last_login IS NULL")
  {% endhighlight %}

  Esse exemplo executa uma query `DELETE` diretamente no banco de dados.

### 3. **Raw SQL com `where` e `order`**
Você pode utilizar SQL bruto dentro dos métodos Active Record, como `where` e `order`, quando precisar de mais flexibilidade.

- **`where` com SQL bruto**:
  {% highlight ruby %}
  User.where("created_at >= ?", 1.week.ago)
  {% endhighlight %}

  Aqui, o Active Record permite o uso de SQL no método `where`, substituindo o `?` pelo valor fornecido (`1.week.ago`), protegendo automaticamente contra injeção de SQL.

- **`order` com SQL bruto**:
  {% highlight ruby %}
  User.order("LENGTH(name) DESC")
  {% endhighlight %}

  Nesse caso, usamos uma função SQL (LENGTH) para ordenar os usuários pelo comprimento do nome.

### 4. **Joins e Associação com SQL**
O Active Record também facilita o uso de **joins** (uniões) de tabelas, mas quando necessário, você pode escrever SQL para unir tabelas diretamente.

- **`joins` com Active Record**:
  {% highlight ruby %}
  User.joins(:posts).where(posts: { published: true })
  {% endhighlight %}

  Isso gera uma consulta SQL com um `INNER JOIN` entre as tabelas `users` e `posts`.

- **SQL personalizado em `joins`**:
  {% highlight ruby %}
  User.joins("INNER JOIN posts ON posts.user_id = users.id AND posts.published = true")
  {% endhighlight %}

  Você pode escrever um SQL `JOIN` mais específico, passando uma string SQL diretamente.

### 5. **Execução de SQL de Manipulação Direta**
Se for necessário criar ou modificar diretamente o banco de dados (por exemplo, em scripts ou migrações), você pode usar SQL diretamente através da conexão do Active Record.

- **Criação de tabelas**:
  {% highlight ruby %}
  ActiveRecord::Base.connection.execute("
    CREATE TABLE archived_users AS
    SELECT * FROM users WHERE active = false
  ")
  {% endhighlight %}

  Esse comando executa SQL para criar uma nova tabela `archived_users`, copiando dados de `users`.

### 6. **Transações com SQL**
O Active Record facilita o uso de transações, que garantem que uma série de operações SQL sejam executadas de maneira atômica (ou todas são bem-sucedidas, ou nenhuma é executada).

- **Usando transações**:
  {% highlight ruby %}
  ActiveRecord::Base.transaction do
    user = User.create!(name: 'John Doe')
    Payment.create!(user: user, amount: 100)
  end
  {% endhighlight %}

  Se qualquer uma das operações falhar (por exemplo, `Payment.create!` lançar uma exceção), o Active Record reverte a transação, garantindo que nenhum dado seja inserido ou alterado.

### 7. **Scopes e SQL**
Você pode combinar SQL personalizado dentro de **scopes** no Active Record para criar consultas reutilizáveis e flexíveis.

- **Exemplo de scope com SQL**:
  {% highlight ruby %}
  class User < ApplicationRecord
    scope :recent, -> { where("created_at >= ?", 1.month.ago) }
    scope :active, -> { where(active: true) }
  end

  # Encadeando scopes
  User.recent.active
  {% endhighlight %}

  Esse código combina um scope que retorna usuários recentes com outro que retorna apenas os usuários ativos, usando SQL bruto dentro do scope.

### 8. **Injeção de SQL Segura**
Rails protege automaticamente contra **injeção de SQL** ao substituir os valores nos métodos como `where` ou `find_by`. Por exemplo:

{% highlight ruby %}
User.where("email = ?", params[:email])
{% endhighlight %}

Aqui, o Rails escapa e formata corretamente o valor de `params[:email]`, evitando que comandos maliciosos sejam executados.

### 9. **Consultas Complexas com `Arel`**
Para consultas mais complexas, você pode usar o **Arel**, que é a biblioteca por trás do Active Record que gera SQL. Ele permite criar consultas dinâmicas mais poderosas, mantendo a segurança e legibilidade.

- **Exemplo básico de Arel**:
  {% highlight ruby %}
  users = User.arel_table
  query = users.project(users[:id], users[:name])
                .where(users[:active].eq(true))
  ActiveRecord::Base.connection.execute(query.to_sql)
  {% endhighlight %}

  Com o Arel, você tem mais controle sobre a construção das consultas SQL diretamente no Ruby, sem perder a abstração fornecida pelo Active Record.

### integração

A integração do Active Record com SQL é altamente flexível e permite que você trabalhe com abstrações de alto nível para a maioria das operações de banco de dados. Quando necessário, você também pode escrever consultas SQL personalizadas ou diretas, garantindo que tenha o controle total sobre as consultas mais complexas e específicas, sem abrir mão da segurança contra injeção de SQL.

### 9. **Convenções sobre Configuração**
   - O Active Record segue a filosofia de "convenções sobre configuração", o que significa que ele funciona automaticamente com base em convenções predefinidas (como nomes de tabelas e colunas), minimizando a necessidade de configuração adicional.
Em Ruby on Rails, o princípio de "Convenção sobre Configuração" (Convention over Configuration, ou **CoC**) é uma das filosofias centrais que torna o framework tão popular e eficiente. Ele se baseia na ideia de que, se o desenvolvedor seguir as convenções estabelecidas pelo Rails, não será necessário especificar muitos detalhes de configuração, pois o Rails já saberá como interpretar o código e suas intenções. Isso ajuda a reduzir o número de decisões que o desenvolvedor precisa tomar, o que resulta em maior produtividade e um código mais limpo e padronizado.

### Como Funciona o "Convenção sobre Configuração" no Rails?

Ao invés de exigir que o desenvolvedor configure explicitamente todos os aspectos de uma aplicação, o Rails adota um conjunto de padrões e convenções predefinidos. Se você seguir essas convenções, o Rails cuidará automaticamente de muitas coisas nos bastidores. Caso você precise desviar dessas convenções, é possível configurar manualmente, mas o Rails assume que a maioria dos casos usará os padrões.

Aqui estão os principais exemplos de como o Rails aplica **Convenção sobre Configuração**:

---

### 1. **Nomeação de Arquivos e Pastas**

O Rails segue uma convenção rígida sobre onde os arquivos devem estar localizados e como eles devem ser nomeados. Ao seguir essas convenções, o Rails pode automaticamente carregar e associar classes, modelos, controladores e outros componentes sem necessidade de configurações extras.

#### Exemplo:
- Modelos ficam em `app/models`.
- Controladores ficam em `app/controllers`.
- Arquivos de views (visões) ficam em `app/views`.

Se você tem um controlador chamado `UsersController`, o Rails automaticamente espera que:
- O arquivo do controlador seja chamado `users_controller.rb`.
- O arquivo esteja localizado em `app/controllers/`.
- O modelo associado seja `User` (singular).
- O modelo esteja em `app/models/user.rb`.

Essa convenção simplifica o fluxo de trabalho, porque o Rails já sabe onde procurar pelas classes e arquivos.

---

### 2. **Nomenclatura de Modelos e Tabelas**

No Rails, os modelos são nomeados no singular, enquanto as tabelas no banco de dados associadas a esses modelos são nomeadas no plural. Essa convenção elimina a necessidade de você configurar explicitamente o nome da tabela em um modelo, a menos que queira desviar dessa convenção.

#### Exemplo:
- Um modelo chamado `User` se associa, por padrão, a uma tabela chamada `users`.
- Um modelo chamado `ProductCategory` se associa, por padrão, a uma tabela chamada `product_categories`.

Caso queira usar um nome de tabela diferente, você pode configurar isso manualmente no modelo:

{% highlight ruby %}
class User < ApplicationRecord
  self.table_name = "my_custom_table"
end
{% endhighlight %}

---

### 3. **Convenções de Rotas**

O Rails utiliza convenções ao criar rotas RESTful (Representational State Transfer) para recursos (resources). Quando você define um recurso no arquivo `config/routes.rb`, o Rails automaticamente cria as rotas CRUD (Create, Read, Update, Delete) associadas ao recurso.

#### Exemplo:

Ao adicionar uma linha no arquivo `config/routes.rb`:

{% highlight ruby %}
resources :users
{% endhighlight %}

O Rails automaticamente cria as seguintes rotas:

| HTTP Verbo | URL            | Controller#Ação  |
|------------|----------------|------------------|
| GET        | /users         | users#index      |
| GET        | /users/:id     | users#show       |
| POST       | /users         | users#create     |
| PATCH/PUT  | /users/:id     | users#update     |
| DELETE     | /users/:id     | users#destroy    |
| GET        | /users/new     | users#new        |
| GET        | /users/:id/edit| users#edit       |

Essas rotas são geradas automaticamente seguindo as convenções RESTful, sem que o desenvolvedor precise definir cada rota manualmente.

---

### 4. **Conexão de Modelos com o Banco de Dados**

Por convenção, os campos da tabela de um modelo devem seguir uma nomenclatura pré-determinada para que o Rails saiba como trabalhar com eles. Por exemplo, o Rails já espera campos como:

- `id`: campo de chave primária (gerado automaticamente).
- `created_at` e `updated_at`: campos de timestamp (gerados automaticamente).
- `user_id`: campo de chave estrangeira para associar com o modelo `User`.

Ao usar convenções como essas, o Rails consegue automaticamente fazer associações (`has_many`, `belongs_to`), criar timestamps, e gerir chaves primárias e estrangeiras, sem configurações extras.

#### Exemplo:
Se você criar uma tabela `posts` com uma coluna `user_id`, o Rails já sabe que `user_id` é a chave estrangeira que associa um `Post` ao modelo `User`. Então, você pode criar uma associação no modelo `Post`:

{% highlight ruby %}
class Post < ApplicationRecord
  belongs_to :user
end
{% endhighlight %}

O Rails automaticamente associa `user_id` à relação com o modelo `User`.

---

### 5. **Convenção para Views e Layouts**

Rails segue convenções para organizar as views dentro da pasta `app/views`, baseando-se nos nomes dos controladores. Quando você cria um controlador chamado `UsersController`, o Rails espera que as views associadas a esse controlador estejam na pasta `app/views/users`.

#### Exemplo:
Se você tem uma ação `index` no `UsersController`, o Rails espera encontrar o arquivo da view correspondente em `app/views/users/index.html.erb`.

Além disso, o Rails também segue convenções para layouts. Se você tem um layout padrão chamado `application.html.erb` em `app/views/layouts/`, o Rails automaticamente aplicará esse layout a todas as páginas, a menos que seja especificado um layout diferente.

---

### 6. **Convenção para Migrações**

As migrações no Rails seguem convenções para gerar mudanças no banco de dados. O Rails gera arquivos de migração nomeados de acordo com a tarefa que estão realizando. Além disso, o Rails usa nomes de tabelas e colunas baseados nos nomes dos modelos.

#### Exemplo:

Ao rodar o comando:

{% highlight ruby %}
rails generate migration AddAgeToUsers age:integer
{% endhighlight %}

O Rails gera uma migração com o nome `AddAgeToUsers`, e o arquivo de migração incluirá automaticamente a instrução para adicionar a coluna `age` do tipo `integer` à tabela `users`.

Essa convenção facilita a compreensão de migrações, já que o nome do arquivo reflete diretamente o que a migração faz.

---

### 7. **Convenção para E-mails e Mailers**

Quando você gera um mailer no Rails, ele segue convenções tanto para a estrutura de diretórios quanto para o nome dos templates de e-mail.

#### Exemplo:

Ao criar um mailer chamado `UserMailer` com uma ação `welcome_email`, o Rails espera que o template correspondente esteja em:

{% highlight ruby %}
app/views/user_mailer/welcome_email.html.erb
{% endhighlight %}

E que o nome da classe `UserMailer` contenha um método chamado `welcome_email`.

---

### 8. **Convenção de Testes**

O Rails também impõe convenções sobre como os testes devem ser organizados. Testes de modelos ficam em `test/models`, testes de controladores ficam em `test/controllers`, e assim por diante. Além disso, Rails espera que os arquivos de teste correspondam aos seus respectivos modelos, controladores ou funcionalidades.

#### Exemplo:

Se você tem um modelo chamado `User`, o Rails espera encontrar um arquivo de teste para ele em `test/models/user_test.rb`.

---

### Benefícios da Convenção sobre Configuração

1. **Produtividade**: O Rails elimina a necessidade de configurar manualmente muitos aspectos da aplicação, permitindo que o desenvolvedor foque mais na lógica do negócio.
2. **Facilidade de Manutenção**: Seguindo convenções, o código Rails fica mais fácil de ler e manter, já que qualquer desenvolvedor familiar com Rails pode entender a estrutura e o fluxo da aplicação sem precisar de extensa documentação.
3. **Redução de Erros**: Ao seguir padrões pré-definidos, o risco de introduzir erros de configuração é minimizado.

### Quando Personalizar?

Embora o Rails siga convenções que cobrem a maioria dos casos, há situações em que você pode precisar personalizar o comportamento. Felizmente, o Rails é flexível o suficiente para permitir que você altere as convenções quando necessário, através de configurações manuais.

Exemplo de personalização:
{% highlight ruby %}
class User < ApplicationRecord
  self.table_name = "usuarios"
end
{% endhighlight %}

---


O princípio de **Convenção sobre Configuração** em Rails torna o desenvolvimento mais rápido, organizado e fácil de entender. Ao aderir às convenções do Rails, você reduz a necessidade de configuração explícita, aproveitando o framework ao máximo. No entanto, quando necessário, o Rails permite configurações personalizadas para cenários específicos, sem comprometer a flexibilidade.
O Active Record é uma ferramenta poderosa que simplifica o desenvolvimento de aplicações Ruby on Rails ao permitir uma interação fácil e intuitiva com o banco de dados, promovendo uma estrutura organizada e facilitando o desenvolvimento ágil.
