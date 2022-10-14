const words=document.querySelector(".word");
const hints=document.querySelector(".h");
let uinput=document.getElementById("usinput");
let points=document.querySelector(".point");
let skips=document.querySelector(".skip");
let lives=document.querySelector(".live");
let tpoints=document.querySelector(".tpoint");
let r=document.querySelector(".result");
let p=0;
let s=3;
let l=3;
let ans;
let cinterval;
let winterval;
const aletter=[];
function randomword(){

    let m=Math.floor(Math.random()*letter.length);
    let random=letter[m];
    let wordarr=random.word.split("");
    if(aletter.length==letter.length)
    {
        openpopup();
        
    }
    else if(aletter.includes(random.word))
    {
        randomword();
    }
    else{

        for(i=wordarr.length-1;i>0;i--)
        {
            let j=Math.floor(Math.random()*(i+1));
            let t=wordarr[i];
            wordarr[i]=wordarr[j];
            wordarr[j]=t;
    }  

    ans=random.word; 
    uinput.value="";
    uinput.setAttribute("maxlength",ans.length);
    words.innerHTML=wordarr.join("");
    hints.innerHTML=random.hint;
    skips.innerHTML=s;
    // console.log(letter);
    //  console.log(p);
    //  console.log(s);
    // console.log(aletter);
}


}

document.getElementById("red").onclick=function(){
    if(s<=0)
    {
        document.getElementById("red").disabled = true;
        alert("skipped used");
    }
    else{

        s--;
        randomword();
    }
 }

function correct(){
 
    p++;
    uinput.value="";
    points.innerHTML=p;
   

  
}

function wrong(){
   
    l--;
    uinput.value="";
    lives.innerHTML=l;
  
}

function isalive(){
    if(l==0)
    {
        openpopup();
    }
}
function check(){
    let userinput=uinput.value.toLowerCase();
    
if(userinput=="")
{
    alert("please enter a word");

}
else{

    if(userinput!==ans)
    {
        usinput.classList.add("wrong");
        winterval= setTimeout(()=>{
            usinput.classList.remove("wrong");
            
        },500);
        wrong();
        isalive();
        
    }
    else{
        aletter.push(ans);
        usinput.classList.add("correct");
        cinterval= setTimeout(()=>{
            usinput.classList.remove("correct");
        },500);
        correct();
        randomword();
        
    }
}
    
    
}

function openpopup(){
 while(aletter.length)
 {
    aletter.pop();
 }

 if(p==letter.length)
 {
        r.innerHTML="Congratulation";
 }
 else{
    r.innerHTML="Game Over";
 }
    popup.classList.add("open-popup");
    tpoints.innerHTML=p;
    p=0;
    s=3;
     l=3;
     document.getElementById("red").disabled = false;
}
function closepopup(){
    points.innerHTML=0;
    lives.innerHTML=3;
    popup.classList.remove("open-popup");
    usinput.classList.remove("correct");
    usinput.classList.remove("wrong");
    randomword();

}


 randomword()


