import moment from "moment";

interface DateData {
  minutes: number;
  hours: number;
  days: number;
  weeks: number;
  months: number;
  years: number;
}

const getTime = () => moment().format("HH:mm:ss (Z)");

const getTimeFromStr = (time: string) => moment(time).format("HH:mm:ss (Z)");

const getDate = () => moment().format("YYYY-MM-DD");

const getDateFromStr = (date: string) => moment(date).format("YYYY-MM-DD");

const getFullDate = (data?: Partial<DateData>) => {
  if (data) {
    return moment()
      .add(data)
      .format("YYYY-MM-DD HH:mm:ss (Z)");
  } else {
    return moment().format("YYYY-MM-DD HH:mm:ss (Z)");
  }
};

const getFullDateFromStr = (date: string, data?: Partial<DateData>) => {
  if (data) {
    return moment(date)
      .add(data)
      .format("YYYY-MM-DD HH:mm:ss (Z)");
  } else {
    return moment(date).format("YYYY-MM-DD HH:mm:ss (Z)");
  }
};

const getFullDateMilliseconds = (data?: Partial<DateData>) => {
  if (data) {
    return moment()
      .add(data)
      .unix();
  } else {
    return moment().unix();
  }
};

const getFullDateMillisecondsFromStr = (
  date: string,
  data?: Partial<DateData>
) => {
  if (data) {
    return moment(date)
      .add(data)
      .unix();
  } else {
    return moment(date).unix();
  }
};

export {
  getTime,
  getTimeFromStr,
  getDate,
  getDateFromStr,
  getFullDate,
  getFullDateFromStr,
  getFullDateMilliseconds,
  getFullDateMillisecondsFromStr
};
