/* ==========================
   AOS
========================== */

AOS.init({

    duration:1000,
    once:true

});


/* ==========================
   NAVBAR
========================== */

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        nav.classList.add("active");

    }else{

        nav.classList.remove("active");

    }

});


/* ==========================
   PROGRESS BAR
========================== */

window.onscroll=function(){

let winScroll=document.body.scrollTop ||
document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-
document.documentElement.clientHeight;

let scrolled=(winScroll/height)*100;

document.getElementById("progress").style.width=scrolled+"%";

}


/* ==========================
   BACK TO TOP
========================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}


/* ==========================
   TYPING EFFECT
========================== */

const text="Menjadi Guru Profesional yang Menginspirasi";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();


/* ==========================
   CARD HOVER EFFECT
========================== */

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX;
const y=e.offsetY;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,#ffffff,#eef5ff)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="#fff";

});

});


/* ==========================
   HERO IMAGE FLOATING
========================== */

const hero=document.querySelector(".hero-right img");

let angle=0;

setInterval(()=>{

angle+=0.02;

hero.style.transform=`translateY(${Math.sin(angle)*10}px)`;

},20);


/* ==========================
   SCROLL REVEAL TITLE
========================== */

const titles=document.querySelectorAll(".title");

window.addEventListener("scroll",()=>{

titles.forEach(title=>{

const pos=title.getBoundingClientRect().top;

if(pos<window.innerHeight-100){

title.style.opacity=1;

title.style.transform="translateY(0px)";

}

});

});


/* ==========================
   BUTTON RIPPLE EFFECT
========================== */

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("click",function(e){

let x=e.clientX-this.offsetLeft;

let y=e.clientY-this.offsetTop;

let ripple=document.createElement("span");

ripple.classList.add("ripple");

ripple.style.left=x+"px";

ripple.style.top=y+"px";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/* ==========================
   PARALLAX HERO
========================== */

window.addEventListener("scroll",()=>{

let value=window.scrollY;

document.querySelector("#home").style.backgroundPositionY=value*0.4+"px";

});


/* ==========================
   COUNT ANIMATION
========================== */

function animateValue(id,start,end,duration){

let obj=document.getElementById(id);

if(!obj) return;

let range=end-start;

let current=start;

let increment=end>start?1:-1;

let stepTime=Math.abs(Math.floor(duration/range));

let timer=setInterval(function(){

current+=increment;

obj.innerHTML=current;

if(current==end){

clearInterval(timer);

}

},stepTime);

}

animateValue("guru",0,100,2500);


/* ==========================
   CONSOLE MESSAGE
========================== */

console.log("%cPortofolio PPG","font-size:25px;color:#2563eb;font-weight:bold;");
console.log("Dibuat dengan ❤️ menggunakan HTML CSS dan JavaScript");