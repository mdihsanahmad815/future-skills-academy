import { auth } from "./firebase-config.js";

import {

createUserWithEmailAndPassword,

signInWithEmailAndPassword,

signOut,

onAuthStateChanged

} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

/*=========================
Register
=========================*/

const registerForm=document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit",(e)=>{

e.preventDefault();

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

createUserWithEmailAndPassword(auth,email,password)

.then(()=>{

alert("Registration Successful");

window.location="login.html";

})

.catch(error=>{

alert(error.message);

});

});

}

/*=========================
Login
=========================*/

const loginForm=document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",(e)=>{

e.preventDefault();

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

signInWithEmailAndPassword(auth,email,password)

.then(()=>{

alert("Login Successful");

window.location="dashboard.html";

})

.catch(error=>{

alert(error.message);

});

});

}

/*=========================
Logout
=========================*/

const logout=document.getElementById("logoutBtn");

if(logout){

logout.onclick=()=>{

signOut(auth).then(()=>{

window.location="login.html";

});

}

}

/*=========================
User Check
=========================*/

onAuthStateChanged(auth,user=>{

if(user){

console.log("Logged In :",user.email);

}else{

console.log("No User");

}

});