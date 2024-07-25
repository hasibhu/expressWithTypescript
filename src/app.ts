

import express, { NextFunction, Request, Response } from "express";
const app = express()
const port = 3000


// parser
app.use(express.json()) //without this req is not possible to read sent as  json data. 
app.use(express.text()) 

// middlewre 

const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log('url is ', req.url, 'method is ', req.method, 'host name is ',req.hostname);
    next();
};



app.get('/', logger, (req: Request, res: Response) => {
    res.send('Hello World!')
});


app.post('/', logger,  (req: Request, res: Response) => {
    console.log(req.body);
    res.send('Post is done here')
})



export default app;