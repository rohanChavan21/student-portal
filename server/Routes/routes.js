const express = require('express')
const { createuser, verifyuser } = require('../Controllers/auth')
const { createcourse, getcourses } = require('../Controllers/course')
const { createQuestionPaper, getQuestionPapers, createQuestion, getQuestions } = require('../Controllers/questions')
const router = express.Router()

router.route('/createuser').post(createuser)
router.route('/verifyuser').post(verifyuser)
router.route('/createcourse').post(createcourse)
router.route('/getcourses').get(getcourses)
router.route('/createquestionpaper').post(createQuestionPaper)
router.route('/getquestionpapers').get(getQuestionPapers)
router.route('/createquestion').post(createQuestion)
router.route('/getquestions').post(getQuestions)

module.exports = router