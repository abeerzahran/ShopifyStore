let product=document.cookie;

product=product.split('; ');
for(var i=0;i<product.length;i++)
{
    product[i]=product[i].split('=');
}
console.log(product);

let prodImg=document.getElementsByClassName("prodImg")[0];
let prodname=document.getElementsByClassName("name")[0];
let proddesc=document.getElementsByClassName("description")[0];
let prodprice=document.getElementsByClassName("price")[0];
let prodbrand=document.getElementsByClassName("brand")[0].children[0];
let prodcolor=document.getElementsByClassName("color")[0];
let prodsize=document.getElementsByClassName("size")[0];
let prodstor=document.getElementsByClassName("storage")[0];
let prodmatir=document.getElementsByClassName("material")[0];
let cartadd=document.getElementsByClassName("addToCard")[0];
let prodid;

console.log(product);
for(var i=0 ;i<product.length;i++)
{
    
    switch (product[i][0])
    {
        case 'id':
            prodid=product[i][1];
            break;
        case 'image':
            prodImg.setAttribute('src',product[i][1])
            break;
        case 'name':
            prodname.innerHTML=product[i][1];
            break;
        case 'price':
            prodprice.innerHTML=product[i][1]+'$';
            break;
        case 'description':
            proddesc.innerHTML=product[i][1];
            break;
        case 'brand':
            prodbrand.innerHTML=product[i][1];
            break;
        case 'color':
            if(product[i][1]=="null")
                prodcolor.style.display="none";
            else
                prodcolor.children[0].style.color=product[i][1];
            break;
        case 'size':
            if(product[i][1]=="null")
                prodsize.style.display="none";
            else
                prodsize.children[0].innerHTML=product[i][1];
            break;
        case 'storage':
            if(product[i][1]=="null")
                prodstor.style.display="none";
            else
                prodstor.children[0].innerHTML=product[i][1];
            break;
        case 'material':
            if(product[i][1]=="null")
                prodmatir.style.display="none";
            else
                prodmatir.children[0].innerHTML=product[i][1];
            break;

    }

}


console.log(prodid);
if(localStorage.cartelements.includes(prodid))
{
    cartadd.disabled=true;
    cartadd.style.backgroundColor="red";
    cartadd.innerHTML="Added To Cart";
}

cartadd.addEventListener("click",()=>{
    
    document.getElementsByClassName("cartNum")[0].innerHTML=++localStorage.cartNum;
    localStorage.cartelements+=','+prodid;
    localStorage.setItem(prodid,1);
    cartadd.disabled=true;
    cartadd.style.backgroundColor="red";
    cartadd.innerHTML="Added To Cart";

})