const router = require('express').Router()

let dogs = [{
  name: 'Aroara',
  age: 5,
  color: 'brown',
  breed: 'Mut'
}, {
  name: 'Max',
  age: 10,
  color: 'Brindel',
  breed: 'Boxer'
}, {
  name: 'Jax',
  age: 45,
  color: 'Pink',
  breed: 'Dog-Man'
}]



router.get('', (req, res, next) => {
  res.status(200).send(dogs)
})

router.get('/:id', (req, res, next) => {
  let dog = dogs[req.params.id]
  if (!dog) {
    return res.status(400).send('<h1>No Dog at that ID</h1>')
  }
  res.status(200).send(dog)
})


router.post('', (req, res, next) => {
  let newDog = req.body
  dogs.push(newDog)
  res.status(200).send(newDog)
})

router.delete('/:id', (req, res, next) => {
  if (req.params.id > -1 && req.params.id < dogs.length) {
    return res.status(200).send('Deleted Dog')
  }
  res.status(400).send('THERE IS NO DOG')
})


module.exports = router