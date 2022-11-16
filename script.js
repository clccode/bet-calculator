 // Take control of the stake, odds, and payout elements in the DOM
const stakeEl = document.getElementById("bet-amt")
const oddsEl = document.getElementById("odds-amt")
const payoutEl = document.getElementById("payout")

// Add event listener to clear button to clear the inputs
document.getElementById('clear-btn').addEventListener('click', () => {
    stakeEl.value = ''
    oddsEl.value = ''
    payoutEl.textContent = ''
})

// Add event listener for the payout button w/function to calculate bet
document.getElementById('payout-btn').addEventListener('click', () => {

    // get the values of the inputs
    const stake = parseFloat(stakeEl.value)
    const odds = parseFloat(oddsEl.value)

    if (odds > 0) {
        const oddsMultiplier = odds/100
        let prob = Number(100/(odds + 100).toFixed(2))
        prob = Number(prob * 100).toFixed(2)
        const profit = stake * oddsMultiplier
        const total = Number(stake + profit).toFixed(2)
        document.getElementById('payout').textContent = 
         `The implied probability of winning the bet is ${prob}% and the potential payout is $${total}💵` 
    }
    else {
        const oddsMultiplier = Math.abs(odds/100)
        let prob = Math.abs(odds)/(Math.abs(odds) + 100)
        prob = Number(prob * 100).toFixed(2)
        const profit = stake * oddsMultiplier
        const total = Number(stake + profit).toFixed(2)
        document.getElementById('payout').textContent =
         `The implied probability of winning the bet is ${prob}% and the potential payout is $${total}💵`
    }
})
        


