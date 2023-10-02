import {IAuthor} from "src/data/authors";

export interface IUserInfoProps extends Omit<IAuthor, "id"> {
    created: string;
}
