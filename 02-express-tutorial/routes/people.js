const express = require('express')
const router = express.Router()
let { people } = require('../data')
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require('../controllers/people')

//replace app. by router. in the original functions
//we now need to delete url /api/people because  it will given as a base route in app.js
//we also split the functionality defining the functions in another file (that is what we call a controller)
router.get('/', getPeople)

router.post('/', createPerson)


router.post('/postman', createPersonPostman)

router.put('/:id', updatePerson)

router.delete('/:id', deletePerson)

//Alternative

//router.route('/').get(getPeople).post(createPerson) we can add all the methods that apply to the same route at once


module.exports = router
