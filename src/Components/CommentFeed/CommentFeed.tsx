import {FC, useEffect, useState} from "react";
import "./CommentFeed.css";
import getCommentsRequest from "src/api/comments/getCommentsRequest";
import {IPagination, IComment} from "src/data/comments";
import {IAuthor} from "src/data/authors";
import getAuthorsRequest from "src/api/authors/getAuthorsRequest";
import CommentList from "../CommentList/CommentList";
import PaginationButton from "../UI/PaginationButton/PaginationButton";
import CommentFeedDetails from "../CommentFeedDetails/CommentFeedDetails";

const CommentFeed: FC = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    const [authors, setAuthors] = useState<IAuthor[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [isPaginationSuccess, setIsPaginationSuccess] =
        useState<boolean>(true);
    const [totalCommentsAmount, setTotalCommentsAmount] = useState<number>(0);
    const [totalLikesAmount, setTotalLikesAmount] = useState<number>(0);

    const getCommentsAndLikesNumber = async () => {
        try {
            const responses = await Promise.all<IPagination<IComment[]>>([
                getCommentsRequest(1),
                getCommentsRequest(2),
                getCommentsRequest(3),
            ]);

            const totalLikes = responses.reduce((page, nextPage) => {
                const likesInPage = nextPage.data.reduce(
                    (comment, nextComment) => comment + nextComment.likes,
                    0,
                );
                return page + likesInPage;
            }, 0);

            const totalComments = responses.reduce(
                (page, nextPage) => page + nextPage.data.length,
                0,
            );

            setTotalCommentsAmount(totalComments);
            setTotalLikesAmount(totalLikes);
        } catch (err) {
            console.error(err);
        }
    };

    const onLoadMoreHandler = (): void => {
        getCommentsRequest(currentPage + 1)
            .then(({data}: IPagination<IComment[]>) => {
                setCurrentPage((page) => page + 1);
                setComments((comments) => [...comments, ...data]);
                setIsPaginationSuccess(true);
            })
            .catch((err) => {
                setIsPaginationSuccess(false);
                console.error(err);
            });
    };

    const getComments = () => {
        getCommentsRequest(currentPage)
            .then(({data, pagination}: IPagination<IComment[]>) => {
                setComments(data);
                setTotalPages(pagination.total_pages);
            })
            .catch((err) => console.error(err));
    };

    const getAuthors = () => {
        getAuthorsRequest()
            .then((data: IAuthor[]) => setAuthors(data))
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        getComments();
        getAuthors();
        getCommentsAndLikesNumber();
    }, []);

    return (
        <div className="comment-feed">
            <CommentFeedDetails
                commentsAmount={totalCommentsAmount}
                likes={totalLikesAmount}
            />
            <CommentList authors={authors} comments={comments} />
            {currentPage < totalPages && (
                <PaginationButton
                    isSuccess={isPaginationSuccess}
                    onClickHandler={onLoadMoreHandler}
                />
            )}
        </div>
    );
};

export default CommentFeed;
