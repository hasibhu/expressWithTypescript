# Mongoose and ExpressJs


* first run > node init -y
### then install necessary packages, 
like- express, mongoose, cors, body-parser, dotenv, 
>> npm i express mongoose cors body-parser dotenv
>> npm i -d typescript

>> to create tsconfig json file, run >>  tsc --init
>> change root dir and outdir into ./src and ./dist

 >> run "tsc" in console to convert the ts file into js file. they will be generated in the dist folder as it has been indicated in the tsconfig file.

 >> To automate the file conversion, run "tsc -w". whenever any changes will be save, the dist folder will will be updated. 

>>  install install "npm add -D @types/node" to use ES Module Syntax that will allow import & export facility. 

>> *** The ES module syntax supports TypeScript types directly in the import statement, providing better type safety and development experience.

x
>> to remove error from import express, { NextFunction, Request, Response } from "express"; install "npm add -D @types/express". 

>> 


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
