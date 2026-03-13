const form = document.querySelector(".form")
const inputs = document.querySelectorAll("input")
const result_suu = document.querySelector(".result-suu")

form.addEventListener("submit", function (e) {

  e.preventDefault()

  const weekly_suu_spenses = []


  inputs.forEach((input) => {
    if (Number(input.value) === 0) {
      alert("ls empty")

    } else {
      weekly_suu_spenses.push(Number(input.value))
      input.value = ""

    }
  })

  const total = weekly_suu_spenses.reduce((sum, value) => sum + value, 0)

  const average = total / weekly_suu_spenses.length

  result_suu.innerHTML = `
  <h2 class="total"> som: ${total}  som</h2>
  <strong class="average">average: ${average.toFixed(2)} som</strong>
  ` 
}
)


