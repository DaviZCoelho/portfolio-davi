const tabs = {
    sobre: `
        <h2>Sobre Mim</h2>
        <p>Sou estudante de Licenciatura em Computação na UFPR, com foco em desenvolvimento e tecnologias educacionais.</p>
        <p>Acredito que a tecnologia é a ferramenta mais poderosa para transformar a educação.</p>
    `,
    trajetoria: `
        <h2>Minha Trajetória</h2>
        <ul>
            <li><strong>UFPR:</strong> Graduando em Licenciatura em Computação.</li>
            <li><strong>Pesquisa:</strong> Participação em projetos de extensão sobre alfabetização digital.</li>
        </ul>
    `,
    projetos: `
        <h2>Projetos</h2>
        <p>Em breve, aqui você verá meus repositórios do GitHub e aplicações web.</p>
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
