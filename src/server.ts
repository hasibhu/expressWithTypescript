import { Server } from 'http';
import app from './app'
const PORT = 3008;


let server: Server;

async function expressServer() {
   server = app.listen(PORT, () => {
        console.log(`App is running on:   ${PORT}`)
    })
}



expressServer();
