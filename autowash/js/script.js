// ===== Mobile Menu Toggle =====
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

if (burger && nav) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        
        // Анимация бургера
        burger.classList.toggle('active');
    });

    // Закрытие меню при клике на ссылку (для мобильных)
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('active');
        });
    });
}

// ===== Form Submission =====
const form = document.getElementById('booking-form');
const successMsg = document.getElementById('form-success');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Здесь можно добавить отправку на email/telegram
        // Пока просто показываем сообщение об успехе
        
        if (successMsg) {
            successMsg.classList.add('active');
        }
        
        // Очищаем форму (опционально)
        form.reset();
        
        // Скрываем сообщение через 5 секунд
        setTimeout(() => {
            if (successMsg) {
                successMsg.classList.remove('active');
            }
        }, 5000);
    });
}

// ===== Active link highlighting (автоматическая подсветка активной страницы) =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.nav__link').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});