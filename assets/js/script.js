const tabs = {
    sobre: `
    <h2>Sobre Mim</h2>
    <p>Olá! 👋 Eu sou o Davi</p>
    <p>Desenvolvedor e graduando em Computação na <strong>UFPR</strong> (7º período). Utilizo minha trajetória na pesquisa acadêmica para entender a fundo como a tecnologia impacta as pessoas e como construir soluções que realmente resolvam problemas.</p>
    <p>Procuro minha primeira oportunidade de estágio para aplicar meu conhecimento técnico e minha capacidade analítica em projetos desafiadores.</p>
    
    <h3 style="margin-top: 30px; font-size: 1.3rem; color: var(--text);">Tecnologias e Ferramentas</h3>

    <div class="tech-container">
        <div class="tech-category">
            <h4>Frontend</h4>
            <div class="tech-stack">
                <div class="tech-item"><img src="https://skillicons.dev/icons?i=html" alt="HTML"><span>HTML</span></div>
                <div class="tech-item"><img src="https://skillicons.dev/icons?i=css" alt="CSS"><span>CSS</span></div>
                <div class="tech-item"><img src="https://skillicons.dev/icons?i=js" alt="JS"><span>JS</span></div>
                <div class="tech-item"><img src="https://skillicons.dev/icons?i=ts" alt="TS"><span>TS</span></div>
                <div class="tech-item"><img src="https://skillicons.dev/icons?i=react" alt="React"><span>React</span></div>
                <div class="tech-item"><img src="https://skillicons.dev/icons?i=nextjs" alt="Next.js"><span>Next.js</span></div>
            </div>
        </div>

        <div class="tech-category">
            <h4>Backend & Database</h4>
            <div class="tech-stack">
                <div class="tech-item"><img src="https://skillicons.dev/icons?i=python" alt="Python"><span>Python</span></div>
                <div class="tech-item"><img src="https://skillicons.dev/icons?i=mysql" alt="MySQL"><span>MySQL</span></div>
                <div class="tech-item"><img src="https://skillicons.dev/icons?i=postgres" alt="PostgreSQL"><span>PostgreSQL</span></div>
            </div>
        </div>

        <div class="tech-category">
            <h4>Ferramentas</h4>
            <div class="tech-stack">
                <div class="tech-item"><img src="https://skillicons.dev/icons?i=git" alt="Git"><span>Git</span></div>
                <div class="tech-item"><img src="https://skillicons.dev/icons?i=github" alt="GitHub"><span>GitHub</span></div>
                <div class="tech-item"><img src="https://skillicons.dev/icons?i=vscode" alt="VSCode"><span>VSCode</span></div>
            </div>
        </div>
    </div>
    `,
    projetos: `
        <h2>Projetos</h2>
        <div class="projetos-grid">
            <div class="projeto-card">
                <div class="card-header">
                    <span class="tag">Next.js</span>
                    <span class="tag">TypeScript</span>
                    <span class="tag">Supabase</span>
                    <span class="tag">Fullstack</span>
                </div>
                <h3>Dashboard de Vendas</h3>
                <p>CRM focado em gestão de leads e vendas com segurança RLS, gráficos dinâmicos e isolamento de dados por usuário.</p>
                <div style="display: flex; gap: 10px;">
                    <a href="https://dashboardgestaocomercial.vercel.app/login" target="_blank" class="btn-projeto" style="flex: 1;">GitHub</a>
                    <a href="https://dashboardgestaocomercial.vercel.app/login" target="_blank" class="btn-projeto" style="flex: 1; background: var(--accent); border: none;">Live Demo</a>
                </div>
            </div>

            <div class="projeto-card">
                <div class="card-header">
                    <span class="tag">JavaScript</span>
                    <span class="tag">LocalStorage</span>
                </div>
                <h3>Gerenciador de Desculpas</h3>
                <p>Projeto satírico que simula tomada de decisão corporativa. Possui sistema de Score de viabilidade, histórico de logs e persistência de dados local.</p>
                <div style="display: flex; gap: 10px;">
                    <a href="https://github.com/DaviZCoelho/Gerenciador-de-desculpas" target="_blank" class="btn-projeto" style="flex: 1;">GitHub</a>
                    <a href="https://davizcoelho.github.io/Gerenciador-de-desculpas/" target="_blank" class="btn-projeto" style="flex: 1; background: var(--accent); border: none;">Live Demo</a>
                </div>
            </div>

            <div class="projeto-card">
                <div class="card-header">
                    <span class="tag">Python</span>
                    <span class="tag">FastAPI</span>
                    <span class="tag">JavaScript</span>
                </div>
                <h3>Consulta de Clima Real-Time</h3>
                <p>Aplicação que consome dados da OpenWeatherMap. Possui backend em FastAPI com tratamento de erros e interface dinâmica com Fetch API.</p>
                <div style="display: flex; gap: 10px;">
                    <a href="https://github.com/DaviZCoelho/API_Clima" target="_blank" class="btn-projeto" style="flex: 1;">GitHub</a>
                    <a href="https://api-clima-ld21.vercel.app/" target="_blank" class="btn-projeto" style="flex: 1; background: var(--accent); border: none;">Live Demo</a>
                </div>
            </div>

            <div class="projeto-card">
                <div class="card-header">
                    <span class="tag">HTML/CSS</span>
                    <span class="tag">JavaScript</span>
                </div>
                <h3>Portfólio Pessoal</h3>
                <p>Design moderno com navegação dinâmica entre abas e efeito Glassmorphism.</p>
                <div style="display: flex; gap: 10px;">
                    <a href="https://github.com/DaviZCoelho/portfolio-davi" target="_blank" class="btn-projeto" style="flex: 1;">GitHub</a>
                    <a href="#" class="btn-projeto" style="flex: 1; background: var(--accent); border: none;">Você está aqui</a>
                </div>
            </div>
        </div>
    `,
    contato: `
        <h2>Contato</h2>
        <p>E-mail: davizcoelho@ufpr.br</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/davizcoelho/" target="_blank" style="color: var(--text);">linkedin.com/in/davizcoelho/</a></p>
    `
};

function changeTab(tabName) {
    const contentBox = document.getElementById('content-box');
    const buttons = document.querySelectorAll('.nav-menu button');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active');
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
