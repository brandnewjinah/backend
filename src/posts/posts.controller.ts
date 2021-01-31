import * as express from "express";
import Post from "./posts.interface";
import Controller from "../interface/controller.interface"
import postModel from "./posts.model"

class PostsController implements Controller {
    public path = "/posts";
    public router = express.Router();


    private posts = postModel;

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
        // response.send(this.posts);
    }

    public createAPost = (request: express.Request, response: express.Response) => {
        // const post: Post = request.body;
        // this.posts.push(post);
        // response.send(post);
    }

    public getAPost = (request: express.Request, response: express.Response) => {

    }

    public updateAPost = (request: express.Request, response: express.Response) => {

    }
    
    public deleteAPost = (request: express.Request, response: express.Response) => {

    }

}

export default PostsController;