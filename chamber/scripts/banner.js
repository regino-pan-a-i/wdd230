let button = document.querySelector('#bannerButton');
let banner = document.querySelector('#banner');

button.addEventListener('click', () => {
    if (banner.style.display === '' || banner.style.display === 'grid') {
        banner.style.display = 'none';
    }
});

const currentDay =  new Date();

if (currentDay.getDay() > 0 && currentDay.getDay() < 4){
    banner.style.display = 'grid';
} else{
    banner.style.display = 'none';
}