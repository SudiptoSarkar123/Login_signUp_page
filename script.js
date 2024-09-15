let a = document.getElementById('loginBtn');
let b = document.getElementById('registerBtn');
let x = document.getElementById('login');
let y = document.getElementById('register');

function login(){
    x.style.left = "4px";
    console.log('change 1 done');
    y.style.right = "-520px";   
    console.log('change 2 done');
}

function register(){
    x.style.left = '-510px';
    console.log('register 1 done')
    y.style.right = '5px';
    console.log('register 2 done')
}