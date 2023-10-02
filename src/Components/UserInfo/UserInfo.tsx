import {FC} from "react";
import {IUserInfoProps} from "./type";
import "./UserInfo.css";
import {getTimeAgo} from "src/lib/date";

const UserInfo: FC<IUserInfoProps> = ({avatar, created, name}) => {
    return (
        <div className="user-info">
            <img
                className="user-info__avatar"
                src={avatar}
                alt={`${name}'s avatar`}
            />
            <div className="user-info__container">
                <h2 className="user-info__name">{name}</h2>
                <p className="user-info__time">{getTimeAgo(created)}</p>
            </div>
        </div>
    );
};

export default UserInfo;
