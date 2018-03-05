/**
 * Created by ithir on 05-03-2018.
 */
function validationFunction() {
    var nameattr = document.getElementById("name").value;
    var mobilenum = document.getElementById("mobile").value;


    var checkmale=document.getElementById("radio1");
    var checkfemale=document.getElementById("radio2");



    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var email =document.getElementById("Email")
    var emailValue = email.value;
    var testEmail = filter.test(emailValue);

    if (!nameattr) {
        document.getElementById("namefield").innerHTML = "please filling the requirename field";
        return
    }
    else {
        document.getElementById("namefield").innerHTML =nameattr;
    }

    if (!filter.test(email.value)) {

        document.getElementById("Error").innerHTML = "Please provide a valid email address";
        
        return
    }

        else{
        document.getElementById("Error").innerHTML = email.value;
    }

    if((frm.phone.value).length<10) {

        document.getElementById("digit").innerHTML = "should 10 digit must";

        return
    }

    else {
        document.getElementById("digit").innerHTML =mobilenum;
    }




    var selectoptionfield = document.getElementById("dataview");
    var strUser = selectoptionfield.options[selectoptionfield.selectedIndex].value;

    if(!strUser){

        return document.getElementById("selecteditem").innerHTML = "filling the require field";
    }
    else {
        document.getElementById("selecteditem").innerHTML = selectoptionfield.value;

        console.log(strUser)
    }

}