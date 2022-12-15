function registro(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
  
    this.Media = () => {
      let nota = 0;
      for (let i = 0; i < this.notas.length; i++) {
        nota += this.notas[i];
      }
      return +(nota / this.notas.length).toFixed();
    };
    this.falta = () => {
      this.faltas += 1;
    };
  }
  const aluno1 = new registro("Samuel", 2, [10, 9, 8]);
  const aluno2 = new registro("Pedro", 3, [4, 7, 9]);
  const aluno3 = new registro("José", 5, [10, 10, 9]);
  const historico = [];
  
  historico.push(aluno1, aluno2, aluno3);
  console.log(aluno1.Media());
  
  const curso = {
    nome: "JavaScript",
    notaAprovacao: 5,
    faltasMaximas: 3,
    lista: historico,
    
    adicionarAluno(nome, faltas, notas) {
      let novoEstudante = new registro(nome, faltas, notas);
      this.lista.push(novoEstudante);
    },

    situacao(aluno) {
      let media = (
        aluno.notas.reduce((acc, nota) => {
          return acc + nota;
        }) / aluno.notas.length
      ).toFixed();
  
      if (media >= this.notaAprovacao && aluno.faltas < this.faltasMaximas) {
        return true;
      } else if (
        media >= this.notaAprovacao &&
        aluno.faltas == this.faltasMaximas
      ) {
        let porcentagemAprovado = this.notaAprovacao * 1.1;
        if (media >= porcentagemAprovado) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },

  situacaoFinal(){
      let arrayFinal = []
      this.lista.forEach((estudante, index)=>{
          arrayFinal[index] = this.situacao(estudante);
          return arrayFinal;
      });
  
      return arrayFinal;

  }
  
  };
  
  console.log(curso.situacaoFinal(curso.lista));