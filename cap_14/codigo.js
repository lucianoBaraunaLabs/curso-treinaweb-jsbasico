// var txtNome = document.getElementById('txtNome');
// var txtPassword = document.getElementById('txtPassword');
// 
// txtNome.style['background-color'] = '#c3c3c3';
// txtPassword.style['background-color'] = '#c3c3c3';
// 
// console.log(txtNome.value);
// console.log(txtPassword.value);

// var inputs = document.getElementsByTagName('input');
// console.log(inputs);

// var inputs = document.getElementsByClassName('login-input');
// 
// console.log(inputs);

// var div = document.getElementById('text');
// var html = '<h1>Treinaweb</h1>';

// div.innerHTML = html;

// var p = document.createElement('p');
// var pTexto = document.createTextNode('Aprendendo a criar elementos');
// 
// p.appendChild(pTexto);
// div.appendChild(p);

// Só funciona para onsubmit
// function logar(){
//     var txtNome = document.getElementById('txtNome');
//     var txtPassword = document.getElementById('txtPassword');
//     
//     alert(txtNome.value+ " " +txtPassword.value );
//     return false;
// }

var form = document.forms[0];
console.log(form);

form.addEventListener('submit',function(event){
    event.preventDefault();
    
    var txtNome = document.getElementById('txtNome');
    var txtPassword = document.getElementById('txtPassword');
    
    alert(txtNome.value+ " " +txtPassword.value );
});
