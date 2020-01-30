
let nombre1;
let nombre2;
let operateur;
let resultat;

nombre1 = parseFloat(window.prompt("ecris un premier nonbre",""));

nombre2 = parseFloat(window.prompt("ecris un deuxieume nombre",""));

operateur = window.prompt("Quel type d'operation veut tu faire (ecris un symbole entre +, - , ^ , *, /","");

    if(isNaN(nombre1) || isNaN(nombre2) || (nombre2 == 0 && operateur == "/"))
    {
        alert("t as pas respecter la consigne");
    }

    switch(operateur)
    {
        case "+":
        case "addition":
        resultat = nombre1 + nombre2;
        break;
        
        case "-":
        case "soustraction":
        resultat = nombre1 - nombre2;
        break;
        
        case "*":
        case "multiplication":
        resultat = nombre1 * nombre2;
        break;
        
        case "^":
        case "puissance":
        resultat = Math.pow(nombre1,nombre2);
        break;
        
        case "/":
        case "division":
        resultat = nombre1 / nombre2;
        break;
        
        default: "tu n'as pas respecter les consignes";
        break;
    }

document.write("voici le calcul que tu as effectué : "+nombre1+" + "+nombre2+" = "+resultat);

