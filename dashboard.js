document.getElementById("confirm-button").addEventListener("click", function(event){
    event.preventDefault()
});


let inputs = document.forms["bank-form"].getElementsByTagName("input");

function validation(){
    let permission=0
    
    for(let i=0;i<inputs.length;i++)
    {
        if(inputs[i].value.length==0)
        {
            inputs[i].style.borderColor="red";
            ++permission;
        }else
        {
            inputs[i].style.borderColor="green"
        }
    }
    if(inputs[1].value.length<16)
    {
        inputs[1].style.borderColor="red"
    }

    return permission;
}

let wallet = 0;
document.getElementById("wallet").innerHTML= wallet+" "+"تومان";

document.getElementById("confirm-button").addEventListener("click", function(){
    let validationPermission = validation();
    console.log(validationPermission);
    if(validationPermission==0){
        var budget = inputs[0].value;
        budget = parseInt(budget);
        wallet=wallet+budget;
        document.getElementById("wallet").innerHTML= wallet+" "+"تومان";
        for(let i=0;i<inputs.length-1;i++)
        {
            inputs[i].value="";
            inputs[i].style.borderColor="rgb(194, 200, 206)"
        }
    }
    
})

document.getElementById("priceToPay").innerHTML=0+" "+"تومان";

function selectTicket(){

    let ticketLocation = document.getElementById("tickets").value;

    if(ticketLocation=="error")
    {
        document.getElementById("priceToPay").innerHTML=0+" "+"تومان";
    }
    else if(ticketLocation=="TtoB8" || ticketLocation=="BtoT15" || ticketLocation=="BtoT17")
    {
        document.getElementById("priceToPay").innerHTML="30,000"+" "+"تومان";
    }
    else if(ticketLocation=="KtoB8" || ticketLocation=="BtoK15" || ticketLocation=="BtoK17")
    {
        document.getElementById("priceToPay").innerHTML="25,000"+" "+"تومان";
    }
    else if(ticketLocation=="GHtoB8" || ticketLocation=="BtoGH15" || ticketLocation=="BtoGH17")
    {
        document.getElementById("priceToPay").innerHTML="20,000"+" "+"تومان";
    }
}


function buyticket(){
    let ticketLocation = document.getElementById("tickets").value;
    let ticketDate = document.getElementById("ticket-date").value;
    let ticketid="";
    let price=0;
    if(ticketLocation=="error")
    {
        alert("مبدا و مقصد را انتخاب کنید");
    }
    else if(ticketLocation=="TtoB8" || ticketLocation=="BtoT15" || ticketLocation=="BtoT17")
    {
        price=30000;
        if(ticketDate=="error")
        {
            alert("تاریخ را وارد کنید")
        }
        else
        {
            if(wallet<=price)
            {
                alert("موجودی کیف پول را اضافه کنید");
            }else{
                wallet=wallet-price;
                ticketid=ticketDate+ticketLocation;
                alert("کد رهگیری  "+ticketid+"  به شما پیامک میشود.")
            }
        }
        document.getElementById("wallet").innerHTML= wallet+" "+"تومان";

    }
    else if(ticketLocation=="KtoB8" || ticketLocation=="BtoK15" || ticketLocation=="BtoK17")
    {
        price=25000;
        if(ticketDate=="error")
        {
            alert("تاریخ را وارد کنید")
        }
        else
        {
            if(wallet<=price)
            {
                alert("موجودی کیف پول را اضافه کنید");
            }else{
                wallet=wallet-price;
                ticketid=ticketDate+ticketLocation;
                alert("کد رهگیری  "+ticketid+"  به شما پیامک میشود.")
            }
        }
        document.getElementById("wallet").innerHTML= wallet+" "+"تومان";
    }
    else if(ticketLocation=="GHtoB8" || ticketLocation=="BtoGH15" || ticketLocation=="BtoGH17")
    {
        price=20000;
        if(ticketDate=="error")
        {
            alert("تاریخ را وارد کنید")
        }
        else
        {
            if(wallet<=price)
            {
                alert("موجودی کیف پول را اضافه کنید");
            }else{
                wallet=wallet-price;
                ticketid=ticketDate+ticketLocation;
                alert("کد رهگیری  "+ticketid+"  به شما پیامک میشود.")
            }
        }
        document.getElementById("wallet").innerHTML= wallet+" "+"تومان";
    }
    
}

