const words=document.querySelector(".word");
const hints=document.querySelector(".h");
let uinput=document.getElementById("usinput");
let points=document.querySelector(".point");
let skips=document.querySelector(".skip");
let lives=document.querySelector(".live");
let tpoints=document.querySelector(".tpoint");
let p=0;
let s=3;
let l=3;
let ans;
let cinterval;
let winterval;

const letter=[
        {
            word:"arrivals",
            hint:"Airport area where you pick up family and friends"
        },
        {
            word:"cucumber",
            hint:"this green vegetable is 96% water"
        }
        ,
        {
            word:"username",
            hint:"identification used to sign into a computer"
        }
        ,
        {
            word:"navigate",
            hint:"to find your way somewhere"
        }
        ,
        {
            word:"cinnamon",
            hint:"brown spice from tree bark"
        }
        ,
        {
            word:"colony",
            hint:"ant community"
        }
        ,
        {
            word:"chowchow",
            hint:"dog breed also known as tang quan"
        }
        ,
        {
            word:"perfect",
            hint:"flawless"
        }
        ,
        {
            word:"captain",
            hint:"commander of aeroplane or spaceship"
           
        }
        ,
        {
            word:"lizard",
            hint:"they look like snake with feets"
        }
        ,
        {
            word:"lollipop",
            hint:"hard candy mounted on a stick"
        }
        ,
        {
            word:"baroness",
            hint:"title of nobality,female"
        }
        ,
        {
            word:"mandarin",
            hint:"small type of orange"
        }
        ,
        {
            word:"hydrogen",
            hint:"Main gas in Jupiter"
        }
        ,
        {
            word:"xavier",
            hint:"mutant professor"
        }
        ,
        {
            word:"bristle",
            hint:"stiff plastic strand on toothbrush"
        }    
]
function randomword(){
    let m=Math.floor(Math.random()*letter.length);
    let random=letter[m];
    let wordarr=random.word.split("");
    for(i=wordarr.length-1;i>0;i--)
    {
        let j=Math.floor(Math.random()*(i+1));
        let t=wordarr[i];
        wordarr[i]=wordarr[j];
        wordarr[j]=t;
    }  
    // letter.splice(m,1);
    ans=random.word; 
    uinput.value="";
    uinput.setAttribute("maxlength",ans.length);
    words.innerHTML=wordarr.join("");
    hints.innerHTML=random.hint;
    console.log(letter);

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
    let userinput=uinput.value;
    
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
    popup.classList.add("open-popup");
  
    tpoints.innerHTML=p;
}
function closepopup(){
    points.innerHTML=0;
    lives.innerHTML=3;
    popup.classList.remove("open-popup");
    usinput.classList.remove("correct");
usinput.classList.remove("wrong");
}


randomword()


