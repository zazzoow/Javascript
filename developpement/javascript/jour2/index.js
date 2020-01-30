


let voiture = {
    marque:"nissan",
    construction: 0,
    achat: 0,
    passager: 0,
}

 voiture.construction = new Date(2019);
 voiture.achat = new Date(2020-01-29);
 voiture.passager = ["Carlos","Ghosn"];


document.write("voici les passager de la voiture :"+voiture.passager[0]+" and "+voiture.passager[1]);