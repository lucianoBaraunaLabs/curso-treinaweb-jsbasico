console.log('TreinaWeb');
document.getElementById('TreinaWeb').style.fontSize = '100px';

var comprarCurso = function(curso){
  var meusCursos = {
    add : function () {
      return typeof curso
    }
  }
  meusCursos.add(curso);
  alert(meusCursos.add() +' foi add sua conta TreinaWeb com sucesso \\o/');
};

comprarCurso('CASA');
