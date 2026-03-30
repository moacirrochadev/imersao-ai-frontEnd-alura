document.addEventListener('DOMContentLoaded', () => {
    const profileLinks = document.querySelectorAll('.profile a[href]');

    profileLinks.forEach((link) => {
        link.addEventListener('click', () => {
            const article = link.closest('.profile');
            const nameElement = article?.querySelector('figcaption');
            const imageElement = article?.querySelector('img');

            if (!nameElement || !imageElement) {
                return;
            }

            const nome = nameElement.textContent.trim();
            const imagem = imageElement.src;

            // Chaves usadas pela pagina de catalogo
            localStorage.setItem('perfilAtivoNome', nome);
            localStorage.setItem('perfilAtivoImagem', imagem);

            // Compatibilidade com outras leituras do projeto
            localStorage.setItem(
                'activeProfile',
                JSON.stringify({
                    name: nome,
                    image: imagem,
                    alt: imageElement.alt
                })
            );
        });
    });
});
