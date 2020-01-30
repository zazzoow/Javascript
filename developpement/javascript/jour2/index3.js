let array = new Array();

array[0] = "lundi";
array[1] = "mardi";
array[2] = "mercredi";
array[3] = "jeudi";
array[4] = "vendredi";
array[5] = "samedi";
array[6] = "dimanche";

document.write("la longueur du tableau = " + array.length+"<br>");

let i = 0;

for(i = 0;i < array.length; i++)
{
  document.write(array[i]+"<br>");
}
