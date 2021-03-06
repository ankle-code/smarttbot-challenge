import { isToday } from "date-fns";

export const getTodayMovimentations = (movimentations = []) => {
  return movimentations.filter(({ date }) => {
    const dateDay = date.split(" ")[0].split("-");
    const dateToCheck = new Date(
      dateDay[0],
      Number(dateDay[1] - 1),
      dateDay[2]
    );
    return isToday(dateToCheck);
  });
};
