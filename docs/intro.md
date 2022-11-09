---
sidebar_position: 1
---
# Quickstart

## Getting Started

Rover is a backend automation tool that generates SAM projects based on predefined modules and components. It not only helps in deploying SAM project through CLI but also helps in generating CI/CD Pipelines. It has a set of commonly used modules and components which can be added and can be used immediatlely.Rover is a backend automation package that generates SAM projects based on predefined modules and components. And helps in deploying  SAM project through CLI or generate CI/CD Pipeline. It has a set of predefined modules and components which are commonly used

## Installation

Rover is a CLI tool developed using typescript. Supporeted languages include Node and Python  along with AWS Services.

To Install:

```shell
 npm install @rover-tools/cli -g
```

## Start with the Rover:

### To generate SAM Project

```shell
rover init
```

After running `rover init`  you will get 3 choices
  * Create a new sam project
  * Add components 
  * Add modules 

```shell
Hey, what do you want ? 
  1) create new SAM project
  2) add components to existing SAM
  3) add modules to existing SAM
  Answer: 1
```

On selecting the first choice you have to give project name, language  and have to select the modules to be in the project.

#### Note: currently the add module feature is in progress

```shell
Hey, what do you want ? create new SAM project
? App Name: test
? Choose your language : Node
? Module Type : Base Module : It’s a module with 2 stacks and 2 lambdas in each stack 
? Do you want to add one more modules ?  No

```

you can have multiple modules in the project.
This is example of a project with a base component and a CRUD module.

```shell
Hey, what do you want ? create new SAM project
? App Name: test
? Choose your language Node
? Module Type : Base Module : It’s a module with 2 stacks and 2 lambdas in each stack 
? Do you want to add one more modules ?  Yes
? Module Type : CRUD : CRUD APIs
? API Name : book
? API Path(e.g /book) : /book
? Please select your Methods : put, get, post, delete
? Do you want to add another API ? No
? Do you want to add one more modules ?  No
```

### To deploy SAM Project

```shell
rover deploy
```

On `rover deploy` you will get 3 choices

* One to generate CI/CD pipeline
* Deploy through CLI
* Deploy by pushing to repository

```shell
? Deploy through: 
  1) generate pipeline
  2) cli
  3) repository and pipeline
  Answer: 1

```

Generating pipeline requires some mandatory information like repository access , repo tool , branches  , deployment region and event/trigger to deploy.

```shell
? Deploy through: generate pipeline
? Repo Type: public
? Tools: GitHub
? Please enter the required number of environments/branch you want ? 1
? Envrionment 1 : dev
? Please select your Steps required for dev environment  : build, deploy
? Stack Name(optional) --> dev : 
? Deployment Bucket(optional) --> dev : 
? Deployment Region : ap-south-1
? Deployment Parameter(optional) --> dev : 
? Please select your Deployment events : push
```

or we can directly deploy by giving deployment region where this deployed using SAM CLI.

```shell
? Deploy through: cli
? Stack Name(optional) : 
? Bucket Name(optional) : 
? Deployment region: ap-south-1
```
