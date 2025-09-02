function isWeekend(date){
  const weekDate = date.format('dddd');

  if (weekDate === 'Sunday'){
    console.log('The day is Sunday')
  }
  else if (weekDate === 'Saturday'){
    console.log('The day is Saturday')
  }
  else {
    console.log ('It is weekdays')
  }
}

export default isWeekend;
