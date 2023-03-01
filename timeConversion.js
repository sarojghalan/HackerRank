function timeConversion(str){
    // to check only am and pm 
    console.log(str.includes('PM'));
    let addedHour = 0;
    let convertedHour = ""
    if(str.includes('PM')){
        // PM true xa vane 12 must be add
        if(str.includes('12')){
            convertedHour = str.replace('PM','');
        }else{
            addedHour = parseInt(str.slice(0,2)) + 12;
            convertedHour = str.replace(str.slice(0,2),addedHour.toString()).replace('PM','');
        }
        //replacing PM with empty string
    }else{
        convertedHour = str.replace('AM','');
        if(str.includes('12')){
            convertedHour=convertedHour.replace('12','00')
        }
    }

    console.log(typeof convertedHour , convertedHour);
}
let result = timeConversion('12:54:00PM');