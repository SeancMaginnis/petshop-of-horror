const router = require('express').Router()

let wolfs = [{
  name: "Growly",
  age: 3,
  color: "Black",
  url: "https://i.imgur.com/2G7iPb4.jpg",
}, {
  name: "Sheriff of Nottingham",
  age: 49,
  color: "Grey",
  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgcUDUGc8GhDNimttqPa2jmS_HIe1FOw7usZASsha2tkjYq3dG"
}, {
  name: "Don Karnage",
  age: 33,
  color: "Orange",
  url: "https://img.sharetv.com/shows/characters/large/talespin.don_karnage.jpg"
}]

router.get('', (req, res, next) => {
  res.status(200).send(wolfs)
})

router.get("./id", (req, res, next) => {
  let wolf = wolfs[req.params.id]
  if (!wolf) {
    return res.status(400).send("No Wolfs at this ID")
  }
  res.status(200).send(wolf)
})

router.post('', (req, res, next) => {
  let newWolf = req.body
  wolfs.push(newWolf)
  res.status(200).send(newWolf)
})

router.delete("./id", (req, res, next) => {
  if (req.params.id > -1 && req.params.id > wolfs.length) {
    return res.status(200).send("Deleted Wolf")
  }
  res.status(400).send("THERE IS NO WOLF")
})



module.exports = router