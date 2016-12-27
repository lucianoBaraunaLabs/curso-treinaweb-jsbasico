var senhas, 
    gerarSenha,
    impimirNoTerminal,
    senha,
    form,
    tentativas = 1,
    verificarCaracteresSenha;

senhas = [
    '123',
    'treinaweb',
    'joao',
    'javascript',
    'curso'
];

gerarSenha = function(){
    var numeroRandomico = Math.floor(Math.random()*senhas.length);
    console.log(senhas[numeroRandomico])
    return senhas[numeroRandomico];
};

impimirNoTerminal = function(mensagem, tempo){
    var mensgemTerminal = 'root/>_: ',
        terminal = document.getElementById('terminal'),
        paragrafo = document.createElement('P'), // PODE SER ISSO ?
        texto = document.createTextNode(mensgemTerminal.concat(mensagem));
        
        paragrafo.appendChild(texto);
        setTimeout(function(){
            terminal.appendChild(paragrafo);
        },tempo)
};

senha = gerarSenha();
impimirNoTerminal('Entre com a senha de '+senha.length+' digitos',0);

verificarCaracteresSenha = function(senhaDigitada){
	var contador = 0;
	for(var i=0; i<senha.length;i++){
        console.log(senha.charAt(i));
        console.log(senhaDigitada.charAt(i));
		if(senha.charAt(i) === senhaDigitada.charAt(i)){
			contador++;
		}
	}
	return contador;
}

form = document.forms[0];

form.addEventListener('submit', function(event){
	event.preventDefault();
	var senhaDigitada = document.forms[0].elements[0].value;
	if(tentativas <= 20){
		if(senhaDigitada){
			document.forms[0].elements[0].value = '';
			tentativas++;
			var quantidadeDeAcertos = verificarCaracteresSenha(senhaDigitada);
			if(quantidadeDeAcertos === senha.length){
				impimirNoTerminal('Senha correta, carregando configuracoes do servidor...',0);
				impimirNoTerminal('Parabens voce acaba de concluir o curso de JavaScript',3000);
			}else{
				impimirNoTerminal(senhaDigitada.concat(' : Senha errada,',quantidadeDeAcertos),0);
			}
		}
	}else{
		impimirNoTerminal('Reinicie o server, suas tentativas acabaram.',0);
	}
});


