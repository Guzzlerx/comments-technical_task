import {IAuthor} from "src/data/authors";
import {IComment} from "src/data/comments";

export interface ICommentListProps {
    comments: IComment[];
    authors: IAuthor[];
}
