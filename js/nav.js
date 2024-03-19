let body=document.getElementsByTagName("body")[0];
let sidebar=document.getElementsByClassName("sidebar")[0];
let menu=document.getElementsByClassName("nav-item");
let navIcons=document.getElementsByClassName("Nav-icons");
let siteName=document.getElementsByClassName("siteName");
let cartNum=document.getElementsByClassName("cartNum")[0];
let username=document.getElementsByClassName("username")[0];
let signUp=document.getElementsByClassName("signup")[0];
let signIn=document.getElementsByClassName("signin")[0];
///////////////////////////////////////////////////////

var email=document.getElementsByClassName("email")[0];
var invalid=document.getElementsByClassName("invalid")[0];
var pass= document.getElementsByClassName("password")[0];

var namee=document.getElementsByClassName("name")[0];
var invalidName=document.getElementsByClassName("invalidName")[0];
var email2=document.getElementsByClassName("email")[1];
var invalid2=document.getElementsByClassName("invalid")[1];
var exist=document.getElementsByClassName("exist")[0];
var pass2= document.getElementsByClassName("password")[1];
var regex=/^[a-zA-Z]+[a-zA-Z0-9]*@[a-zA-Z]+\.com$/;
/////////////////////////////////////////////////////////
username.innerHTML=localStorage.name;

function showSidebar()
{
    sidebar.classList.add("showSidebar");
    sidebar.classList.remove("hideSidebar")
}
function hideSidebar()
{
    sidebar.classList.add("hideSidebar");
    sidebar.classList.remove("showSidebar");
}

if(localStorage.signed !="true")
{
    showSignin();
}

if(localStorage.cartNum)
{
    cartNum.innerHTML=localStorage.cartNum;
}
else
{
    localStorage.cartNum=0;
}

function cartincrease(){
    console.log(this);
    let incart=document.getElementsByClassName("incart")[this.getAttribute("id")-1];
    this.style.display="none";
    incart.style.display="flex";
    if(localStorage.cartNum)
    {
        localStorage.cartNum=Number(localStorage.cartNum)+1
    }
    else
    {
        localStorage.cartNum=1;
    }
    cartNum.innerHTML=localStorage.cartNum;

    localStorage.cartelements+=','+this.getAttribute("id");
    localStorage.setItem(this.getAttribute("id"),1)
    
}


/////nav bar/////////

window.addEventListener("scroll",()=>{
    let nav=document.getElementsByClassName("nav")[0];
    let scrollup=document.getElementsByClassName("scrollUp")[0];
    
    if(this.scrollY==0)
    {
        console.log(menu);
        nav.setAttribute("style","background-color: rgb(255, 255, 255,0)");
        scrollup.style.visibility="hidden";
        for(var i=0 ;i<menu.length;i++)
        {
            menu[i].style.color="#212529";
            menu[i].addEventListener("mouseover", function(){
                this.style.color="#b5b5c2";
            })
            menu[i].addEventListener("mouseout", function(){
                this.style.color="#212529";
            })
        }
        
        

    }
    else if(this.scrollY>0)
    {
        nav.setAttribute("style","background-color: rgb(255, 255, 255,0.8)");
        sidebar.setAttribute("style","color: #000000");
        scrollup.style.visibility="visible";
        for(var i=0 ;i<menu.length;i++)
        {
            menu[i].style.color="#212529";
            menu[i].addEventListener("mouseover", function(){
                this.style.color="#444675";
            })
            menu[i].addEventListener("mouseout", function(){
                this.style.color="#212529";
            })
        }
        
        
        
    }
})
/////////////////////////////end navbar//////////////////////////////////////

function signin()
{
    console.log("aAAA");
    
    if((!(regex.test(email.value)&& localStorage.getItem(email.value))))
    {
        invalid.style.display="flex";
    }
    else if(email.value==''||pass.value=='')
    {
        invalid.style.display="flex";
    }
    else
    {
        
        if(localStorage.getItem(email.value)==pass.value)
        {
            signIn.style.display="none";
            invalid.style.display="none";
            username.innerHTML=localStorage.getItem(email.value+'name');
            localStorage.name=localStorage.getItem(email.value+'name');
            localStorage.signed=true;
            email.value="";
            pass.value='';
            invalid.style.display="none";


        }else
        {
            invalid.style.display="flex";
            signIn.style.display="flex";
        }
    }
}

function signup()
{
    if(namee.value=='')
    {
        invalidName.style.display="flex";
    }
    else
    {
        invalidName.style.display="none";
    }
    if((!(regex.test(email2.value))))
    {
        invalid2.style.display="flex";
        console.log("invalid");
    }else if(localStorage.getItem(email2.value))
    {
        exist.style.display="flex";
        invalid2.style.display="none";
    }
    else if(email2.value==''||pass2.value=='')
    {
        invalid2.style.display="flex";
        console.log("invalid2");
        console.log(email2.value);
        console.log(namee.value);
        console.log(pass2.value);

    }
    else
    {
        
        localStorage.setItem(email2.value,pass2.value);
        localStorage.setItem(email2.value+'name',namee.value);
        localStorage.setItem("Name",namee);
        username.innerHTML=localStorage.getItem(email2.value+'name');
        signIn.style.display="none";
        signUp.style.display="none";
        email2.value="";
        namee.value='';
        pass2.value='';
        invalidName.style.display="none";
        exist.style.display="none";
        invalid2.style.display="none";
        localStorage.signed=true;

    }
}
function showSignin()
{
    email.value="";
    pass.value='';
    signIn.style.display="flex";
    signUp.style.display="none";
    invalid.style.display="none";
    localStorage.signed="false";
    localStorage.Name="";
    username.innerHTML="";

}
function showSignup()
{
    email2.value="";
    namee.value='';
    pass2.value='';
    signUp.style.display="flex";
    signIn.style.display="none";
    invalid2.style.display="none";
    exist.style.display="none";
    localStorage.signed="false";
    localStorage.Name="";
    username.innerHTML="";
}
function closeSign()
{
    signIn.style.display="none";
    signUp.style.display="none";
}
function scrollUp()
{
    window.scrollTo(0,0);
}
//contact

function submit()
{
    var email=document.getElementById("email");
    var name=document.getElementById("name");

    var contactEmail=document.getElementsByClassName("contactEmail")[0];
    var contactName=document.getElementsByClassName("contactName")[0];
    if(email.value=="")
    {
        contactEmail.style.display="flex";
    }
    else
    {
        contactEmail.style.display="none";
    }
    if(name.value=="")
    {
        contactName.style.display="flex";
    }
    else{
        contactName.style.display="none";
    }
    if(email.value!=""&& name.value!="")
    {
        name.value="";
        email.value="";
        document.getElementById("message").value="";
    }
    
}