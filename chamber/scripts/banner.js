let button = document.querySelector('#bannerButton');
let banner = document.querySelector('#banner');

button.addEventListener('click', () => {
    if (banner.style.display === '' || banner.style.display === 'grid') {
        banner.style.display = 'none';
    }
});
