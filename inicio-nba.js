document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const ctaButtons = document.querySelectorAll('.btn');

    // Adiciona efeito de hover nos links de navegação
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.1)';
            link.style.color = 'var(--primary-color)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)';
            link.style.color = 'var(--white)';
        });
    });

    // Animação de clique nos botões
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Verifica se o botão tem um link externo
            const href = btn.getAttribute('href');
            if (href && !href.startsWith('#')) {
                // Permite a navegação para links externos
                btn.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    // Redireciona após a animação
                    window.location.href = href;
                }, 200);
            } else {
                // Previne o comportamento padrão apenas para links internos ou âncoras
                e.preventDefault();
                btn.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    btn.style.transform = 'scale(1)';
                }, 200);
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const explorarBtn = document.getElementById('explorarBtn');
    const explorarDropdown = document.getElementById('explorarDropdown');

    // Função para alternar dropdown
    const toggleDropdown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        explorarDropdown.style.display = 
            explorarDropdown.style.display === 'block' ? 'none' : 'block';
    };

    // Evento de clique no botão Explorar
    explorarBtn.addEventListener('click', toggleDropdown);

    // Fechar dropdown se clicar fora
    document.addEventListener('click', () => {
        explorarDropdown.style.display = 'none';
    });

    // Impedir que cliques dentro do dropdown o fechem
    explorarDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});