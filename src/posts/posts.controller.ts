import * as express from "express";
import Post from "./posts.interface";

class PostsController {
    public path = "/posts";
    public router = express.Router();

    private posts: Post[] = [
        {
            author: "Marcin",
            content: "abcced",
            title: "Lorem Ipsum",
        }
    ]

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path, this.getAllPosts);
        this.router.get(`${this.path}/:id`, this.getAPost);
        this.router.post(this.path, this.createAPost);
        this.router.put(this.path, this.updateAPost);
        this.router.delete(this.path, this.deleteAPost);
    }

    public getAllPosts = (request: express.Request, response: express.Response) => {

    }

    public createAPost = (request: express.Request, response: express.Response) => {

    }

    public getAPost = (request: express.Request, response: express.Response) => {

    }

    public updateAPost = (request: express.Request, response: express.Response) => {

    }
    
    public deleteAPost = (request: express.Request, response: express.Response) => {

    }

}

export default PostsController;