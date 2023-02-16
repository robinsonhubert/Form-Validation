function myfunc(){
    var user=document.getElementById("user").value;
    var email=document.getElementById("email").value;
    var Pnumber=document.getElementById("Pnumber").value;
    var ZipCode=document.getElementById("ZipCode").value;
    //Our Regular Expressions Here
    var userReg=/^[A-Za-z.]{2,23}$/;
    var mailReg= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    //end
    //user validation
    if(userReg.test(user)){
        document.getElementById("UserError").innerHTML="";
    }else{
        document.getElementById("UserError").innerHTML="Name must be between 2 to 23 charecters";
    }
    //end
    //mail validation
    if(mailReg.test(email)){
        document.getElementById("EmailError").innerHTML="";
    }else{
        document.getElementById("EmailError").innerHTML="Email is Invalid";
    }
    //end
    
    //ZipCode Validation
    if(postalRGEX.test(ZipCode)){
        document.getElementById("ZipCodeError").innerHTML="";
    }else{
        document.getElementById("ZipCodeError").innerHTML="Zip-Code is Invalid";
    }
    //end
//Phone Number Validation
if(phoneRGEX.test(Pnumber)){
    document.getElementById("PnumberError").innerHTML="";
}else{
    document.getElementById("PnumberError").innerHTML="Phone Number is Invalid";
    return false;
}
//end
}