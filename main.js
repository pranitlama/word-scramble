const words=document.querySelector(".word");
const hints=document.querySelector(".h");
let uinput=document.getElementById("usinput");
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
let ans;
function randomword(){
    let random=letter[Math.floor(Math.random()*letter.length)];
    let wordarr=random.word.split("");
    for(i=wordarr.length-1;i>0;i--)
    {
        let j=Math.floor(Math.random()*(i+1));
        let t=wordarr[i];
        wordarr[i]=wordarr[j];
        wordarr[j]=t;
    }  
    ans=random.word; 
    uinput.value="";
    words.innerHTML=wordarr.join("");
    hints.innerHTML=random.hint;

}
function check(){
    let userinput=uinput.value;
    if(userinput!=ans)
    {
        alert("wrong");
    }
    else{
        alert("correct");
        uinput.value="";
        randomword();
    }
}

randomword()

