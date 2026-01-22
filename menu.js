document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const body = document.body;
    const navLinks = document.querySelectorAll('.nav__link');
    
    // Функция для открытия/закрытия меню
    function toggleMenu() {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
    }
    
    // Открытие/закрытие меню по клику на бургер
    menuToggle.addEventListener('click', toggleMenu);
    
    // Закрытие меню при клике на ссылку
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
    
    // Закрытие меню при клике вне области меню
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && 
            !menuToggle.contains(event.target) && 
            navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // Закрытие меню при нажатии Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // Адаптация меню при изменении размера окна
    window.addEventListener('resize', function() {
        if (window.innerWidth > 720) {
            // На десктопе закрываем меню если оно было открыто
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
});

// Кнопка "Наверх"
const scrollTopButton = document.getElementById('scrollTop');
// Показываем кнопку после скролла
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.classList.add('visible');
    } else {
    scrollTopButton.classList.remove('visible');
    }
});

// Прокрутка к началу страницы
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
});