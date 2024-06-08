document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.profile-img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            img.classList.add('animate');

            setTimeout(()=> {
                img.classList.remove('animate');
            }, 300);
        });
    });
});