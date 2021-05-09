export function l(x) {
  return console.log(x);
}
export function d(x) {
  return console.log(x);
}

export function DateTimeFormat() {
  let date = new Date();
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let hour = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: 11,
    12: 12,
    13: 01,
    14: 02,
    15: 03,
  };

  const getMonthIndex = date.getMonth();
  const monthName = month[getMonthIndex];

  const getDayIndex = date.getDay();
  const getDayName = day[getDayIndex];

  const getDay = date.getDate();
  const getFullYear = date.getFullYear();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;

  const fullDate = `${getDay} ${monthName} ${strTime} `;
  return fullDate;
}
