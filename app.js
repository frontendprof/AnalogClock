

const hand_hr=document.querySelector(".hand.hour");
const hand_min=document.querySelector(".hand.minute");
const hand_sec=document.querySelector(".hand.second");



function tick(){
    const d=new Date();

    //Seconds
    let seconds=d.getSeconds();
    console.log(seconds);
    const secDeg=((seconds/60)*360)+90;
    hand_sec.style.transform=`translateY(-50%) rotate(${secDeg}deg)`;
    
}

tick();
