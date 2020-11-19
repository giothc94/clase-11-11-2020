import axios from 'axios'

const getUsers = () => new Promise((resolve, reject) => {
  axios.get("http://localhost:3000/lista-usuarios")
    .then((response)=>{
      resolve(response.data)
    })
    .catch(reject)
})

export default {
  getUsers
}