// Dados do painel
let damianData = {
  historia: {
    resumo: "Damian, um semideus renegado filho de Zeus e uma mortal, desafia o Olimpo em busca de redenção ou ruína. Suas escolhas moldam o destino dos deuses e do mundo mortal.",
    capitulos: []
  },
  personagens: [],
  chefes: [],
  salas: [],
  habilidades: [],
  itens: [],
  lojas: [],
  honra: {
    valor: 50,
    regras: [
      "Matar deuses reduz honra em 10 pontos",
      "Poupar deuses aumenta honra em 15 pontos",
      "Honra alta (70+): Damian governa no lugar de Zeus (final bom)",
      "Honra baixa (30-): Damian destrói o Olimpo e foge (final ruim)"
    ]
  },
  tarefas: []
};

// Carregar dados salvos
function loadData() {
  const saved = localStorage.getItem('damian-data');
  if (saved) {
    damianData = JSON.parse(saved);
  }
}

// Salvar dados
function saveData() {
  localStorage.setItem('damian-data', JSON.stringify(damianData));
}

// Carregar dados ao iniciar
loadData();

// Navegação entre seções
const sections = {
  historia: 'História Principal',
  personagens: 'Personagens',
  chefes: 'Chefes',
  salas: 'Salas e Mapas',
  habilidades: 'Árvore de Habilidades',
  itens: 'Itens e Poderes',
  lojas: 'Lojas e NPCs',
  honra: 'Sistema de Honra',
  tarefas: 'Tarefas de Desenvolvimento'
};

const mainContent = document.getElementById('main-content');
const menuItems = document.querySelectorAll('.sidebar nav ul li');

function renderSection(section) {
  mainContent.innerHTML = `<h1>${sections[section]}</h1><div class="section-content" id="section-${section}"></div>`;
  const sectionContent = document.getElementById(`section-${section}`);
  
  switch(section) {
    case 'historia':
      renderHistoria(sectionContent);
      break;
    case 'personagens':
      renderPersonagens(sectionContent);
      break;
    case 'chefes':
      renderChefes(sectionContent);
      break;
    case 'salas':
      renderSalas(sectionContent);
      break;
    case 'habilidades':
      renderHabilidades(sectionContent);
      break;
    case 'itens':
      renderItens(sectionContent);
      break;
    case 'lojas':
      renderLojas(sectionContent);
      break;
    case 'honra':
      renderHonra(sectionContent);
      break;
    case 'tarefas':
      renderTarefas(sectionContent);
      break;
  }
}

function renderHistoria(container) {
  container.innerHTML = `
    <div class="card">
      <h3>Resumo da História</h3>
      <textarea class="input-field" id="historia-resumo" rows="4" placeholder="Descreva a história principal...">${damianData.historia.resumo}</textarea>
      <button class="btn" onclick="salvarHistoria()">Salvar Resumo</button>
    </div>
    
    <div class="card">
      <h3>Capítulos</h3>
      <div id="capitulos-lista">
        ${damianData.historia.capitulos.map((cap, index) => `
          <div class="card" style="margin: 10px 0;">
            <h4>Capítulo ${index + 1}</h4>
            <input type="text" class="input-field" value="${cap.titulo || ''}" placeholder="Título do capítulo" onchange="atualizarCapitulo(${index}, 'titulo', this.value)">
            <textarea class="input-field" rows="3" placeholder="Descrição do capítulo" onchange="atualizarCapitulo(${index}, 'descricao', this.value)">${cap.descricao || ''}</textarea>
            <button class="btn btn-secondary" onclick="removerCapitulo(${index})">Remover</button>
          </div>
        `).join('')}
      </div>
      <button class="btn" onclick="adicionarCapitulo()">Adicionar Capítulo</button>
    </div>
  `;
}

