let txtname = document.getElementById("name");
let txtmail = document.getElementById("email");
let txtphone = document.getElementById("phone");

let txtguest = document.getElementById("noOfGuests");
let txtdays = document.getElementById("noOfDays");

let rdroom = document.getElementsByTagName("AType");
let rdmeal = document.getElementsByTagName("cType");
let rdur = document.getElementsByTagName("actdur");

let txtres = document.getElementById("res");
let txtrescost = document.getElementById("rescost");
let btnres = document.getElementById("addtoreserve");

let btnreserve = document.getElementById("reserve");
let btnclearres = document.getElementById("clearres");

let txtfinal = document.getElementById("final")
let btnaddtofav = document.getElementById("addtofav");
let btncheckfav = document.getElementById("checkfav");

btnres.addEventListener("click",addtores);
btnclearres.addEventListener("click",clearcurrentres);
btnreserve.addEventListener("click",confirmation);
btnaddtofav.addEventListener("click",addtofav);



let t=0;
var rn=0;
function addtores(){
    let guests=parseInt(txtguest.value);
    let days=parseInt(txtdays.value);

    if(document.getElementById('aForeign').checked){
        var x = "Foreign Adult Pass";
        var roomcost = 5000;
    }else if(document.getElementById('aLocal').checked){
        var x = "Local Adult Pass";
        var roomcost = 1000;
    }

    if(document.getElementById('ro').checked){
        var y = "Local Child Pass";
        var mealcost = 500;
    }else if(document.getElementById('bb').checked){
        var y = "Foreign Child Pass";
        var mealcost = 2500;
    }

    if(document.getElementById('3h').checked && document.getElementById('aForeign').checked && document.getElementById('bb').checked){
        var z = "with 3 hrs of Duration";
        var dur_cost = 0;
    }else if(document.getElementById('thf').checked && document.getElementById('aForeign').checked && document.getElementById('bb').checked){
        var z = "with ½ day of Duration";
        var dur_cost = 500;
    }else if(document.getElementById('tfd').checked &&  document.getElementById('aForeign').checked && document.getElementById('bb').checked){
        var z = "with 1 day of Duration";
        var dur_cost = 1000;
    }else if(document.getElementById('ttd').checked && document.getElementById('aForeign').checked && document.getElementById('bb').checked){
        var z = "with 2 day of Duration";
        var dur_cost = 2000;
    }
    if(document.getElementById('3h').checked && document.getElementById('aLocal').checked && document.getElementById('ro').checked){
        var z = "with 3 hrs of Duration";
        var dur_cost = 0;
    }else if(document.getElementById('thf').checked && document.getElementById('aLocal').checked && document.getElementById('ro').checked){
        var z = "with ½ day of Duration";
        var dur_cost = 250;
    }else if(document.getElementById('tfd').checked &&  document.getElementById('aLocal').checked && document.getElementById('ro').checked){
        var z = "with 1 day of Duration";
        var dur_cost = 500;
    }else if(document.getElementById('ttd').checked && document.getElementById('aLocal').checked && document.getElementById('ro').checked){
        var z = "with 2 day of Duration";
        var dur_cost = 1000;
    }

    if(document.getElementById('3h').checked && document.getElementById('aLocal').checked && document.getElementById('bb').checked){
        var z = "with 3 hrs of Duration";
        var dur_cost = 0;
    }else if(document.getElementById('thf').checked && document.getElementById('aLocal').checked && document.getElementById('bb').checked){
        var z = "with ½ day of Duration";
        var dur_cost = 750;
    }else if(document.getElementById('tfd').checked &&  document.getElementById('aLocal').checked && document.getElementById('bb').checked){
        var z = "with 1 day of Duration";
        var dur_cost = 1500;
    }else if(document.getElementById('ttd').checked && document.getElementById('aLocal').checked && document.getElementById('bb').checked){
        var z = "with 2 day of Duration";
        var dur_cost = 3000;
    }

    if(document.getElementById('3h').checked && document.getElementById('aForeign').checked && document.getElementById('ro').checked){
        var z = "with 3 hrs of Duration";
        var dur_cost = 0;
    }else if(document.getElementById('thf').checked && document.getElementById('aForeign').checked && document.getElementById('ro').checked){
        var z = "with ½ day of Duration";
        var dur_cost = 750;
    }else if(document.getElementById('tfd').checked &&  document.getElementById('aForeign').checked && document.getElementById('ro').checked){
        var z = "with 1 day of Duration";
        var dur_cost = 1500;
    }else if(document.getElementById('ttd').checked && document.getElementById('aForeign').checked && document.getElementById('ro').checked){
        var z = "with 2 day of Duration";
        var dur_cost = 3000;
    }


    var total=(roomcost+mealcost+dur_cost)*days;
    
    t=t+total;
    rn+=1;
    txtres.innerHTML+=x+"/"+y+"\n"+ z +" adult ticket Charges                       LKR " + roomcost +" * "+ days + "\n" + "Child ticket Charges       LKR" + mealcost + "*" + days + "\n" + "Total Charge for chart"+rn+"               LKR "+total+"\n"+"\n";
    txtrescost.innerHTML="Total Charge           LKR "+t;
    clearform();
}

function clearcurrentres(){
    txtres.innerHTML=null;
    txtrescost.innerHTML=null;
}
function confirmation(){
    let n=txtname.value;
    alert("Thank you ! \n"+"Your Reservation is Confirmed");
    txtfinal.innerText=txtres.value;
    clearcurrentres();
}
function clearform(){
    txtguest.value=null;
    txtdays.value=null;
}
function addtofav(){
    var userPreference;
    if (confirm("ADD TO FAVORITE?") == true) {
        userPreference = "Data added to favorite successfully!";
        window.localStorage.setItem("Added to favorite",txtres);
        
    } else {
        userPreference = "Data did not add to favorite!";
    }
    txtfinal.value=null;
    alert(userPreference)
} 