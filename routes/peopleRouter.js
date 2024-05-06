const router = require('express').Router()
const { getPeople } = require('../service/peopleService')

router.get('/', getPeople)


module.exports = router