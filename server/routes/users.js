const router = require("express").Router()
const axios = require("axios")

router.get("/posts", (req, res, next) => {
  axios.get("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => res.status(200).send(response.data))

})
router.get("/users", (req, res, next) =>{
  axios.get("https://jsonplaceholder.typicode.com/users/1")
  .then(response => res.status(200).send(response.data))
})
router.get("/photos", (req, res, next)=>{
  axios.get("https://jsonplaceholder.typicode.com/photos/1")
  .then(response => res.status(200).send(response.data))
})
module.exports = router