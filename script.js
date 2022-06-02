let input = document.getElementById("input")
let button=document.getElementById("button")

button.addEventListener("click",function(ev){

let datavalue=input.value

let array = datavalue.split("-")

let year=array[0]
let month=array[1]
let days=array[2]

let latitude ="40.409264";
let longitude="49.867092";

axios.get(`http://api.aladhan.com/v1/calendar?latitude=${latitude}&longitude=${longitude}&method=2&month=${month}&year=${year}`)
.then(function (res) {
    



res.data.data.forEach(item => {
    
    let day =item.date.gregorian.day
   
    if(day===days){
        console.log(`Asr: ${item.timings.Asr}`);
        console.log(`Dhuhr: ${item.timings.Dhuhr}`);
        console.log(`Fajr: ${item.timings.Fajr}`);
        console.log(`Imsak: ${item.timings.Imsak}`);
        console.log(`Isha: ${item.timings.Isha}`);
        console.log(`Maghrib: ${item.timings.Maghrib}`);
        console.log(`Midnight: ${item.timingsMidnight}`);
        console.log(`Sunrise: ${item.timings.Sunrise}`);
        console.log(`Sunset: ${item.timings.Sunset}`);
    }
    
});

})
.catch(function (error) {
    alert("error")
    

})

})