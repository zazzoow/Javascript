let i;
let j;

let nombre;

nombre = parseInt(window.prompt("met un nombre pour definir la talle de ton tableau :",""));

document.write("<table>");

for(i = 1;i <= nombre; i++)
{
    document.write("<tr>");
    
    for(j = 1;j <= nombre; j++)
    {
        
        
        if(i == j)
        {
         
           document.write("<td style = color:blue;>" +j * i);
        }
        else 
        {
           document.write("<td>"+j * i +" ");
        }
        
        document.write("</td>");
        
    }
    
    document.write("</tr>");
    
    j = 1;

}

document.write("</table>")