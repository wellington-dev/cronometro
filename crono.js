var ss = 00;
var mm = 00;
var hh = 00;
var crono;

//Não precisa do window.onload
window.onload = function () { 
    document.querySelector('.start').onclick = ()=>{
        clearInterval(crono)
        crono = setInterval(()=>{timer() },60);
    }
}
    
document.querySelector('.stop').onclick = ()=>{
        clearInterval(crono)
    }

 document.querySelector('.reset').onclick = ()=>{
     clearInterval(crono);
     hh = 0
     mm = 0
     ss = 0
     document.querySelector('input').value='00:00:00';
}
    
function timer() {
    ss++;

    if(ss == 60){
        ss=0;
        mm++;
    } if(mm == 60){
        mm=0;
        hh++;
    }

    const format =  (hh < 10? '0'+ hh:hh)+ ':' +
                    (mm < 10? '0'+ mm:mm)+ ':' +
                    (ss < 10? '0'+ ss:ss);

    document.querySelector('input').value=format;
}
