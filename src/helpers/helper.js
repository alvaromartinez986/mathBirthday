import dayjs from "dayjs";


export function addDays(date = dayjs(), days) {
    const dateJs = date.toDate();
    dateJs.setDate(dateJs.getDate() + days);
    return dateJs.toLocaleDateString();
}

export const calculateMathBirthday = (dateBirthday = dayjs()) => {
    const dateNow = new Date().setHours(0, 0, 0, 0)
    const diffTime = Math.abs(dateNow - dateBirthday.toDate().setHours(0, 0, 0, 0));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const nextBirthday = Math.ceil(Math.log10(diffDays));

    return diffDays === 1 ? 1 : nextBirthday;
}



