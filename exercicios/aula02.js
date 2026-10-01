// ex1
// Os pares que reprovam na régua de 4,5:1 são:
// - #9e3535 no #FFFFFF (aprox. 3,5:1 - reprova)
// - #CCCCCC no #faf9f9 (aprox. 1,6:1 - reprova)
// (Os pares #FFFFFF no #1F4E79 [aprox. 9,4:1] e #FFFFFF no #862e2e [aprox. 6,5:1] são aprovados)[cite: 2, 5].

// ex2
// (a) alt="Fila de estudantes dobrando o corredor do intervalo na cantina"
// (b) alt="Logotipo da escola"
// (c) alt="" (vazio, pois é uma imagem meramente decorativa)[cite: 2].

// ex3
// O código altera apenas a cor do botão, o que prejudica pessoas com daltonismo e não informa o estado a leitores de tela[cite: 1, 2].
// Correção:
botao.addEventListener("click", function() {
  botao.style.backgroundColor = "green";
  botao.textContent = "Apoiado";
});

// ex4
// 1. Adicionei a tag <p> com a descrição explicativa dentro do <header> abaixo do <h1>[cite: 4].
// 2. Adicionei a regra CSS .apoiar:focus { outline: 3px solid #e7a5a5; outline-offset: 2px; } para destacar o foco[cite: 4].
// 3. Garanti que o clique no botão altera o seu texto de "Apoiar" para "Apoiado" e atualiza o contador[cite: 1, 4].

// ex5
// Tabela de Auditoria preenchida:
// 1: Sim | 2: Sim | 3: Sim | 4: Sim | 5: Sim | 6: Sim | 7: Sim | 8: Sim[cite: 4]
//
// Melhorias em ordem de prioridade (Impacto x Esforço):
// 1º: Adicionar atributos 'alt' descritivos em todas as imagens (Acessibilidade) - Alto impacto para leitores de tela e baixíssimo esforço[cite: 2, 3].
// 2º: Ajustar as cores de contraste de elementos secundários - Alto impacto de leitura para todos os utilizadores e baixo esforço de CSS[cite: 2, 3].
// 3º: Criar um filtro para organizar cartões por categorias - Médio impacato na navegação e maior esforço de implementação[cite: 3].
// Ordem escolhida: Resolve-se primeiro o que garante acessibilidade com pouco esforço (alt e contraste) e deixa-se melhorias de funcionalidades mais complexas por último[cite: 3].