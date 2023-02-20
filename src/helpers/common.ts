/**
 * Constructs Time in format hh:mm by given time string
 * @param data
 */
export const constructTime = (data: string): string => {
  const date = new Date(data);
  const tempHours = date.getHours();
  const tempMinutes = date.getMinutes();
  let hours = tempHours.toString();
  let minutes = tempMinutes.toString();

  if (tempHours < 10) {
    hours = `0${tempHours}`;
  }

  if (tempMinutes < 10) {
    minutes = `0${tempMinutes}`;
  }

  return `${hours}:${minutes}`;
};

/**
 * Constructs Time in format hh:mm by given time string, where from minutes are subtracted certain amount
 * @param data
 */
export const constructApiTime = (data: string): string => {
  const date = new Date(data);
  let tempHours = date.getHours();
  let tempMinutes = date.getMinutes();
  let hours = tempHours.toString();
  let minutes = tempMinutes.toString();

  // tempMinutes = tempMinutes - 8 < 0 ? 60 + tempMinutes - 8 : tempMinutes - 8;

  if (tempMinutes - 8 < 0) {
    tempMinutes = 60 + tempMinutes - 8;

    if (tempHours === 0) {
      tempHours = 23;
    } else {
      tempHours -= 1;
    }
  } else {
    tempMinutes -= 8;
  }

  if (tempHours < 10) {
    hours = `0${tempHours}`;
  }

  if (tempMinutes < 10) {
    minutes = `0${tempMinutes}`;
  }

  return `${hours}:${minutes}`;
};

/**
 * Constructs travel time in the format [days, hours, minutes] for render
 * @param data
 */
export const getTravelTime = (data: string): string => {
  const splitArr = data.split('d');
  let time = splitArr[1].split(':');

  if (
    !splitArr.length ||
    splitArr.length !== 2 ||
    !time.length ||
    time.length !== 3
  )
    return '';

  const tempDays = splitArr[0];
  let days = '';

  if (
    tempDays &&
    tempDays.length &&
    tempDays.length === 2 &&
    tempDays[0] === '0'
  ) {
    days = tempDays[1];
  }

  const tempHours = time[0];
  let hours = time[0];
  const minutes = time[1];

  if (
    tempHours &&
    tempHours.length &&
    tempHours.length === 2 &&
    tempHours[0] === '0'
  ) {
    hours = tempHours[1];
  }

  const daysText = Number(days) > 0 ? `${days} days, ` : '';
  return `${daysText}${hours} hours ${minutes} minutes`;
};

/**
 * Construncts date in the format yyyy-mm-dd by give date string
 * @param data
 */
export const getDate = (data: string): string => {
  const date = new Date(data);
  const year = date.getFullYear();
  let month: number | string = date.getMonth() + 1;
  let day: number | string = date.getDate();

  if (month <= 9) {
    month = `0${month}`;
  }

  if (day <= 9) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};
