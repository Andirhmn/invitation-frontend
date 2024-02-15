import style from "./FifthPage.module.css"

const FifthPage = () => {
  return (
    <section className={style.fifthPage}>
      <div className={style.intro}>
        <div className={style.pengantin}>
          <h1>Female</h1>
          <h1>&</h1>
          <h1>Male</h1>
        </div>
        <div className={style.kataKata}>
          <p>"Dan diantara tanda-tanda kekuasaan-nya ialah diciptakan -nya untukmu pasangan hidup dari jenismu sendiri supaya kamu merasa tentram disampingnya dan dijadikannya rasa kasih sayang diantara kamu. Sesungguhnya yang demikian menjadi tanda-tanda kebesaran-nya bagi orang-orang yang berfikir."</p>
	  <p>(Q.S. Ar-Rum:21)</p>
        </div>
      </div>
    </section>
  )	 
}

export default FifthPage


