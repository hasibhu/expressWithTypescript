"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// parser
app.use(express_1.default.json()); //without this req is not possible to read sent as  json data. 
app.use(express_1.default.text());
// middlewre 
const logger = (req, res, next) => {
    console.log('url is ', req.url, 'method is ', req.method, 'host name is ', req.hostname);
    next();
};
app.get('/', logger, (req, res) => {
    res.send('Hello World!');
});
app.post('/', logger, (req, res) => {
    console.log(req.body);
    res.send('Post is done here');
});
exports.default = app;
