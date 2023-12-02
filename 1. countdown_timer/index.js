const countdownDisplay = document.getElementById('countdown_display')

const christmas = new Date('2023-12-25 00:00:00 GMT+0200').getTime()

let days = document.getElementById('days')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')

let counter = setInterval(() => {
  //Get today's date
  const today = new Date().getTime()
  //Calculate remaining days between today and christmas
  const remainingDays = christmas - today
  //Get time units
  let day = Math.floor(remainingDays / (1000 * 60 * 60 * 24))
  let hour = Math.floor(
    (remainingDays % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  let minute = Math.floor((remainingDays % (1000 * 60 * 60)) / (1000 * 60))
  let second = Math.floor((remainingDays % (1000 * 60)) / 1000)

  days.innerHTML = day < 10 ? `0${day}` : day
  hours.innerHTML = hour < 10 ? `0${hour}` : hour
  minutes.innerHTML = minute < 10 ? `0${minute}` : minute
  seconds.innerHTML = second < 10 ? `0${second}` : second

  if (remainingDays <= 0) {
    clearInterval(counter)
    countdownDisplay.innerHTML = 'Merry Christmas!'
  }
}, 1000)
