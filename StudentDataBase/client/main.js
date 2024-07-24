

function save1()
{ 
    var box=document.getElementById("table1") 
    var details=document.querySelectorAll(".inputtext")
    var r=document.createElement("tr")

    details.forEach(element=>{
        var data =element.value
        var c=document.createElement("td")
        if(element.value=="Male")
        {
            if(element.checked==true)
            {
                data="Male"                        
            }                           
            else if(element.checked==false)
            {
                data="Female"
            }
        } 
        c.innerHTML=data
        r.appendChild(c)
        box.appendChild(r)        
    })
    var c1=document.createElement("td")
    c1.innerHTML="<button onclick='delete1(event)' style='background-color: brown;'>delete</button>"
    r.appendChild(c1)
}

function delete1(event)
{
    event.target.closest('tr').remove()
}