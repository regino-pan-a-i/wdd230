const darkmode = document.querySelector('#darkMode');
const bodyel = document.querySelector('body');

darkmode.addEventListener('click', ()=>{
    if(darkmode.textContent == 'DARK'){
        document.documentElement.style.setProperty('--primary-color', '#962705');
        document.documentElement.style.setProperty('--secondary-color', '#333333');
        document.documentElement.style.setProperty('--accent1-color', '#0F1E22');
        document.documentElement.style.setProperty('--accent2-color', '#38060B');
        document.documentElement.style.setProperty('--nav-hover-background-color', '#962705');
        document.documentElement.style.setProperty('--headline-color-on-white', 'white');
        
        bodyel.style.backgroundColor = '#04395E';
        bodyel.style.color = 'white'
        darkmode.textContent = 'LIGHT'
    } else{
        document.documentElement.style.setProperty('--primary-color', '#601700');
        document.documentElement.style.setProperty('--secondary-color', '#595959');
        document.documentElement.style.setProperty('--accent1-color', '#DCE0D9');
        document.documentElement.style.setProperty('--accent2-color', '#601600b2');
        document.documentElement.style.setProperty('--nav-hover-link-color', 'white');
        document.documentElement.style.setProperty('--nav-hover-background-color', '#601700');
        document.documentElement.style.setProperty('--headline-color-on-white', '#601700');
        bodyel.style.backgroundColor = 'white';
        bodyel.style.color = 'black'
        
        darkmode.textContent = 'DARK'
    }
})