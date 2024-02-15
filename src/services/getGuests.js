import axios from "axios";

const baseUrl = process.env.REACT_APP_SERVER

export const getGuests = async () => {
  const route = 'api/guests'
  const endPoint = `${baseUrl}${route}`

  const res = await axios.get(endPoint)

  return res.data.data;
}
