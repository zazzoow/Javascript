


function TVA()
{
   try
   {
     let prix = window.prompt("Veuiller ecrir le prix HT du prix du produit que vous vouller acheter","");
     const TVA = 20;
     if(prix == NaN)
     {
        document.alert("error");
        catch(err)
        {
          document.getElementById("dodo").innerHTML = err.message;
        }
     }
     let ttc = prix * (1 + (20 / 100));
     let va = ttc - prix;
     document.getElementById("jojo").innerHTML = "Voici le montant du prix TTC : "+ ttc +"euros"+"<br>"+"Voici le montant de la TVA : "+ TVA +"%"+" , soit "+va+" euros ";
   }

}
