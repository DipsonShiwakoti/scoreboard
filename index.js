homeEl=document.getElementById("home-el")
displaytime=document.getElementById("display_timer")
guestEl=document.getElementById("guest-el")
errorEl=document.getElementById("error")
home_score=0
guest_score=0
second=0
minute=0
hour=0
stopwatch=0

function home_plusone() {
    home_score +=1
    homeEl.textContent=home_score
}

function home_plustwo() {
    home_score +=2
    homeEl.textContent=home_score
    
}

function home_plusthree() {
    home_score +=3
    homeEl.textContent=home_score
}

function home_reset(){
    homeEl.textContent=0
    home_score=0
}


function start(){
    const timer=false
    second++
    if (second==60){
        second=0
        minute++
        if(minute==60){
            minute=0
            hour++
        }
    }
    h=hour<10 ? "0"+hour:hour
    m=minute<10 ? "0"+minute:minute
    s=second<10 ? "0"+second:second
    displaytime.textContent=h+":"+m+":"+s
}

function watch_start(){
    stopwatch++
    if (stopwatch==1){
        timer=setInterval(start,1000)
    }
    else{
        errorEl.innerText="Stopwatch is running"
    }
}

function watch_stop(){
    clearInterval(timer)
    stopwatch=0
}




function guest_plusone() {
    guest_score +=1
    guestEl.textContent=guest_score
}


function guest_plustwo() {
    guest_score +=2
    guestEl.textContent=guest_score
}


function guest_plusthree() {
    guest_score +=3
    guestEl.textContent=guest_score
}

function guest_reset(){
    guestEl.textContent=0
    guest_score=0
}





