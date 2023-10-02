import {FC} from "react";
import {ICommentListProps} from "./type";
import Comment from "../Comment/Comment";
import "./CommentList.css";

const CommentList: FC<ICommentListProps> = ({comments, authors}) => {
    const rootComments = comments.filter((comment) => comment.parent === null);

    return (
        <div className="comment-list">
            {rootComments.map((comment) => (
                <Comment
                    key={comment.id}
                    comment={comment}
                    comments={comments}
                    authors={authors}
                />
            ))}
        </div>
    );
};

export default CommentList;
