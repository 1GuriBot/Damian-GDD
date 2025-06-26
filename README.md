# Damian: Ruin or Reign - Painel Organizador

Um painel organizador elegante e funcional para o jogo indie "Damian: Ruin or Reign", inspirado na mitologia grega. O painel permite organizar e editar todo o conteúdo do jogo de forma intuitiva e visualmente atrativa.

## 🎨 Características Visuais

- **Design Clássico Grego**: Mármore, colunas, ouro, fontes serifadas e detalhes ornamentais
- **Modo Escuro**: Tema infernal e sombrio ativável
- **Responsivo**: Funciona perfeitamente no desktop e celular
- **Animações Suaves**: Transições elegantes e feedback visual

## 🚀 Funcionalidades

### Menu Lateral Fixo
- Navegação entre todas as seções do jogo
- Design responsivo que se adapta ao tamanho da tela
- Indicador visual da seção ativa

### Seções Organizáveis

#### 📖 História Principal
- Edição do resumo da história
- Gerenciamento de capítulos
- Adicionar/editar/remover capítulos

#### 👥 Personagens
- Lista completa de personagens
- Campos para nome, aparência, poderes e relações
- Edição inline de todos os dados

#### ⚔️ Chefes
- Informações sobre chefes do jogo
- Padrões de ataque, drops e frases icônicas
- Sistema de gerenciamento completo

#### 🗺️ Salas e Mapas
- Descrição de locais do jogo
- Inimigos presentes e desafios
- Organização por área

#### 🌳 Árvore de Habilidades
- Sistema de habilidades do jogador
- Custos e pré-requisitos
- Visualização em formato de árvore

#### 🛡️ Itens e Poderes
- Catálogo completo de itens
- Tipos, descrições e usos
- Sistema de categorização

#### 🏪 Lojas e NPCs
- Informações sobre comerciantes
- Lore dos personagens
- Itens vendidos e localizações

#### ⚖️ Sistema de Honra
- Controle do nível de honra (0-100)
- Regras do sistema
- Previsão do final baseado na honra

#### ✅ Tarefas de Desenvolvimento
- Checklist de progresso
- Prioridades e status
- Marcação de conclusão

## 💾 Armazenamento e Sincronização

### Funcionamento Offline
- **localStorage**: Dados salvos localmente no navegador
- **Funcionamento sem internet**: Totalmente funcional offline
- **Backup automático**: Dados preservados entre sessões

### Exportação/Importação
- **Exportar JSON**: Salvar todos os dados em arquivo
- **Importar JSON**: Carregar dados de backup
- **Compatibilidade**: Formato padrão JSON

### Status de Sincronização
- **Indicador visual**: Mostra status online/offline
- **Feedback em tempo real**: Atualizações automáticas
- **Preparado para nuvem**: Estrutura pronta para integração

## 🎯 Como Usar

### Primeira Execução
1. Abra o arquivo `index.html` no navegador
2. O painel carregará com dados de exemplo
3. Navegue pelas seções usando o menu lateral

### Adicionando Conteúdo
1. Clique em "Adicionar [Item]" na seção desejada
2. Preencha os campos que aparecem
3. Os dados são salvos automaticamente

### Editando Conteúdo
1. Clique em qualquer campo de texto
2. Digite suas alterações
3. As mudanças são salvas automaticamente

### Exportando Dados
1. Clique no botão ⬇️ (exportar) no menu lateral
2. O arquivo `damian-data.json` será baixado
3. Use para backup ou compartilhamento

### Importando Dados
1. Clique no botão ⬆️ (importar) no menu lateral
2. Selecione um arquivo JSON válido
3. Os dados serão carregados automaticamente

### Modo Escuro
1. Clique no botão 🌙 no menu lateral
2. O tema alterna entre claro e escuro
3. A preferência é salva automaticamente

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização avançada com gradientes e animações
- **JavaScript Vanilla**: Funcionalidades sem dependências
- **localStorage**: Armazenamento local
- **Google Fonts**: Tipografia clássica (EB Garamond, Cinzel)

## 📁 Estrutura de Arquivos

```
damian-painel/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos completos
├── js/
│   ├── main.js         # Lógica principal
│   ├── data.js         # Gerenciamento de dados
│   ├── sync.js         # Exportação/importação
│   └── darkmode.js     # Modo escuro
├── data/
│   └── sample-data.json # Dados de exemplo
└── assets/             # Imagens e recursos
```

## 🔮 Próximas Funcionalidades

- **Sincronização em nuvem**: Firebase/Supabase
- **Visualização da árvore de habilidades**: Interface gráfica
- **Sistema de tags**: Categorização avançada
- **Busca e filtros**: Localização rápida de conteúdo
- **Templates**: Estruturas pré-definidas
- **Colaboração**: Múltiplos usuários

## 🎮 Sobre o Jogo

"Damian: Ruin or Reign" é um jogo indie inspirado na mitologia grega onde você controla Damian, um semideus renegado que deve escolher entre redenção e ruína. Suas decisões afetam o sistema de honra e determinam o final da história.

### Sistema de Honra
- **Honra Alta (70+)**: Damian governa no lugar de Zeus (final bom)
- **Honra Baixa (30-)**: Damian destrói o Olimpo e foge (final ruim)
- **Honra Média (31-69)**: Caminho intermediário

## 📝 Licença

Este projeto é de uso livre para desenvolvimento do jogo "Damian: Ruin or Reign".

---

**Desenvolvido com ❤️ para organizar o desenvolvimento de jogos indie** 