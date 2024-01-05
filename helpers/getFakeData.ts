import {getRandomNumber} from "@/helpers/getRandomNumber";

export function getFakeCategory() {
    const variants = ['Front-end', 'Back-end', 'DevOps'];
    return variants[getRandomNumber(0, 2)];
}

export function getFakePublicationDate() {
    const variants = ['1 месяц назад', '3 месяца назад', '5 месяцев назад'];
    return variants[getRandomNumber(0, 2)];
}

export function getFakeReadEstimation() {
    const variants = ['3 минуты', '5 минут', '10 минут'];
    return variants[getRandomNumber(0, 2)];
}
