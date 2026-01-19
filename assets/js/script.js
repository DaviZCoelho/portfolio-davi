const tabs = {
    sobre: `
        <h2>Sobre Mim</h2>
        <p>Olá! 👋 Eu sou o Davi</p>
        <p>Desenvolvedor e graduando em Computação na <strong>UFPR</strong> (7º período). Além de dominar tecnologias como <strong>React, Python e SQL</strong>, utilizo minha trajetória na pesquisa acadêmica para entender a fundo como a tecnologia impacta as pessoas.</p>
        <p>Procuro minha primeira oportunidade de estágio para aplicar meu conhecimento técnico e minha capacidade analítica em projetos desafiadores.</p>
    `,
    projetos: `
        <h2>Projetos</h2>
        <div class="projetos-grid">
            <div class="projeto-card">
                <div class="card-header">
                    <span class="tag">Next.js</span>
                    <span class="tag">Supabase</span>
                    <span class="tag">Fullstack</span>
                </div>
                <h3>Dashboard de Vendas</h3>
                <p>CRM focado em gestão de leads e vendas com segurança RLS (Row Level Security), gráficos dinâmicos e isolamento de dados por usuário.</p>
                <div style="display: flex; gap: 10px;">
                    <a href="https://github.com/DaviZCoelho/Dashboard-de-Vendas-" target="_blank" class="btn-projeto" style="flex: 1;">GitHub</a>
                    <a href="https://dashboard-de-vendas-two.vercel.app/login" target="_blank" class="btn-projeto" style="flex: 1; background: var(--accent); border: none;">Live Demo</a>
                </div>
            </div>

            <div class="projeto-card">
                <div class="card-header">
                    <span class="tag">Java</span>
                    <span class="tag">Spring</span>
                </div>
                <h3>API de Logística</h3>
                <p>Simulador de marketplace focado em monitoramento de saúde (Health Check) e logs estruturados para sustentação.</p>
                <a href="https://github.com/DaviZCoelho/logistica.sustentacao" target="_blank" class="btn-projeto">GitHub</a>
            </div>

            <div class="projeto-card">
                <div class="card-header">
                    <span class="tag">HTML/CSS</span>
                    <span class="tag">JS</span>
                </div>
                <h3>Portfólio Pessoal</h3>
                <p>Design moderno com navegação dinâmica entre abas e efeito Glassmorphism.</p>
                <a href="#" class="btn-projeto">Você está aqui</a>
            </div>
        </div>
    `,
    contato: `
        <h2>Contato</h2>
        <p>E-mail: seuemail@email.com</p>
        <p>LinkedIn: /in/davicoelho</p>
    `
};

function changeTab(tabName) {
    const contentBox = document.getElementById('content-box');
    const buttons = document.querySelectorAll('.nav-menu button');
    
    // Remove classe active de todos
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Adiciona active no botão clicado (se existir evento)
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active');
    } else {
        // Fallback para quando a função é chamada via onload
        buttons.forEach(btn => {
            if(btn.innerText.toLowerCase().includes(tabName)) btn.classList.add('active');
        });
    }

    contentBox.style.opacity = '0';
    
    setTimeout(() => {
        contentBox.innerHTML = tabs[tabName];
        contentBox.style.opacity = '1';
    }, 200);
}

window.onload = () => {
    changeTab('sobre');
};
