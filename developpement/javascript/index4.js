let player;
let computer = ["ciseaux","pierre","papier"];
let choixCOM;
let choixPlayer;




choixPlayer = window.prompt("choisis de mettre des ciseaux , une pierre ou un papier.","");

choixCOM = Math.floor(Math.random() * 3);

console.log(computer[choixCOM]);

switch(choixPlayer)
{
    case "ciseaux":
      player = 0;
    break;
    
    case "pierre":
       player = 1;
    break;
    
    case "papier":
       player = 2;
    break;
    
    default: "respecte la consigne";
    break;
}



if(choixCOM == player )
{
    alert("Tu as choisi "+ choixPlayer +" et "+"l'ordinateur a chosit "+computer[choixCOM]+" , donc c'est une egalité");
}

else if(choixCOM < player && player == 2 && choixCOM == 0)
{
    alert("Tu as choisi "+ choixPlayer +" et "+"l'ordinateur a chosit "+computer[choixCOM]+" , donc tas perdu");    
}

else if(choixCOM > player && player == 0 && choixCOM == 2)
{
    alert("Tu as choisi "+ choixPlayer +" et "+"l'ordinateur a chosit "+computer[choixCOM]+" , donc t'as gagné");
}

else if(choixCOM < player)
{
    alert("Tu as choisi "+ choixPlayer +" et "+"l'ordinateur a chosit "+computer[choixCOM]+" , donc t'as gagné");
}
else if(choixCOM > player)
{
    alert("Tu as choisi "+ choixPlayer +" et "+"l'ordinateur a chosit "+computer[choixCOM]+" , donc t'as perdu");
}



