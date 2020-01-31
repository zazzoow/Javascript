
"use strict";

const TVA = 20;
let Ristourne;
let montantRistourne;
let montantTTC;



let montantHT = parseFloat(window.prompt("Veuiller ecrir le prix HT du prix du produit que vous vouller acheter",""));
     
     
let ConfirmationRistourne = (window.prompt("veux tu une ristourne ?",""));
     

if(ConfirmationRistourne === "yes" || ConfirmationRistourne ==="oui")
    {
        Ristourne = parseFloat(window.prompt("combien ?",));
        
        alert("here we go");
        
        montantRistourne = montantHT - (Ristourne / montantHT );
    }
else if(ConfirmationRistourne === "no" || ConfirmationRistourne === "non")
    {
        alert("as you wish");
    }
else
    {
        alert("repond yes ou no");
        exit(0);
    }
    
montantTTC = montantRistourne * (1 + (20 / 100)); 
     
     
document.write("Voici le montant du prix TTC : "+ montantTTC +"euros"+"<br>"+"Voici le montant de la TVA : "+ TVA +"%"+" , soit "+montantRistourne+" euros ");
   