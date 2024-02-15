import Countdown from "react-countdown"

import style from "./SecondPage.module.css"

const SecondPage = () => {
  const renderer= ({hours, minutes, seconds, days, completed}) => {
    if(completed) {
      return <p>Moment Time</p>
    } else {
      return <p>{days} Days {hours} Hours {minutes} Minutes {seconds} Seconds</p>
    }
  }

  function timeLeft() {
    const dayMoment = new Date("January 31, 2024 18:00:00").getTime()
    const nowDate = new Date().getTime()
    const remainingTime = dayMoment - nowDate

    return remainingTime
  }

  return (
    <section className={style.secondPage}>
      <div className={style.intro}>
        <div className={style.akad}>
          <h1>Akad Nikah</h1>
          <p>Minggu, 32 January 2024</p>
          <p>Pukul 08:00 WITA</p>
          <p>Jl. Soekarno Hatta, Jakarta Barat</p>
        </div>
        <div className={style.resepsi}>
          <h1>Resepsi</h1>
          <p>Minggu, 32 January 2024</p>
          <p>Pukul 10:00 WITA</p>
          <p>Jl. Soekarno Hatta, Jakarta Barat</p>
        </div>
        <div className={style.countDown}>
        <Countdown date={Date.now() + timeLeft()} renderer={renderer} />
        </div>
      </div>
    </section>
  )	 
}

export default SecondPage


