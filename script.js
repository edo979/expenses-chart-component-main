const chartBarEls = document.querySelectorAll('.chart_bar')

showData()

async function showData() {
  const data = await getData()
  const maxAmount = data.reduce((prev, curr) =>
    prev.amount > curr.amount ? prev : curr
  ).amount

  data.forEach((day, i) => {
    const { day: dayName, amount } = day,
      amountPercentage = (amount / maxAmount) * 100

    chartBarEls[i].firstElementChild.style.height = `${amountPercentage}%`
  })
}

async function getData() {
  const res = await fetch('data.json')
  return await res.json()
}