function renderPersonagens(container) {
  container.innerHTML = `
    <div class="card">
      <h3>Lista de Personagens</h3>
      <div id="personagens-lista">
        ${damianData.personagens.map((personagem, index) => `
          <div class="card" style="margin: 10px 0;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <h4>${personagem.nome || 'Novo Personagem'}</h4>
              <button class="btn btn-secondary" onclick="removerPersonagem(${index})">Remover</button>
            </div>
            <input type="text" class="input-field" value="${personagem.nome || ''}" placeholder="Nome do personagem" onchange="atualizarPersonagem(${index}, 'nome', this.value)">
            <textarea class="input-field" rows="3" placeholder="Descrição da aparência" onchange="atualizarPersonagem(${index}, 'aparencia', this.value)">${personagem.aparencia || ''}</textarea>
            <textarea class="input-field" rows="3" placeholder="Poderes e habilidades" onchange="atualizarPersonagem(${index}, 'poderes', this.value)">${personagem.poderes || ''}</textarea>
            <textarea class="input-field" rows="2" placeholder="Relações com outros personagens" onchange="atualizarPersonagem(${index}, 'relacoes', this.value)">${personagem.relacoes || ''}</textarea>
          </div>
        `).join('')}
      </div>
      <button class="btn" onclick="adicionarPersonagem()">Adicionar Personagem</button>
    </div>
  `;
}

function renderChefes(container) {
  container.innerHTML = `
    <div class="card">
      <h3>Lista de Chefes</h3>
      <div id="chefes-lista">
        ${damianData.chefes.map((chefe, index) => `
          <div class="card" style="margin: 10px 0;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <h4>${chefe.nome || 'Novo Chefe'}</h4>
              <button class="btn btn-secondary" onclick="removerChefe(${index})">Remover</button>
            </div>
            <input type="text" class="input-field" value="${chefe.nome || ''}" placeholder="Nome do chefe" onchange="atualizarChefe(${index}, 'nome', this.value)">
            <textarea class="input-field" rows="3" placeholder="Padrões de ataque" onchange="atualizarChefe(${index}, 'ataques', this.value)">${chefe.ataques || ''}</textarea>
            <textarea class="input-field" rows="2" placeholder="Itens que dropa" onchange="atualizarChefe(${index}, 'drops', this.value)">${chefe.drops || ''}</textarea>
            <textarea class="input-field" rows="2" placeholder="Frases icônicas" onchange="atualizarChefe(${index}, 'frases', this.value)">${chefe.frases || ''}</textarea>
          </div>
        `).join('')}
      </div>
      <button class="btn" onclick="adicionarChefe()">Adicionar Chefe</button>
    </div>
  `;
}

function renderSalas(container) {
  container.innerHTML = `
    <div class="card">
      <h3>Salas e Mapas</h3>
      <div id="salas-lista">
        ${damianData.salas.map((sala, index) => `
          <div class="card" style="margin: 10px 0;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <h4>${sala.nome || 'Nova Sala'}</h4>
              <button class="btn btn-secondary" onclick="removerSala(${index})">Remover</button>
            </div>
            <input type="text" class="input-field" value="${sala.nome || ''}" placeholder="Nome da sala" onchange="atualizarSala(${index}, 'nome', this.value)">
            <textarea class="input-field" rows="3" placeholder="Descrição da sala" onchange="atualizarSala(${index}, 'descricao', this.value)">${sala.descricao || ''}</textarea>
            <textarea class="input-field" rows="2" placeholder="Inimigos presentes" onchange="atualizarSala(${index}, 'inimigos', this.value)">${sala.inimigos || ''}</textarea>
            <textarea class="input-field" rows="2" placeholder="Desafios e puzzles" onchange="atualizarSala(${index}, 'desafios', this.value)">${sala.desafios || ''}</textarea>
          </div>
        `).join('')}
      </div>
      <button class="btn" onclick="adicionarSala()">Adicionar Sala</button>
    </div>
  `;
}

