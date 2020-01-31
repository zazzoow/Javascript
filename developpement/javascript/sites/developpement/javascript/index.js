


let voiture = {
    marque:"nissan",
    construction: new Date(2019),
    achat: new Date(2020-01-29),
    passager: ["Carlos","Ghosn"]
}

let zep = 56;
let plin= "56";

let zeplin = ( zep == plin);
let zepline = ( zep === plin);

const ageMini = 21;
const ageclint= 20;

if(ageMini <= ageclint || zep <= plin && zepline === zeplin)
{
    alert("rentre");
}
else if(ageMini < zep)
{
    alert("go to your mother");
}
else 
{
    alert("get out");
}


document.getElementById("yee").innerHTML= zeplin +"<br/>"+zepline ;