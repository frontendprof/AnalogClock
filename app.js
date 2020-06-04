

const hand_hr=document.querySelector(".hand.hour");
const hand_min=document.querySelector(".hand.minute");
const hand_sec=document.querySelector(".hand.second");

const hr_dis=document.querySelector(".hr");
const min_dis=document.querySelector(".min");
const sec_dis=document.querySelector(".sec");

const day_dis=document.querySelector(".day");
const month_dis=document.querySelector(".month");
const date_dis=document.querySelector(".date");




function tick(){

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    const d=new Date();

        //Day
    let get_day=d.getDay();
    day_dis.textContent=dayNames[get_day];


        //Month
    let get_month=d.getMonth();
    month_dis.textContent=monthNames[get_month];


    //Date
    let get_date=d.getDate();
    date_dis.textContent=get_date;




    //Seconds
    let seconds=d.getSeconds();    
    const secDeg=((seconds/60)*360)+90;
    hand_sec.style.transform=`translateY(-50%) rotate(${secDeg}deg)`;


    //Minutes
    let minutes=d.getMinutes();
    const minDeg=((minutes/60)*360)+((seconds/60)*6)+90;
    hand_min.style.transform=`translateY(-50%) rotate(${minDeg}deg)`;


    //Hour
    let hours=d.getHours();
    const hourDeg=((hours/12)*360)+((minutes/60)*30)+90;
    hand_hr.style.transform=`translateY(-50%) rotate(${hourDeg}deg)`;

  

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}

    hr_dis.textContent=hours;
    min_dis.textContent=minutes;
    sec_dis.textContent=seconds;

 

}

tick();
setInterval(tick,1000);