function renderHabilidades(container) {
  container.innerHTML = `
    <div class="card">
      <h3>Árvore de Habilidades</h3>
      <div id="habilidades-lista">
        ${damianData.habilidades.map((habilidade, index) => `
          <div class="card" style="margin: 10px 0;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <h4>${habilidade.nome || 'Nova Habilidade'}</h4>
              <button class="btn btn-secondary" onclick="removerHabilidade(${index})">Remover</button>
            </div>
            <input type="text" class="input-field" value="${habilidade.nome || ''}" placeholder="Nome da habilidade" onchange="atualizarHabilidade(${index}, 'nome', this.value)">
            <textarea class="input-field" rows="3" placeholder="Descrição da habilidade" onchange="atualizarHabilidade(${index}, 'descricao', this.value)">${habilidade.descricao || ''}</textarea>
            <input type="text" class="input-field" value="${habilidade.custo || ''}" placeholder="Custo de pontos" onchange="atualizarHabilidade(${index}, 'custo', this.value)">
            <input type="text" class="input-field" value="${habilidade.preRequisito || ''}" placeholder="Pré-requisito" onchange="atualizarHabilidade(${index}, 'preRequisito', this.value)">
          </div>
        `).join('')}
      </div>
      <button class="btn" onclick="adicionarHabilidade()">Adicionar Habilidade</button>
    </div>
  `;
}

function renderItens(container) {
  container.innerHTML = `
    <div class="card">
      <h3>Itens e Poderes</h3>
      <div id="itens-lista">
        ${damianData.itens.map((item, index) => `
          <div class="card" style="margin: 10px 0;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <h4>${item.nome || 'Novo Item'}</h4>
              <button class="btn btn-secondary" onclick="removerItem(${index})">Remover</button>
            </div>
            <input type="text" class="input-field" value="${item.nome || ''}" placeholder="Nome do item" onchange="atualizarItem(${index}, 'nome', this.value)">
            <textarea class="input-field" rows="3" placeholder="Descrição do item" onchange="atualizarItem(${index}, 'descricao', this.value)">${item.descricao || ''}</textarea>
            <input type="text" class="input-field" value="${item.tipo || ''}" placeholder="Tipo (arma, armadura, consumível, etc)" onchange="atualizarItem(${index}, 'tipo', this.value)">
            <textarea class="input-field" rows="2" placeholder="Como usar" onchange="atualizarItem(${index}, 'uso', this.value)">${item.uso || ''}</textarea>
          </div>
        `).join('')}
      </div>
      <button class="btn" onclick="adicionarItem()">Adicionar Item</button>
    </div>
  `;
}

function renderLojas(container) {
  container.innerHTML = `
    <div class="card">
      <h3>Lojas e NPCs</h3>
      <div id="lojas-lista">
        ${damianData.lojas.map((loja, index) => `
          <div class="card" style="margin: 10px 0;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <h4>${loja.nome || 'Nova Loja'}</h4>
              <button class="btn btn-secondary" onclick="removerLoja(${index})">Remover</button>
            </div>
            <input type="text" class="input-field" value="${loja.nome || ''}" placeholder="Nome da loja/NPC" onchange="atualizarLoja(${index}, 'nome', this.value)">
            <textarea class="input-field" rows="3" placeholder="Lore e história" onchange="atualizarLoja(${index}, 'lore', this.value)">${loja.lore || ''}</textarea>
            <textarea class="input-field" rows="3" placeholder="Itens vendidos" onchange="atualizarLoja(${index}, 'itens', this.value)">${loja.itens || ''}</textarea>
            <input type="text" class="input-field" value="${loja.localizacao || ''}" placeholder="Localização" onchange="atualizarLoja(${index}, 'localizacao', this.value)">
          </div>
        `).join('')}
      </div>
      <button class="btn" onclick="adicionarLoja()">Adicionar Loja/NPC</button>
    </div>
  `;
}

