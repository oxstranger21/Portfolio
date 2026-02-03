// Typing
const words=["Cybersecurity","Bug Bounty Hunter","App Developer"];
let i=0,j=0,current="",isDeleting=false;

function type(){
  current=words[i];
  document.querySelector(".typing").textContent=current.substring(0,j);

  if(!isDeleting && j<current.length) j++;
  else if(isDeleting && j>0) j--;

  if(j===current.length) isDeleting=true;
  if(j===0 && isDeleting){
    isDeleting=false;
    i=(i+1)%words.length;
  }

  setTimeout(type,100);
}
type();

// Particles
particlesJS("particles-js",{
  particles:{
    number:{value:90},
    size:{value:3},
    move:{speed:3},
    line_linked:{enable:true,color:"#00aaff"}
  }
});
document.getElementById("hamburger").addEventListener("click", function(){
  document.getElementById("navMenu").classList.toggle("active");
});

const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", function(){
  this.classList.toggle("open");
});

