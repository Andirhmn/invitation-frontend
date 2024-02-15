import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"

import {Button} from "react-bootstrap"

import style from "./FirstPage.module.css"
import audio from "./assets/audio/Westlife.mp3"

const baseUrl = process.env.REACT_APP_SERVER

const FirstPage = () => {
  const [nama, setNama] = useState([])
  const {id} = useParams()

  useEffect(() => {
    getUsersById()
  })

  const getUsersById = async () => {
    const route = 'api/users'
    const endPoint = `${baseUrl}${route}/${id}`

    const res = await axios.get(endPoint);
    setNama(res.data.data.nama)
  }

  const audio1 = document.getElementById("myAudio")
  
  const handleAudio = () => {
    audio1.play()
  }
    
  return (
    <section className={style.firstPage}>
      <div className={style.intro}>
	  <audio id="myAudio" autoplay="autoplay"><source src={audio} type="audio/mpeg" /></audio>
       	  <span className={style.salam}>Assalamualaikum warahmatullahi wabarakatuh</span>
          <div className={style.desc}>
            <p>The Wedding Of</p>
            <h1>Female & Male</h1>
            <Button onClick={handleAudio} href="#fourPage">Open Invitation</Button>
            <p className={style.tanggal}>32 January 2024</p>
          </div>
          <div className={style.dear}>
            <p>Dear</p>
            <p>Bapak/Ibu/Saudara/i</p>
	    <h2>{nama}</h2>
            <p>Manchester</p>
          </div>
      </div>
    </section>
  )
} 

export default FirstPage
