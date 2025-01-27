const router = require('express').Router()
const { redirect } = require('express/lib/response')
const Celebrity = require('../models/Celebrity.model')


router.get("/crear", (req, res) => {
    res.render('celebrities/new-celebrity')
})

router.post("/crear", (req, res) => {
    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebridades'))
        .catch(err => console.log(err))
})

router.get("/", (req, res, next) => {
    Celebrity
        .find()
        .then(celebrities => res.render('celebrities/celebrities', { celebrities }))
        .catch(err => console.log(err))
})








module.exports = router