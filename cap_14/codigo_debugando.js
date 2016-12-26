var form = document.forms[0];

var saida = function(nome, email){
    alert(nome+' '+email)
}

form.addEventListener('submit',function novoUsuario(event){
    event.preventDefault();
    
    var nome = document.getElementById('txtNome').value;
    var email = document.getElementById('txtEmail').value;
    
    saida(nome, email);
    
});

