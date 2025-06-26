// Estrutura de dados inicial do painel
const defaultData = {
  historia: {
    resumo: "Damian, um semideus renegado filho de Zeus e uma mortal, desafia o Olimpo em busca de redenção ou ruína. Suas escolhas moldam o destino dos deuses e do mundo mortal. Após ser traído pelos próprios deuses, Damian embarca em uma jornada épica para confrontar seu pai e decidir o futuro do Olimpo.",
    capitulos: [
      {
        titulo: "O Despertar",
        descricao: "Damian acorda em uma caverna isolada, sem memória de como chegou lá. Descobre que possui poderes divinos e uma marca de Zeus em seu braço."
      },
      {
        titulo: "A Traição",
        descricao: "Damian é traído pelos deuses do Olimpo, que temem seu poder crescente. Zeus ordena sua captura e execução."
      },
      {
        titulo: "A Ascensão",
        descricao: "Damian começa a reunir aliados e forças para enfrentar o Olimpo, incluindo outros semideuses renegados e criaturas mitológicas."
      }
    ]
  },
  personagens: [
    {
      nome: "Damian",
      aparencia: "Jovem de 25 anos, cabelos negros, olhos dourados que brilham com poder divino. Veste uma armadura negra com detalhes dourados.",
      poderes: "Controle de raios, superforça, regeneração, voo limitado, invulnerabilidade parcial",
      relacoes: "Filho de Zeus, irmão de Hércules, aliado de Prometeu"
    },
    {
      nome: "Zeus",
      aparencia: "Deus imponente com barba branca, vestindo uma túnica branca e carregando o raio divino. Olhos que cintilam com poder absoluto.",
      poderes: "Controle total sobre raios e tempestades, transformação, imortalidade, poder absoluto sobre o Olimpo",
      relacoes: "Pai de Damian, rei dos deuses, marido de Hera"
    },
    {
      nome: "Prometeu",
      aparencia: "Titã ancião com olhos sábios, vestindo roupas simples. Marcas de correntes ainda visíveis em seus pulsos.",
      poderes: "Sabedoria infinita, premonições, conhecimento dos segredos dos deuses",
      relacoes: "Aliado de Damian, mentor, inimigo de Zeus"
    }
  ],
  chefes: [
    {
      nome: "Ares - Deus da Guerra",
      ataques: "Ataques com espada flamejante, invocação de soldados espartanos, raiva que aumenta dano",
      drops: "Espada de Ares, Armadura de Guerra, Fragmento de Honra",
      frases: "\"A guerra é a única verdade!\" \"Você não é digno de ser filho de Zeus!\""
    },
    {
      nome: "Hades - Senhor do Submundo",
      ataques: "Invocação de mortos-vivos, ataques de sombra, controle de almas",
      drops: "Coroa de Hades, Anel das Sombras, Essência da Morte",
      frases: "\"Bem-vindo ao meu reino, sobrinho!\" \"A morte é apenas o começo!\""
    },
    {
      nome: "Poseidon - Deus dos Mares",
      ataques: "Tsunamis, ataques com tridente, controle de criaturas marinhas",
      drops: "Tridente de Poseidon, Concha Sagrada, Pérola dos Abismos",
      frases: "\"Os mares obedecem apenas a mim!\" \"Afogue-se em sua arrogância!\""
    }
  ],
  salas: [
    {
      nome: "Salão do Trono de Zeus",
      descricao: "Majestoso salão com colunas douradas, nuvens flutuantes e o trono de Zeus no centro. Raios ocasionais iluminam o ambiente.",
      inimigos: "Guardiões do Olimpo, Quimeras, Harpias",
      desafios: "Puzzle das nuvens, teste de honra, combate final com Zeus"
    },
    {
      nome: "Jardins das Hespérides",
      descricao: "Jardim paradisíaco com árvores douradas e maçãs douradas. Dragão Ladon guarda o local.",
      inimigos: "Dragão Ladon, Ninfas das Hespérides",
      desafios: "Roubar maçã dourada sem matar o dragão, puzzle das estações"
    },
    {
      nome: "Labirinto do Minotauro",
      descricao: "Labirinto escuro e confuso com paredes de pedra. O Minotauro vagueia pelos corredores.",
      inimigos: "Minotauro, Esqueletos, Aranhas gigantes",
      desafios: "Navegar pelo labirinto, derrotar ou poupar o Minotauro"
    }
  ],
  habilidades: [
    {
      nome: "Raio de Zeus",
      descricao: "Lança um raio poderoso que causa dano massivo e pode atordoar inimigos",
      custo: "5 pontos de habilidade",
      preRequisito: "Nenhum"
    },
    {
      nome: "Escudo Divino",
      descricao: "Cria um escudo protetor que absorve dano e reflete ataques",
      custo: "3 pontos de habilidade",
      preRequisito: "Raio de Zeus"
    },
    {
      nome: "Voo Celestial",
      descricao: "Permite voar por curtos períodos, evitando obstáculos e inimigos terrestres",
      custo: "4 pontos de habilidade",
      preRequisito: "Escudo Divino"
    }
  ],
  itens: [
    {
      nome: "Espada de Zeus",
      descricao: "Espada lendária forjada pelo próprio Zeus, capaz de cortar qualquer material",
      tipo: "Arma",
      uso: "Arma principal, causa dano extra contra deuses"
    },
    {
      nome: "Poção de Regeneração",
      descricao: "Poção dourada que restaura completamente a saúde",
      tipo: "Consumível",
      uso: "Restaura 100% da saúde instantaneamente"
    },
    {
      nome: "Armadura do Olimpo",
      descricao: "Armadura divina que oferece proteção máxima e resistência a ataques elementais",
      tipo: "Armadura",
      uso: "Equipar para máxima proteção"
    }
  ],
  lojas: [
    {
      nome: "Hefesto - Ferreiro Divino",
      lore: "Deus ferreiro que forja as armas dos deuses. Apesar de ser filho de Zeus, simpatiza com Damian.",
      itens: "Armas divinas, armaduras, melhorias de equipamento",
      localizacao: "Forja no Monte Olimpo"
    },
    {
      nome: "Hermes - Mercador dos Deuses",
      lore: "Mensageiro dos deuses que também é um comerciante astuto. Vende itens raros e informações.",
      itens: "Poções raras, mapas secretos, informações sobre chefes",
      localizacao: "Vagando pelo Olimpo"
    }
  ],
  honra: {
    valor: 65,
    regras: [
      "Matar deuses reduz honra em 10 pontos",
      "Poupar deuses aumenta honra em 15 pontos",
      "Ajudar mortais aumenta honra em 5 pontos",
      "Destruir templos reduz honra em 20 pontos",
      "Honra alta (70+): Damian governa no lugar de Zeus (final bom)",
      "Honra baixa (30-): Damian destrói o Olimpo e foge (final ruim)",
      "Honra média (31-69): Damian encontra um caminho intermediário"
    ]
  },
  tarefas: [
    {
      titulo: "Implementar sistema de combate",
      descricao: "Criar mecânicas de combate fluidas com combos e habilidades especiais",
      prioridade: "Alta",
      concluida: true
    },
    {
      titulo: "Design de personagens",
      descricao: "Criar sprites e animações para todos os personagens principais",
      prioridade: "Alta",
      concluida: false
    },
    {
      titulo: "Sistema de honra",
      descricao: "Implementar mecânicas de honra que afetam o final do jogo",
      prioridade: "Média",
      concluida: true
    },
    {
      titulo: "Árvore de habilidades",
      descricao: "Criar interface visual para a árvore de habilidades",
      prioridade: "Média",
      concluida: false
    },
    {
      titulo: "Sistema de save/load",
      descricao: "Implementar salvamento automático e carregamento de progresso",
      prioridade: "Baixa",
      concluida: false
    }
  ]
};

function loadData() {
  const data = localStorage.getItem('damian-data');
  return data ? JSON.parse(data) : JSON.parse(JSON.stringify(defaultData));
}

function saveData(data) {
  localStorage.setItem('damian-data', JSON.stringify(data));
}

window.damianData = loadData();
window.saveDamianData = saveData;
