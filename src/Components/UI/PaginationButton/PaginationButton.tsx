import {FC} from "react";
import {IPaginationButtonProps} from "./type";
import "./PaginationButton.css";

const PaginationButton: FC<IPaginationButtonProps> = ({
    isSuccess,
    onClickHandler,
}) => (
    <button className="pagination-button" onClick={onClickHandler}>
        {isSuccess ? "Загрузить еще" : "Попробовать снова"}
    </button>
);

export default PaginationButton;
