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
