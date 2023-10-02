import {IComment} from "src/data/comments";

export interface ICommentFeedDetailsProps {
    likes: IComment["likes"];
    commentsAmount: number;
}
