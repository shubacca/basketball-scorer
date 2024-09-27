let homeCounter = document.getElementById('home')
let guestCounter = document.getElementById('guest')
let resetCounter = document.getElementById('newGame')
let homeCount = 0
let guestCount = 0

function increment(incrementNum, type) {
    if (type == 'home') {
        homeCount += incrementNum
        homeCounter.textContent = homeCount    
    }
    else {
        guestCount += incrementNum
        guestCounter.textContent = guestCount   
    }
    updateLeadingTeam()
}

function updateLeadingTeam() {
    homeCounter.classList.remove('leading', 'losing');
    guestCounter.classList.remove('leading', 'losing');
    
    if (homeCount > guestCount){
        homeCounter.classList.add('leading')
        guestCounter.classList.add('losing')
    }
    else if (guestCount > homeCount) {
        homeCounter.classList.add('losing')
        guestCounter.classList.add('leading')
    }
    else {
        homeCounter.classList.remove('leading', 'losing');
        guestCounter.classList.remove('leading', 'losing');
    }
}

function resetGame() {
    homeCount = 0
    guestCount = 0
    homeCounter.textContent = 0
    guestCounter.textContent = 0
}