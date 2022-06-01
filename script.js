const chartBarEls = document.querySelectorAll('.chart_bar')

//console.log(chartBarEls)
// chartBarEls.forEach((barEl) => {
//   console.log(barEl)
// })

showData()

async function getData() {
  const res = await fetch('data.json')
  return await res.json()
}

async function showData() {
  const data = await getData()
  const maxAmount = data.reduce((prev, curr) =>
    prev.amount > curr.amount ? prev : curr
  ).amount

  console.log(maxAmount)

  data.forEach((day, i) => {
    const { day: dayName, amount } = day,
      amountPercentage = (100 * amount) / maxAmount

    chartBarEls[i].firstElementChild.style.height = `${amountPercentage}%`
  })
}
