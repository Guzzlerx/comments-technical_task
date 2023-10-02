export interface ILikeCounterProps {
    type: "filled" | "stroked" | "empty";
    amount: number;
    onClickHandler?: () => void;
}
