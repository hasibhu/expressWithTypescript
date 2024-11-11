import express, { NextFunction, Request, Response } from "express";
const app = express()


// parser
app.use(express.json()) //without this req is not possible to read sent as  json data. 

// app.use(express.text()) 


// router 

const useRouter = express.Router();
const courseRouter = express.Router();

app.use('/api/v1/users', useRouter)
app.use('/api/v1/course', courseRouter)

useRouter.get('/create-user', (req: Request, res: Response) => {
    const user = req.body;
    console.log(user);

    res.json({
        success: true
    })
})


courseRouter.post('/create-course', (req: Request, res: Response) => {
    const course = req.body;
    console.log(course);

    res.json({
        success: true,
        data: course
    })
} )



// middlewre 
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log('url is ', req.url, 'method is ', req.method, 'host name is ',req.hostname);
    next();
};



// 
app.get('/', logger, (req: Request, res: Response) => {
    res.send('Hello World! I  am back with TS')
});


app.post('/', logger,   (req: Request, res: Response) => {
    console.log('req from post',req.body);
    res.send('Post is done here')
})


export default app;