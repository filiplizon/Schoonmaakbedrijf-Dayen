function hidePreloader() {
    const preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
}

window.addEventListener('load', () => setTimeout(hidePreloader, 500));