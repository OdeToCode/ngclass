# Angular 2 Workshop Repo

## Getting Started

If you can use .NET Core, you'll be working in the `aspnetcore` folder. 
Follow the instructions in the ASP.NET Core section below. 

For everyone else, there is a starter project based on
[preboot's](https://github.com/preboot/angular2-webpack) starter kit in the `node` folder.
Follow the instructions for NodeJS below.

## ASP.NET Core

The `aspnet` core directory is empty. We'll be scaffolding the project from scratch. 
To run the scaffoling, you'll need to install [NodeJS](https://nodejs.org/en/). Please
install the version marked with *latest features* (currently v 7+).

Once NodeJS is installed, you should be able to run the following 
commands to install Yeoman, the scaffolding tool. 

```
npm install -g yo generator-aspnetcore-spa
npm install -g webpack
```

At this point you are now ready to create the project. Clone this repository
and `cd` into the `aspnetcore` directory. Then:

```
yo aspnetcore-spa
```
When asked to choose a framework, choose Angular 2. 

For a project name, choose "movies". 

The generator will run for a bit, then you can open the project in Visual Studio or Visual Studio Code. 

 ## NodeJS

 For NodeJS users, simple change into the node directory then execute the following commands.

```
npm install
npm start
```

You should now have a site running that you can view in the browser. 