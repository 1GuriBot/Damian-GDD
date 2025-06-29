// Controle da barra lateral expansível
class SidebarController {
  constructor() {
    this.sidebar = document.getElementById('sidebar');
    this.menuToggle = document.getElementById('menu-toggle');
    this.sidebarToggle = document.getElementById('sidebar-toggle');
    this.isExpanded = false;
    this.isMobile = window.innerWidth <= 768;
    
    console.log('SidebarController inicializado:', {
      sidebar: !!this.sidebar,
      menuToggle: !!this.menuToggle,
      sidebarToggle: !!this.sidebarToggle,
      isMobile: this.isMobile,
      width: window.innerWidth
    });
    
    this.init();
  }
  
  init() {
    // Verificar se os elementos existem
    if (!this.sidebar || !this.menuToggle || !this.sidebarToggle) {
      console.error('Elementos da sidebar não encontrados:', {
        sidebar: !!this.sidebar,
        menuToggle: !!this.menuToggle,
        sidebarToggle: !!this.sidebarToggle
      });
      return;
    }
    
    // Adicionar event listeners
    this.menuToggle.addEventListener('click', () => {
      console.log('Menu toggle clicked!');
      this.toggleSidebar();
    });
    
    this.sidebarToggle.addEventListener('click', () => {
      console.log('Sidebar toggle clicked!');
      this.toggleSidebar();
    });
    
    // Detectar mudanças de tamanho da tela
    window.addEventListener('resize', () => {
      console.log('Resize detected, width:', window.innerWidth);
      this.handleResize();
    });
    
    // Inicializar estado baseado no tamanho da tela
    this.handleResize();
    
    // Adicionar event listeners para os itens de navegação
    this.setupNavigation();
    
    console.log('SidebarController inicializado com sucesso');
  }
  
  handleResize() {
    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth <= 768;
    
    console.log('Resize handler:', { 
      wasMobile, 
      isMobile: this.isMobile, 
      width: window.innerWidth,
      isExpanded: this.isExpanded 
    });
    
    // Se mudou de desktop para mobile ou vice-versa
    if (wasMobile !== this.isMobile) {
      console.log('Mudança de modo detectada');
      if (this.isMobile) {
        this.collapseSidebar();
      } else {
        this.expandSidebar();
      }
    }
    
    // No desktop, sempre expandir automaticamente se não estiver minimizada
    if (!this.isMobile && !this.isExpanded) {
      console.log('Expandindo sidebar no desktop');
      this.expandSidebar();
    }
  }
  
  toggleSidebar() {
    console.log('Toggle sidebar, estado atual:', this.isExpanded);
    if (this.isExpanded) {
      this.collapseSidebar();
    } else {
      this.expandSidebar();
    }
  }
  
  expandSidebar() {
    console.log('Expandindo sidebar');
    this.sidebar.classList.add('expanded');
    this.isExpanded = true;
    
    // Em mobile, adicionar overlay
    if (this.isMobile) {
      this.addOverlay();
    }
  }
  
  collapseSidebar() {
    console.log('Colapsando sidebar');
    this.sidebar.classList.remove('expanded');
    this.isExpanded = false;
    
    // Em mobile, remover overlay
    if (this.isMobile) {
      this.removeOverlay();
    }
  }
  
  addOverlay() {
    if (!document.getElementById('sidebar-overlay')) {
      console.log('Adicionando overlay');
      const overlay = document.createElement('div');
      overlay.id = 'sidebar-overlay';
      overlay.className = 'sidebar-overlay';
      overlay.addEventListener('click', () => this.collapseSidebar());
      document.body.appendChild(overlay);
    }
  }
  
  removeOverlay() {
    const overlay = document.getElementById('sidebar-overlay');
    if (overlay) {
      console.log('Removendo overlay');
      overlay.remove();
    }
  }
  
  setupNavigation() {
    const navItems = document.querySelectorAll('.sidebar-nav li');
    console.log('Configurando navegação, itens encontrados:', navItems.length);
    
    navItems.forEach((item, index) => {
      item.addEventListener('click', (e) => {
        console.log('Item de navegação clicado:', index, item.getAttribute('data-section'));
        
        // Remover classe active de todos os itens
        navItems.forEach(nav => nav.classList.remove('active'));
        
        // Adicionar classe active ao item clicado
        item.classList.add('active');
        
        // Em mobile, fechar a sidebar após clicar
        if (this.isMobile) {
          this.collapseSidebar();
        }
        
        // Chamar a função de navegação existente
        const section = item.getAttribute('data-section');
        if (section && typeof renderSection === 'function') {
          console.log('Renderizando seção:', section);
          renderSection(section);
        } else {
          console.log('Função renderSection não encontrada ou seção inválida:', section);
        }
      });
    });
    
    // Ativar o primeiro item por padrão
    if (navItems.length > 0) {
      navItems[0].classList.add('active');
      const firstSection = navItems[0].getAttribute('data-section');
      if (firstSection && typeof renderSection === 'function') {
        console.log('Renderizando primeira seção:', firstSection);
        renderSection(firstSection);
      }
    }
  }
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM carregado, inicializando SidebarController');
  new SidebarController();
}); 