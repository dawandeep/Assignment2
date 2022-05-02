$(document).ready(()=>
$( "#myform" ).validate({
        rules:{
    
            name:{
                required:true,
                letterson:true
            },
            email:{
                required:true,
                mail:true,
                
            },
            message:{
                required:true,
                minlength:40,
                mes:true
            }
         },
         messages:{
             name:{
                 required:"Please Enter the Name"
                },
            email:{
                required:"Please Enter the Email"
            },
            message:{
                required:"Please Enter the Message"
            }

         },
        
            submitHandler:function(form){
                
                alert("You are being redirected");
                window.location.href="https://lng-consultancy.com";
            }
    }));
    
$.validator.addMethod( "letterson", (value) => {
    value=value.trim();
	return  /^[a-zA-Z]([a-z A-Z]){0,30}$/i.test( value );
}, "Please Enter the Alphabets Only");

$.validator.addMethod("mail", (value) =>{
    value= value.trim();
    return /^([_\-\.0-9a-zA-Z])+@([_\-\.0-9a-zA-Z])+\.([a-zA-Z]){2,7}$/.test(value);
},"Please Enter the Valid Email")




$.validator.addMethod("mes",(value)=>{
    value=value.trim();
    return /[a-z A-z0-9]{40}$/i.test(value);
},"Please Enter at least 40 character");




