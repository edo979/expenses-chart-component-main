const chartBarEls = document.querySelectorAll('.chart_bar')

showData()

async function showData() {
  const data = await getData(),
    maxAmount = data.reduce((prev, curr) =>
      prev.amount > curr.amount ? prev : curr
    ).amount,
    currentDay = new Date().getDay()

  data.forEach((day, i) => {
    const amountEl = chartBarEls[i].firstElementChild,
      { amount } = day,
      amountPercentage = (amount / maxAmount) * 100

    amountEl.style.height = `${amountPercentage}%`

    if (i + 1 == currentDay) {
      amountEl.classList.add('accent')
    }
  })
}

async function getData() {
  const res = await fetch('data.json')
  return await res.json()
}
