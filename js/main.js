document.querySelector('#flipCoin').addEventListener('click', flipCoin)

async function flipCoin(){

  const userChoice = document.querySelector("#userChoice").value;
  const res = await fetch(`/api?coin=${userChoice}`.toLowerCase())
  const data = await res.json()

  console.log(data);
  document.querySelector("#coinImg").src = ''
  document.querySelector("#coinImg").alt = ''
  document.querySelector("#flipResult").textContent = ''
  document.querySelector("#flipAnim").src = data.flipAnim
  setTimeout(() => {
    document.querySelector("#coinImg").src = data.coinImg
    document.querySelector("#flipAnim").src = ''
    document.querySelector("#coinImg").alt = data.flipResult
    document.querySelector("#flipResult").textContent = data.flipResult
  }, 2700)
}
