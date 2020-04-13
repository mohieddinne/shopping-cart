let carttotal =0;
let items=0
let y=document.getElementById('itemsquantity')
let x=document.getElementById("total");
let priceprod1= document.getElementsByClassName("addtocart");
for ( let i=0; i<priceprod1.length;i++){
  priceprod1[i].addEventListener('click',()=>{
    carttotal += parseInt(priceprod1[i].dataset.price);
    x.innerHTML= carttotal;
    items+=1;
    y.innerHTML=items;
    
  })
}


let list= document.getElementsByClassName('productname'); 
let buttonlist=document.getElementsByClassName('addtocart'); 
let buttonremove=document.getElementById('emptycart')
for(let i=0;i<buttonlist.length;i++)
{
    buttonlist[i].addEventListener("click",function(){
        let p=list[i].cloneNode(true);
        document.getElementById('carttable').appendChild(p);
        buttonremove.addEventListener("click",function(){
          y.innerHTML=0;
        x.innerHTML=0;
        document.getElementById('carttable').innerHTML="";
        })

    });
    
}


