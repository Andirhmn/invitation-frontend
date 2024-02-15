import style from "./FourPage.module.css"

const FourPage = () => {
  return (
    <section className={style.fourPage}>
      <div className={style.intro} id="fourPage">
        <div className={style.first}>
          <p>Maha suci Allah yang telah menciptakan makhluknya berpasang-pasangan. Ya, Allah izikanlah kami menikahkan putra putri kami:</p>
        </div>
        <div className={style.pengantin}>
          <h1>Female</h1>
	  <p>Putri pertama dari Bapak dia & Ibu dia</p>
        </div>
        <div className={style.tengah}>
	  <p>------------------ & ------------------</p>
        </div>
        <div className={style.pengantin}>
          <h1>Male</h1>
	  <p>Putra pertama dari Bapak dia & Ibu dia</p>
        </div>
        <div className={style.kataKata}>
          <p>Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/saudara/i untuk menghadiri pernikahan kami</p>
        </div>
      </div>
    </section>
  )	 
}

export default FourPage


