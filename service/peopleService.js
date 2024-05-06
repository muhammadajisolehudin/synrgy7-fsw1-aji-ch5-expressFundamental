const data = require('../people')

const getPeople = (req, res) => {
    res.json({ message: 'Succes', data })
}

module.exports = { getPeople }