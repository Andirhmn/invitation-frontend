import {useState} from "react"
import axios from "axios"

import {Form, Col, Row, Button} from "react-bootstrap";
import style from "./ThirdPage.module.css";
import bri from "./assets/foto/bri.png";

const baseUrl = process.env.REACT_APP_SERVER

const ThirdPage = () => {
  const [nama, setNama] = useState("");
  const [hubungan, setHubungan] = useState("");
  const [kehadiran, setKehadiran] = useState("");
  const [ucapan, setUcapan] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault()
      try {
        const route = 'api/guests'
  	const endPoint = `${baseUrl}${route}`

  	await axios.post(endPoint, {
	  nama, hubungan, kehadiran, ucapan
	})
	alert("Ucapan berhasil dikirim")
	window.location.reload()

      } catch(error) {
 	console.log(error)
      }  
  }

  return (
    <section className={style.thirdPage}>
      <div className={style.intro}>

        <div className={style.headerUcapan}>
          <h1>Ucapan Selamat</h1>
        </div>

	<div className={style.form}>
	  <Form onSubmit={handleSubmit}>
	    <Row>
	      <Col>
	    	<Form.Group>
	      	  <Form.Control 
	  	    className="mb-2" 
	  	    type="text" 
	  	    value={nama} 
	  	    onChange={(e) => setNama(e.target.value)}
	    	    placeholder="Nama" 
	  	    required
	  	  />
	    	</Form.Group>
	      </Col>
	      <Col>
	    	<Form.Group>
	      	  <Form.Control 
	  	    className="mb-2" 
	  	    type="text" 
	  	    value={hubungan}
	  	    onChange={(e) => setHubungan(e.target.value)}
	  	    placeholder="Hubungan"
	  	    required
	  	  />
	    	</Form.Group>
	      </Col>
	    </Row>

	    <Form.Group>
	      <Form.Select className="mb-2" onChange={(e) => setKehadiran(e.target.value)} >
	  	<option>Konfirmasi Kehadiran</option>
	  	<option value="Hadir">Hadir</option>
	  	<option value="Tidak_Hadir">Tidak_Hadir</option>
	      </Form.Select>
	    </Form.Group>
	    <Form.Group>
	      <Form.Control 
	  	className="mb-2" 
	  	as="textarea"
	  	rows={2} 	
	  	value={ucapan} 
	  	onChange={(e) => setUcapan(e.target.value)}
	  	placeholder="Pesan & Ucapan" 
	  	required
	      />
	    </Form.Group>
	    <Button variant="dark" className="mb-3 btn-sm" type="submit">Kirim</Button>
	  </Form>
	</div>

        <div className={style.headerAmplop}>
	  <h1>Amplop Digital</h1>
	  <img src={bri} alt="bri" />
	  <p>No. Rekening : 12345678</p>
	  <p>a.n Muhammad Adam</p>
	</div>

      </div>
    </section>
  )
}

export default ThirdPage

