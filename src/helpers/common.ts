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
