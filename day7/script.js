

function kmtomiles()
{
   let km=document.getElementById("kmvalue").value
   let miles=km*0.645334
     console.log(miles)
    let result=document.getElementById("rsvalue");
    result.innerHTML=miles
}
function kgtopounds()
{
   let kg=document.getElementById("kgvalue").value;
   let pounds=kg*2.2098
    console.log(pounds)
    let Result=document.getElementById("Rsvalue");
    Result.innerHTML=pounds
}