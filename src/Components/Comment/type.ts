import {IAuthor} from "src/data/authors";
import {IComment} from "src/data/comments";

export interface ICommentProps {
    comment: IComment;
    comments: IComment[];
    authors: IAuthor[];
}
