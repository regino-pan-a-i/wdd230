const darkmode = document.querySelector('#darkMode');
const bodyel = document.querySelector('body');

darkmode.addEventListener('click', ()=>{
    if(darkmode.textContent == 'DARK'){
        document.documentElement.style.setProperty('--primary-color', '#0D0206');
        document.documentElement.style.setProperty('--secondary-color', '#333333');
        document.documentElement.style.setProperty('--accent1-color', '#0F1E22');
        document.documentElement.style.setProperty('--accent2-color', '#38060B');
        bodyel.style.backgroundColor = 'black';
        bodyel.style.color = 'white'
        darkmode.textContent = 'LIGHT'
    } else{
        document.documentElement.style.setProperty('--primary-color', '#31081F');
        document.documentElement.style.setProperty('--secondary-color', '#595959');
        document.documentElement.style.setProperty('--accent1-color', '#DCE0D9');
        document.documentElement.style.setProperty('--accent2-color', '#6B0F1A');
        bodyel.style.backgroundColor = 'white';
        bodyel.style.color = 'black'

        darkmode.textContent = 'DARK'
    }
})