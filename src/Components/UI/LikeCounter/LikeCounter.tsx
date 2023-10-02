import {FC} from "react";
import {ILikeCounterProps} from "./type";
import "./LikeCounter.css";
import {ReactComponent as IconLike} from "../../../assets/icons/like-icon.svg";

const LikeCounter: FC<ILikeCounterProps> = ({onClickHandler, amount, type}) => (
    <div className="like-counter">
        <button onClick={onClickHandler} className="like-counter__button">
            <IconLike
                className={`like-counter__icon like-counter__icon_${type}`}
            />
        </button>
        <p className="like-counter__text">{amount.toLocaleString("ru-RU")}</p>
    </div>
);

export default LikeCounter;
