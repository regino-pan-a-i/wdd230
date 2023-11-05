// Create a key
const VISITS_KEY = 'siteVisits';
const LAST_VISITED_KEY = 'lastVisited'
const MILLISECONDS_PER_DAY = 84600000;


function getSiteVisits(){
    
    // Check to see if the key exists in local storage
    let currentValue = localStorage.getItem(VISITS_KEY);
    let siteVisits   = 1;
    
    // If the key doesn{t exists, initialize the key to 1
    if (currentValue != null){
        
        // it the Jey does exists add one to the current value
        siteVisits = parseInt(currentValue) + 1

    };

    // Save the new value for the current visits
    localStorage.setItem(VISITS_KEY, `${siteVisits}`);

    return siteVisits
}
// Update the HTML page
document.getElementById('visitCount').textContent = `${getSiteVisits()}`;


function getlastVisited(){
    let previousDate = localStorage.getItem(LAST_VISITED_KEY);
    let today = new Date;
    let message = 'Welcome! Let us know if you have any questions.'

    if (previousDate != null){
        let previous = parseInt(previousDate);
        let numOfDays = Math.floor((today.getTime() - previous)/ MILLISECONDS_PER_DAY);

        if(numOfDays == 0){
            message = 'Back so soon! Awesome!';
        }
        else if (numOfDays == 1){
            message = `You last visited 1 day ago.`;
        }
        else{
            message = `You last visited ${numOfDays} days ago.`;
        }

    }
    
    localStorage.setItem(LAST_VISITED_KEY, `${today.getTime()}`);
    return message;
}



document.getElementById('greeting').textContent = getlastVisited();