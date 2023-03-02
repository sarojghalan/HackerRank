function DayOfProgrammer(year, day) {
    let daySum = 0;
  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
  for(let i = 1;i<=8;i++){
    daySum += getDaysInMonth(year,i); 
  }
  return new Date(year,09,day-daySum).toLocaleDateString()

}
DayOfProgrammer(1984, 256);
