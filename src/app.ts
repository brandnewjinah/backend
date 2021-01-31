import * as bodyParser from "body-parser";
import * as express from "express";
import * as mongoose from "mongoose";
import Controller from "./posts/posts.interface"

class App {
    public app: express.Application;


    constructor(controllers) {
        this.app = express();


        this.connectToTheDatabase();
        this.initializeMiddlewares();
        this.initializeControllers(controllers)
    }

    public listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`App listening on the port ${process.env.PORT}`);
        })
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}))
    }

    private initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        })
    }

    private connectToTheDatabase() {

        const dbOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }

        mongoose.connect(process.env.MONGODB_ADDRESS, dbOptions)
        .then(() => console.log("db connected"))
        .catch(e => console.log(e))
    }
}

export default App;