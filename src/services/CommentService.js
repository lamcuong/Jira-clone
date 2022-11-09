import { baseService } from "./baseServices";

export class CommentService extends baseService {
    constructor() {
        super();
    }

    insertComment = (objComment) => {
        return this.post(`Comment/insertComment`, objComment)
    }

}

export const commentService = new CommentService();