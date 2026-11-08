interface Aluno {
  nome: string;
  matricula: number;
  curso: string;
}

const turma: Aluno[] = [
  { nome: "Ana", matricula: "abc", curso: "Direito" },
  { nome: "Beto", matricula: 102, curso: "Medicina" }
];

function listarAlunos(lista: Aluno[]): void {
  for (let i = 0; i < lista.length; i++) {
    console.log("Aluno: " + lista[i].nome + " - Curso: " + lista[i].curso);
  }
}

listarAlunos(turma);
