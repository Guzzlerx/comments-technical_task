import {FC} from "react";
import {ICommentFeedDetailsProps} from "./type";
import "./CommentFeedDetails.css";
import LikeCounter from "../UI/LikeCounter/LikeCounter";
import {formatCommentWord} from "src/lib/comment";

const CommentFeedDetails: FC<ICommentFeedDetailsProps> = ({
    commentsAmount,
    likes,
}) => (
    <div className="comment-feed-details">
        {commentsAmount > 0 && (
            <p className="comment-feed-details__comments">
                {formatCommentWord(commentsAmount)}
            </p>
        )}
        {likes > 0 && <LikeCounter amount={likes} type="empty" />}
    </div>
);

export default CommentFeedDetails;
