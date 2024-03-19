getData();
/**slider */
let sliderImgs=document.getElementsByClassName("slideImg");
var i=0;
console.log(sliderImgs);

var autoSliding=setInterval(function(){

    sliderImgs[i].style.display='none';
    if(i==sliderImgs.length-1)
        i=-1;
    sliderImgs[++i].style.display='block';
},2000)


function next()
{
    clearInterval(autoSliding);
    sliderImgs[i].style.display='none';
        if(i==sliderImgs.length-1)
            i=-1;
        sliderImgs[++i].style.display='block';
        autoSliding=setInterval(function(){

            sliderImgs[i].style.display='none';
            if(i==sliderImgs.length-1)
                i=-1;
            sliderImgs[++i].style.display='block';
        },2000)
}
function back()
{
    clearInterval(autoSliding);
    sliderImgs[i].style.display='none';
        if(i==0)
            i=sliderImgs.length-1;
        sliderImgs[--i].style.display='block';
        autoSliding=setInterval(function(){

            sliderImgs[i].style.display='none';
            if(i==sliderImgs.length-1)
                i=-1;
            sliderImgs[++i].style.display='block';
        },2000)
}
/////////////////////////end slider//////////////////////////////

/*****start products ****/
let Data;
let cartproducts;
if(localStorage.cartelements)
{
    cartproducts=localStorage.cartelements.replace(',','').split(',');
}
else{
    cartproducts=localStorage.cartelements=[];
}

async function getData()
{
    let response=await fetch("http://localhost:3000/products");
    let data=await response.json();
    await buildcards(data);
}

let categories=document.getElementsByClassName("categories")[0];
async function buildcards(data)
{
    Date=data;
    var products=document.getElementsByClassName("products")[0];
    var Card=document.getElementsByClassName("cardcol")[0].cloneNode(true);
    Card.classList.remove("visually-hidden");
    document.getElementsByClassName("cardcol")[0].remove();
    
    data.forEach((element) => {
        
        let cardcol=Card.cloneNode(true);
        cardcol.classList.add(`${element.category}`,"mb-5","ms-3","ms-sm-0","col-9","col-sm-5", "col-md-3","flex-row","justify-content-center","justify-self-center");
        console.log(cardcol);
         
        let card=cardcol.childNodes[1];


        let image=card.childNodes[1];

        let img_div=image.childNodes[1];
        let card_img=img_div.childNodes[1];
        card_img.setAttribute("src",element.image);
        card_img.addEventListener("click",()=>{
            console.log(element);
            window.open("product_details.html","_self");
            let keys=Object.keys(element);
            let values=Object.values(element);
            for(var i=0;i<keys.length;i++)
            {
                document.cookie=`${keys[i]}=${values[i]}`;
            }
            
        })

        let cartadd=image.getElementsByClassName("cartadd")[0];
        cartadd.setAttribute("id",`${element.id}`);
        cartadd.addEventListener("click",cartincrease);
        if(localStorage.cartelements.includes(element.id))
        {
            cartadd.style.display="none";
            localStorage.setItem(element.id,1);
        }
        else
        {
            cartadd.style.display="flex";
        }

        let incart=image.getElementsByClassName("incart")[0];
        incart.setAttribute("id",`${element.id}`);
        if(localStorage.cartelements.includes(element.id))
        {
            incart.style.display="flex";
        }
        else
        {
            incart.style.display="none";
        }


        let card_body=card.getElementsByClassName("card-body")[0];

        let productName=card_body.getElementsByClassName("productName")[0];
        productName.innerText=element.name;
        let productPrice=card_body.getElementsByClassName("productPrice")[0];
        productPrice.innerText=element.price+"$";

        products.append(cardcol);
    
        
    });   
}

var products=document.getElementsByClassName("cardcol");

console.log(products);
function clothes()
{
    console.log(products[0].classList[1]);
    for(var i=0;i<products.length;i++)
    {
        
        if(products[i].classList[1]!="clothes")
        {
            products[i].style.display="none";
        }
        else
        {
            products[i].style.display="flex";
        }
    }
    
    
}
function jewelry()
{
    for(var i=0;i<products.length;i++)
    {
        
        if(products[i].classList[1]!="jewelry")
        {
            products[i].style.display="none";
        }
        else
        {
            products[i].style.display="flex";
        }
    }
    
}
function phones()
{
    for(var i=0;i<products.length;i++)
    {
        
        if(products[i].classList[1]!="phones")
        {
            products[i].style.display="none";
        }
        else
        {
            products[i].style.display="flex";
        }
    }
}
function makeup()
{
    for(var i=0;i<products.length;i++)
    {
        
        if(products[i].classList[1]!="makeup")
        {
            products[i].style.display="none";
        }
        else
        {
            products[i].style.display="flex";
        }
    }
}
function All()
{
    for(var i=0;i<products.length;i++)
    {
        products[i].style.display="flex";
        
    }
}

function productDetails(e)
{
    console.log(e);
}
