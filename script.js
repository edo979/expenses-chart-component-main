const chartBarEls = document.querySelectorAll('.chart_bar')

showData()

async function showData() {
  const data = await getData(),
    //  for el max height
    maxAmount = getMaxAmountValue(data),
    currentDay = new Date().getDay()

  data.forEach((day, i) => {
    // a bar in the chart
    const amountEl = chartBarEls[i].firstElementChild,
      // amount value from data object
      amount = day.amount,
      amountPercentage = (amount / maxAmount) * 100

    // style a bar
    amountEl.style.height = `${amountPercentage}%`
    amountEl.style.setProperty('--content', `'$${amount}'`)

    // change color of current day
    if (i + 1 == currentDay) {
      amountEl.classList.add('accent')
    }
  })
}

async function getData() {
  const res = await fetch('data.json')
  return await res.json()
}

function getMaxAmountValue(data) {
  return data.reduce((prev, curr) => (prev.amount > curr.amount ? prev : curr))
    .amount
}
