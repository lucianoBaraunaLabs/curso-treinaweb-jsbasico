var form = document.getElementById('formJogo');

var bancoSenhas = ['123'];
var senhaSortida = bancoSenhas.join();

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    var $campoFormJogo = document.getElementById('txtFormJogo').value;
    
    console.log($campoFormJogo.length);
    
    var testeSenha = new Senha(bancoSenhas, $campoFormJogo);
    
    var senhaBanco = testeSenha.valores(testeSenha.senhaBanco);
    var senhaDigitada = testeSenha.valores(testeSenha.senhaUsuario);
    
    testeSenha.conferindo(senhaBanco, senhaDigitada);
    
});

var Senha = function(senhaBanco, senhaUsuario){
    this.senhaBanco = senhaBanco;
    this.senhaUsuario = senhaUsuario;
    this.valores = function(senha){
        var arraySenha = [];
        for(var i = 0; i < senha.length; i++){
            console.log(senha.charAt(i));
            arraySenha.push(senha.charAt(i));
        }
        return arraySenha;
    }
    this.conferindo = function(senhaBanco, senhaDigitada){
        var valor1 = senhaBanco;
        var valor2 = senhaDigitada;
        
        var checar = setInterval(conferirItens, 100);
    }
    
    var posicao = 0;
    var conferirItens = function(banco, usuario){
        
        var resposta = banco.shift();
        var tentativa = usuario.shift();
        
        console.log('Checando senha: ' + resposta);
        console.log('Checando senha: ' + tentativa);
        
    }
}


