---
layout: post
title: "Docker for Rails"
description: "How to dockerize a Ruby on Rails application using a Dockerfile and docker-compose."
date: 2020-04-17 13:44:04 -0300
lang: en
translation_key: docker-para-rails
categories: [DevOps]
tags: [docker, docker-compose, rails]
image: /assets/images/posts/docker.png
permalink: /en/articles/docker-for-rails/
---
## How to dockerize your application

This tutorial is meant to help anyone who struggles to set up a Rails environment with Docker. Here I'll cover how to use Docker and docker-compose, which work together in perfect harmony.

**A quick overview of Docker**

Docker is container software from Docker, Inc. that provides a layer of abstraction and automation for operating-system-level virtualization on Windows, macOS, and Linux.

Requirements:

Docker installed on your machine: [Installing Docker](https://docs.docker.com/get-docker/)
docker-compose installed: [Installing docker-compose](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04)


## Defining the project

Start by setting up the files needed to build the application that will run, along with its dependencies, inside a Docker [container](https://www.redhat.com/en/topics/containers/what-is-docker).

The files are:
>Dockerfile

>docker-compose.yml

>Gemfile

>Gemfile.lock

The first step is to create the [Dockerfile](https://docs.docker.com/engine/reference/builder/)

```
FROM ruby:3.0.0
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
  apt-get update -qq && apt-get install -y nodejs postgresql-client vim && \
  apt-get install -y yarn && \
  apt-get install -y imagemagick && \
  apt-get install -y libvips-tools && \
  apt-get install -y locales

# Install our dependencies
RUN apt-get update && apt-get install -qq -y --no-install-recommends \
nodejs yarn build-essential libpq-dev imagemagick git-all nano

WORKDIR /yourapp
COPY Gemfile /yourapp/Gemfile
COPY Gemfile.lock /yourapp/Gemfile.lock
RUN bundle update mimemagic
RUN bundle install
COPY . /yourapp
```
This puts your application code inside an image that builds a container with Ruby, Bundler, and all of your dependencies.

Now let's create the [Gemfile](https://bundler.io/guides/gemfile.html)

```

source 'https://rubygems.org'
gem 'rails', '~>6'
```

Like every Rails project, we also need a Gemfile.lock
```
touch Gemfile.lock
```

Then the [docker-compose](https://docs.docker.com/compose/) file:

```

version: "3.9"
services:
  db:
    image: postgres
    volumes:
      - ./tmp/db:/var/lib/postgresql/data
    environment:
      POSTGRES_PASSWORD: password
  web:
    build: .
    command: bash -c "rm -f tmp/pids/server.pid && bundle exec rails s -p 3000 -b '0.0.0.0'"
    volumes:
      - .:/yourapp
    ports:
      - "3000:3000"
    depends_on:
      - db
```

Now let's generate the project

```
docker-compose run --no-deps web rails new . --force --database=postgresql
```

First, Compose builds the image for the web service using the Dockerfile. The `--no-deps` flag tells Compose not to start linked services. Then it runs `rails new` inside a new container using that image. Once that's done, you should have a freshly generated application.

You'll need permission to edit the generated files

```
sudo chown -R $USER:$USER .
```

You now have the full Rails file structure in place. Next, we need to rebuild the image so we can use it with Docker.

```
docker-compose build
```

Database configuration

```

default: &default
  adapter: postgresql
  encoding: unicode
  host: db
  username: postgres
  password: password
  pool: 5

development:
  <<: *default
  database: myapp_development


test:
  <<: *default
  database: myapp_test
```

Now you can start the application with

```
docker-compose up
```

If everything is fine, this is the message you'll see in the terminal

```

rails_db_1 is up-to-date
Creating rails_web_1 ... done
Attaching to rails_db_1, rails_web_1
db_1   | PostgreSQL init process complete; ready for start up.
db_1   |
db_1   | 2018-03-21 20:18:37.437 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
db_1   | 2018-03-21 20:18:37.437 UTC [1] LOG:  listening on IPv6 address "::", port 5432
db_1   | 2018-03-21 20:18:37.443 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
db_1   | 2018-03-21 20:18:37.726 UTC [55] LOG:  database system was shut down at 2018-03-21 20:18:37 UTC
db_1   | 2018-03-21 20:18:37.772 UTC [1] LOG:  database system is ready to accept connections
```

Now let's create the database

```

docker-compose run web rake db:create
```

The output will look like this

```

Starting rails_db_1... done
Created database 'yourapp_development'
Created database 'yourapp_test'
```

Then open your browser and go to
```

localhost:3000
```

References

[What is Docker](https://www.redhat.com/en/topics/containers/what-is-docker)

[Docker](https://docs.docker.com/get-docker/)

[Docker Compose](https://docs.docker.com/compose/)

[Gemfile](https://bundler.io/guides/gemfile.html)

[Dockerfile](https://docs.docker.com/engine/reference/builder/)
