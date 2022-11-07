export const generateStarsByCount = (count) => {
  return String("★").repeat(count).padEnd(5, "☆");
};

export const convertTime = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  const parseHours = hours == 1 ? `${hours} hr` : `${hours} hrs`
  const parseMinutes = minutes == 1 ? `${minutes} min` : minutes == 0 ? '' : `${minutes} mins`
  return `${parseHours} ${parseMinutes}`;
};
