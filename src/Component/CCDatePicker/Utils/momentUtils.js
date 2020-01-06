import moment from "moment";

export const timeDiff = (x, y) => moment.duration(x.diff(y));
export const dayDiff = (x, y) => x.isSame(y, "days");
export const monthDiff = (x, y) => x.isSame(y, "month");
export const yearDiff = (x, y) => x.isSame(y, "years");
export const isSameDay = (x, y) =>
  dayDiff(x, y) && monthDiff(x, y) && yearDiff(x, y);
export const makeDateClone = date => date.clone();
export const dayIsBetween = (start, end, between) =>
  start &&
  end &&
  between &&
  between.isSameOrBefore(end, "days") &&
  between.isSameOrAfter(start, "days");
export const sortFunc = (a, b) => {
  if (b.isAfter(a, "days")) return -1;
  if (b.isBefore(a, "days")) return 1;
  return 0;
};
export const isFirstDayOfWeek = date =>
  isSameDay(makeDateClone(date), makeDateClone(date).startOf("week"));
export const isLastDayOfWeek = date =>
  isSameDay(makeDateClone(date), makeDateClone(date).endOf("week"));

export default {
  timeDiff,
  dayDiff,
  monthDiff,
  isSameDay,
  makeDateClone,
  dayIsBetween,
  sortFunc,
  isFirstDayOfWeek,
  isLastDayOfWeek
};
