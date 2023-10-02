export const DOUBLE_DIGIT_REGEX = /1[1-9]$/;

export const formatCommentWord = (number: number): string => {
    const countAsString = number.toString();
    const lastNumber = parseInt(countAsString[countAsString.length - 1]);
    const hasDoublelDigit = countAsString.match(DOUBLE_DIGIT_REGEX);

    if (lastNumber === 0 || lastNumber > 4 || hasDoublelDigit) {
        return number + " комментариев";
    } else if (lastNumber === 1) {
        return number + " комментарий";
    } else {
        return number + " комментария";
    }
};
