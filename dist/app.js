"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parser
app.use(express_1.default.json()); //without this req is not possible to read sent as  json data. 
// app.use(express.text()) 
// router 
const useRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use('/api/v1/users', useRouter);
app.use('/api/v1/course', courseRouter);
useRouter.get('/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true
    });
});
courseRouter.post('/create-course', (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        data: course
    });
});
// middlewre 
const logger = (req, res, next) => {
    console.log('url is ', req.url, 'method is ', req.method, 'host name is ', req.hostname);
    next();
};
// 
app.get('/', logger, (req, res) => {
    res.send('Hello World! I  am back with TS');
});
app.post('/', logger, (req, res) => {
    console.log('req from post', req.body);
    res.send('Post is done here');
});
exports.default = app;
