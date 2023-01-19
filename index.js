let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0
homeScoreEl.textContent = homeScore
guestScoreEl.textContent = guestScore

function add1pointH() {
    homeScore += 1
    console.log(homeScore)
    homeScoreEl.textContent = homeScore
    isAhead()
}

function add2pointsH() {
    homeScore += 2
    console.log(homeScore)
    homeScoreEl.textContent = homeScore
    isAhead()
}

function add3pointsH() {
    homeScore += 3
    console.log(homeScore)
    homeScoreEl.textContent = homeScore
    isAhead()
}

function add1pointG() {
    guestScore += 1
    console.log(guestScore)
    guestScoreEl.textContent = guestScore
    isAhead()
}

function add2pointsG() {
    guestScore += 2
    console.log(guestScore)
    guestScoreEl.textContent = guestScore
    isAhead()
}

function add3pointsG() {
    guestScore += 3
    console.log(guestScore)
    guestScoreEl.textContent = guestScore
    isAhead()
}

function isAhead() {
    if(guestScore>homeScore) {
        guestScoreEl.style.color = "#8ac926"
        homeScoreEl.style.color = "#F94F6D"
    } else if(homeScore>guestScore) {
        homeScoreEl.style.color = "#8ac926"
        guestScoreEl.style.color = "#F94F6D"
    } else {
        homeScoreEl.style.color = "#F94F6D"
        guestScoreEl.style.color = "#F94F6D"
    }
}