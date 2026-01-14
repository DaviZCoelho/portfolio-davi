const tabs = {
    sobre: `
        <h2>Sobre Mim</h2>
        <p>Olá! 👋 Eu sou o Davi</p>
        <p>Desenvolvedor e graduando em Computação na <strong>UFPR</strong> (7º período). Além de dominar tecnologias como <strong>React, Python e SQL</strong>, utilizo minha trajetória na pesquisa acadêmica para entender a fundo como a tecnologia impacta as pessoas.</p>
        <p>Procuro minha primeira oportunidade de estágio para aplicar meu conhecimento técnico e minha capacidade analítica em projetos desafiadores.</p>
    `,
    projetos: `
        <h2>Projetos</h2>
        <p>Em breve.</p>
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
    
    // Remove classe ativa de todos os botões
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Adiciona classe ativa no botão clicado (para ele ficar destacado)
    event.currentTarget.classList.add('active');

    // Aplica o efeito de fade-out e troca o conteúdo
    contentBox.style.opacity = '0';
    
    setTimeout(() => {
        contentBox.innerHTML = tabs[tabName];
        contentBox.style.opacity = '1';
    }, 200);
}

// Carregar "Sobre Mim" por padrão ao abrir
window.onload = () => changeTab('sobre');
