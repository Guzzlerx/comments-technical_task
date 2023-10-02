import {FC, useState} from "react";
import {ICommentProps} from "./type";
import "./Comment.css";
import UserInfo from "../UserInfo/UserInfo";
import LikeCounter from "../UI/LikeCounter/LikeCounter";
import {IComment} from "src/data/comments";

const Comment: FC<ICommentProps> = ({comment, comments, authors}) => {
    const [likes, setLikes] = useState<IComment["likes"]>(comment.likes);
    const author = authors.filter((author) => author.id === comment.author)[0];

    const isLikesEqualCommentLikes = likes === comment.likes;

    const nestedComments = comments
        .filter((childComment) => childComment.parent === comment.id)
        .map((childComment) => (
            <Comment
                authors={authors}
                key={childComment.id}
                comment={childComment}
                comments={comments}
            />
        ));

    const onLikeClickHandler = (): void => {
        isLikesEqualCommentLikes
            ? setLikes((likes) => likes + 1)
            : setLikes((likes) => likes - 1);
    };

    return (
        <div className="comment">
            <div className="comment__author-container">
                <UserInfo
                    avatar={author?.avatar}
                    created={comment?.created}
                    name={author?.name}
                />
                <LikeCounter
                    onClickHandler={onLikeClickHandler}
                    amount={likes}
                    type={isLikesEqualCommentLikes ? "stroked" : "filled"}
                />
            </div>
            <p className="comment__text">{comment.text}</p>
            {nestedComments && (
                <div className="nested-comment">{nestedComments}</div>
            )}
        </div>
    );
};

export default Comment;
