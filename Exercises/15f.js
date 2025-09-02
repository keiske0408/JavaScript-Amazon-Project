function isWeekend(date){
  const dayWeek = date.format('dddd');
  return dayWeek === "Saturday" || dayWeek ==="Sunday";
}

export default isWeekend;