// Create a key
const VISITS_KEY = 'siteVisits';

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
