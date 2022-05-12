$(".txtb input").on("focus",function(){
    $(this).addClass("focus");
});

$(".txtb input").on("blur",function(){
    if($(this).val() == "")
    $(this).removeClass("focus");
});

const log = document.getElementById('formss');
const reg = document.getElementById('reg-formss');

const logbtn = document.getElementById('log-toggle');
const regbtn = document.getElementById('reg-toggle');

logbtn.addEventListener('click', function handleClick() {
    reg.style.display = 'block';
    log.style.display = 'none';
});

regbtn.addEventListener('click', function handleClick() {
    log.style.display = 'block';
    reg.style.display = 'none';
});


// function validation(){

//     const user = document.getElementById('username').value;
//     const pass = document.getElementById('password').value;
//     const name = document.getElementById('name').value;
//     const mob = document.getElementById('mobileNo').value;
    
//     const uscheck = /^[A-Za-z.- ]{3,12}$/;
//     const passcheck = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     const nmcheck = /^[A-Za-z]{3,12}$/;
//     const mobcheck = /^[0-9]{10}$/;
    
//     if(uscheck.test(user)) {
//         document.getElementById('usererror').innerHTML = "";
//     }
//     else {
//         document.getElementById('usererror').innerHTML = "Username is nvalid.";
//         return false;
//     }
    
//     if(passcheck.match(pass)) {
//         document.getElementById('passerror').innerHTML = "";
//     }
//     else {
//         document.getElementById('passerror').innerHTML = "Password is nvalid.";
//         return false;
//     }
    
//     if(nmcheck.test(name)) {
//         document.getElementById('nmerror').innerHTML = "";
//     }
//     else {
//         document.getElementById('nmerror').innerHTML = "Name is nvalid.";
//         return false;
//     }
    
//     if(mobcheck.test(mob)) {
//         document.getElementById('moberror').innerHTML = "";
//     }
//     else {
//         document.getElementById('moberror').innerHTML = "Mobile no. is nvalid.";
//         return false;
//     }
// }


