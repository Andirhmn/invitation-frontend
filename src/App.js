// import {useState, useEffect} from "react"
import {HashRouter, Routes, Route} from "react-router-dom"

// import {getUsers} from "./services/getUsers"
// import {getGuests} from "./services/getGuests" 

import FirstPage from "./components/FirstPage"
import SecondPage from "./components/SecondPage"
import ThirdPage from "./components/ThirdPage"
import FourPage from "./components/FourPage"
import FifthPage from "./components/FifthPage"

function App() {
// const [guests, setGuests] = useState([]);
// const [users, setUsers] = useState([]);

/*  useEffect(() => {
    async function fetchData() {
      const res = await getGuests()
	setGuests(res)
    }
    fetchData()

  }, [])
  useEffect(() => {
    async function fetchData() {
      const res = await getUsers()
	setUsers(res)
    }
    fetchData()

  }, []) */

  return (
    <>
      <HashRouter>
	<Routes>
      	  <Route path="/:id" element={<FirstPage />} />
	</Routes>

	<Routes>
      	  <Route path="/:id" element={<FourPage/>} />
	</Routes>

	<Routes>
      	  <Route path="/:id" element={<SecondPage/>} />
	</Routes>

	<Routes>  
      	  <Route path="/:id" element={<FifthPage/>} />
	</Routes>

	<Routes>
      	  <Route path="/:id" element={<ThirdPage />} />
	</Routes>
      </HashRouter>
    </>
  );
}

export default App;
