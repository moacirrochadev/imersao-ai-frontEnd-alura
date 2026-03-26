const themeToggleButton = document.getElementById('themeToggle');
const storageKey = 'preferred-theme';

function applyTheme(theme) {
    const isLight = theme === 'light';
    document.body.classList.toggle('light-mode', isLight);
    themeToggleButton.textContent = isLight ? '🌙' : '☀️';
    themeToggleButton.setAttribute(
        'aria-label',
        isLight ? 'Ativar modo escuro' : 'Ativar modo claro'
    );
}

const savedTheme = localStorage.getItem(storageKey);
const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
const initialTheme = savedTheme || (systemPrefersLight ? 'light' : 'dark');

applyTheme(initialTheme);

themeToggleButton.addEventListener('click', () => {
    const nextTheme = document.body.classList.contains('light-mode') ? 'dark' : 'light';
    applyTheme(nextTheme);
    localStorage.setItem(storageKey, nextTheme);
});
