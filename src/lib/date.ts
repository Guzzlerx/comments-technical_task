export function subtractHours(date: Date, numOfHours: number) {
    const dateCopy = new Date(date.getTime());

    dateCopy.setHours(dateCopy.getHours() - numOfHours);

    return dateCopy;
}

export const getTimeAgo = (date: string): string => {
    const currentDate = new Date().getTime();
    const createdDate = new Date(date).getTime();
    const timeDifference = currentDate - createdDate;
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));

    if (hoursDifference === 0) {
        return "менее часа назад";
    } else if (hoursDifference === 1 || hoursDifference === 21) {
        return `${hoursDifference} час назад`;
    } else if (
        (hoursDifference > 1 && hoursDifference < 5) ||
        (hoursDifference > 20 && hoursDifference <= 24)
    ) {
        return `${hoursDifference} часа назад`;
    } else if (hoursDifference > 24) {
        return new Date(date).toLocaleString();
    } else {
        return `${hoursDifference} часов назад`;
    }
};
