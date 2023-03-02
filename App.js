function DayOfProgrammer(year) {
    if(year >= 1700 && year <=1917){
        if(year % 4===0){
            return `12.09.${year}`
        }else{
            return `13.09.${year}`
        }
    }else if(year === 1918){
        return '26.09.1918'
    }
    else{
        if(year%400 ===0 || (year%4 === 0 && year%100 !== 0)){
            return `12.09.${year}`
        }else{
            return `13.09.${year}`
        }
    }
}
console.log(DayOfProgrammer(1984))
