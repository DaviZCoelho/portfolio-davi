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
                    <span class="tag">Vanilla JS</span>
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