function renderHonra(container) {
  container.innerHTML = `
    <div class="card">
      <h3>Sistema de Honra</h3>
      <div style="margin: 20px 0;">
        <label>Nível de Honra Atual: ${damianData.honra.valor}/100</label>
        <input type="range" min="0" max="100" value="${damianData.honra.valor}" class="input-field" style="width: 100%;" onchange="atualizarHonra(this.value)">
        <div style="text-align: center; margin: 10px 0;">
          ${damianData.honra.valor >= 70 ? '🏛️ Final Bom: Damian governa no lugar de Zeus' : 
            damianData.honra.valor <= 30 ? '🔥 Final Ruim: Damian destrói o Olimpo' : 
            '⚖️ Final Neutro: Damian encontra um caminho intermediário'}
        </div>
      </div>
      
      <div class="card">
        <h4>Regras do Sistema</h4>
        <div id="regras-lista">
          ${damianData.honra.regras.map((regra, index) => `
            <div style="display: flex; align-items: center; margin: 8px 0;">
              <input type="text" class="input-field" value="${regra}" style="flex: 1; margin-right: 10px;" onchange="atualizarRegra(${index}, this.value)">
              <button class="btn btn-secondary" onclick="removerRegra(${index})">Remover</button>
            </div>
          `).join('')}
        </div>
        <button class="btn" onclick="adicionarRegra()">Adicionar Regra</button>
      </div>
    </div>
  `;
}

function renderTarefas(container) {
  container.innerHTML = `
    <div class="card">
      <h3>Tarefas de Desenvolvimento</h3>
      <div id="tarefas-lista">
        ${damianData.tarefas.map((tarefa, index) => `
          <div class="card" style="margin: 10px 0;">
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
              <input type="checkbox" ${tarefa.concluida ? 'checked' : ''} onchange="alternarTarefa(${index}, this.checked)" style="margin-right: 10px;">
              <h4 style="margin: 0; flex: 1; ${tarefa.concluida ? 'text-decoration: line-through; opacity: 0.6;' : ''}">${tarefa.titulo || 'Nova Tarefa'}</h4>
              <button class="btn btn-secondary" onclick="removerTarefa(${index})">Remover</button>
            </div>
            <input type="text" class="input-field" value="${tarefa.titulo || ''}" placeholder="Título da tarefa" onchange="atualizarTarefa(${index}, 'titulo', this.value)">
            <textarea class="input-field" rows="2" placeholder="Descrição da tarefa" onchange="atualizarTarefa(${index}, 'descricao', this.value)">${tarefa.descricao || ''}</textarea>
            <input type="text" class="input-field" value="${tarefa.prioridade || ''}" placeholder="Prioridade (Alta/Média/Baixa)" onchange="atualizarTarefa(${index}, 'prioridade', this.value)">
          </div>
        `).join('')}
      </div>
      <button class="btn" onclick="adicionarTarefa()">Adicionar Tarefa</button>
    </div>
  `;
}

// Funções de manipulação de dados
function salvarHistoria() {
  damianData.historia.resumo = document.getElementById('historia-resumo').value;
  saveData();
  alert('História salva!');
}

function adicionarCapitulo() {
  damianData.historia.capitulos.push({ titulo: '', descricao: '' });
  saveData();
  renderSection('historia');
}

function atualizarCapitulo(index, campo, valor) {
  damianData.historia.capitulos[index][campo] = valor;
  saveData();
}

function removerCapitulo(index) {
  damianData.historia.capitulos.splice(index, 1);
  saveData();
  renderSection('historia');
}

function adicionarPersonagem() {
  damianData.personagens.push({ nome: '', aparencia: '', poderes: '', relacoes: '' });
  saveData();
  renderSection('personagens');
}

function atualizarPersonagem(index, campo, valor) {
  damianData.personagens[index][campo] = valor;
  saveData();
}

function removerPersonagem(index) {
  damianData.personagens.splice(index, 1);
  saveData();
  renderSection('personagens');
}

function adicionarChefe() {
  damianData.chefes.push({ nome: '', ataques: '', drops: '', frases: '' });
  saveData();
  renderSection('chefes');
}

function atualizarChefe(index, campo, valor) {
  damianData.chefes[index][campo] = valor;
  saveData();
}

function removerChefe(index) {
  damianData.chefes.splice(index, 1);
  saveData();
  renderSection('chefes');
}

