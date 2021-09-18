let days = document.getElementById('time-days')
let hours = document.getElementById('time-hours')
let minutes = document.getElementById('time-minutes')
let seconds = document.getElementById('time-seconds')

let countDownDate = document.querySelector('input[type="date"]')

function setDate() {
    let today = new Date()
    let month = ('0'+ (today.getMonth() + 1)).slice(-2)
    let day = ('0'+ today.getDate()).slice(-2)
    let dateNow = today.getFullYear() + '-' + month + '-' + day
    countDownDate.value = dateNow
    countDownDate.setAttribute("min",dateNow)
}

let timer

function  setCountdown() {
  clearInterval(timer)

  function showCountdown() {
    let today = new Date().getTime()
    let inputValue = countDownDate.value
    let inputTime = new Date(`${inputValue}T00:00:00`).getTime()

    const difference = inputTime - today
    let d = Math.floor(difference / 1000 / 60 / 60 / 24)
    let h = Math.floor(difference / 1000 / 60 / 60) % 24
    let m = Math.floor(difference/ 1000 / 60 ) % 60
    let s = Math.floor(difference / 1000 ) % 60

    days.innerHTML = d < 10 ? '0' + d : d
    hours.innerHTML = h < 10 ? '0' + h : h
    minutes.innerHTML = m < 10 ? '0' + m : m
    seconds.innerHTML = s < 10 ? '0' + s : s

    if (difference <= 0) {
      clearInterval(timer)
      days.innerHTML = 'D'
      hours.innerHTML = 'O'
      minutes.innerHTML = 'N'
      seconds.innerHTML = 'E'
    }
  }

  timer = setInterval(showCountdown, 1000)
}

window.addEventListener('load', setDate)
countDownDate.addEventListener('change',setCountdown)