function adicionarSala() {
  damianData.salas.push({ nome: '', descricao: '', inimigos: '', desafios: '' });
  saveData();
  renderSection('salas');
}

function atualizarSala(index, campo, valor) {
  damianData.salas[index][campo] = valor;
  saveData();
}

function removerSala(index) {
  damianData.salas.splice(index, 1);
  saveData();
  renderSection('salas');
}

function adicionarHabilidade() {
  damianData.habilidades.push({ nome: '', descricao: '', custo: '', preRequisito: '' });
  saveData();
  renderSection('habilidades');
}

function atualizarHabilidade(index, campo, valor) {
  damianData.habilidades[index][campo] = valor;
  saveData();
}

function removerHabilidade(index) {
  damianData.habilidades.splice(index, 1);
  saveData();
  renderSection('habilidades');
}

function adicionarItem() {
  damianData.itens.push({ nome: '', descricao: '', tipo: '', uso: '' });
  saveData();
  renderSection('itens');
}

function atualizarItem(index, campo, valor) {
  damianData.itens[index][campo] = valor;
  saveData();
}

function removerItem(index) {
  damianData.itens.splice(index, 1);
  saveData();
  renderSection('itens');
}

function adicionarLoja() {
  damianData.lojas.push({ nome: '', lore: '', itens: '', localizacao: '' });
  saveData();
  renderSection('lojas');
}

function atualizarLoja(index, campo, valor) {
  damianData.lojas[index][campo] = valor;
  saveData();
}

function removerLoja(index) {
  damianData.lojas.splice(index, 1);
  saveData();
  renderSection('lojas');
}

function atualizarHonra(valor) {
  damianData.honra.valor = parseInt(valor);
  saveData();
  renderSection('honra');
}

function adicionarRegra() {
  damianData.honra.regras.push('');
  saveData();
  renderSection('honra');
}

function atualizarRegra(index, valor) {
  damianData.honra.regras[index] = valor;
  saveData();
}

function removerRegra(index) {
  damianData.honra.regras.splice(index, 1);
  saveData();
  renderSection('honra');
}

function adicionarTarefa() {
  damianData.tarefas.push({ titulo: '', descricao: '', prioridade: '', concluida: false });
  saveData();
  renderSection('tarefas');
}

function atualizarTarefa(index, campo, valor) {
  damianData.tarefas[index][campo] = valor;
  saveData();
  renderSection('tarefas');
}

function alternarTarefa(index, concluida) {
  damianData.tarefas[index].concluida = concluida;
  saveData();
  renderSection('tarefas');
}

function removerTarefa(index) {
  damianData.tarefas.splice(index, 1);
  saveData();
  renderSection('tarefas');
}

// Exportar dados para JSON
const exportBtn = document.getElementById('export-json');
const importBtn = document.getElementById('import-json');
const importFile = document.getElementById('import-file');
const syncStatus = document.getElementById('sync-status');

exportBtn.addEventListener('click', () => {
  const dataStr = JSON.stringify(damianData, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'damian-data.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

importBtn.addEventListener('click', () => {
  importFile.click();
});

importFile.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const imported = JSON.parse(evt.target.result);
      damianData = imported;
      saveData();
      location.reload();
    } catch (err) {
      alert('Arquivo inválido!');
    }
  };
  reader.readAsText(file);
});

// Status de sincronização (offline/online)
function updateSyncStatus() {
  if (navigator.onLine) {
    syncStatus.textContent = 'Online';
    syncStatus.classList.remove('offline');
    syncStatus.classList.add('online');
  } else {
    syncStatus.textContent = 'Offline';
    syncStatus.classList.remove('online');
    syncStatus.classList.add('offline');
  }
}
window.addEventListener('online', updateSyncStatus);
window.addEventListener('offline', updateSyncStatus);
updateSyncStatus();

// Event listeners
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    renderSection(item.dataset.section);
  });
});

// Renderizar seção inicial
renderSection('historia');
menuItems[0].classList.add('active');
