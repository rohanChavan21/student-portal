const express = require('express')
const bodyParser = require('body-parser')
const oracle = require('oracledb')
const { credentials } = require('./course')
const { outFormat } = require('oracledb')

const createQuestionPaper = async(req, res) => {
    try {
        const conn = await oracle.getConnection(credentials)
        let {name, course_id, duration} = req.body;
        let query = `insert into question_papers (name, course_id, duration_minutes) values (:name, :course_id, :duration)`;
        const binds = {
            name: name,
            course_id: course_id,
            duration: duration
        }
        const option = {
            autoCommit: true,
            outFormat: oracle.OBJECT
        }
        let response = await conn.execute(query, binds, option)
        console.log(response)
        conn.commit()
        conn.close()

        res.status(200).json({msg: "Question Paper Created Successfully"})
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: "Internal Server Error"})
    }
}

const getQuestionPapers = async (req, res) => {
    try {
        const conn = await oracle.getConnection(credentials)
        let query = `select id, name, course_id, duration_minutes from question_papers`
        const options = {
            autoCommit: true,
            outFormat: oracle.OBJECT
        }
        let response = await conn.execute(query, {}, options)
        console.log(response)
        conn.close()

        res.status(200).json({question_papers: response.rows})

    } catch (error) {
        console.error(error);
        res.status(500).json({msg: "Internal Server Error"})
    }
}

const createQuestion = async (req, res) => {
    try {
        const conn = await oracle.getConnection(credentials)
        let {question, option_a, option_b, option_c, option_d, answer, question_paper_id} = req.body
        let query = `insert into mcq_questions (question, option_a, option_b, option_c, option_d, answer, question_paper_id) 
        values (:question, :option_a, :option_b, :option_c, :option_d, :answer, :question_paper_id);`
        const binds = {
            question: question,
            option_a: option_a,
            option_b: option_b,
            option_c: option_c,
            option_d: option_d,
            answer: answer,
            question_paper_id: question_paper_id
        }
        const options = {
            autoCommit: true,
            outFormat: oracle.OBJECT
        } 
        const response = await conn.execute(query, binds, options)
        console.log(response)
        conn.commit()
        conn.close()

        res.status(200).json({msg: "Question Created"})
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: "Internal Server Error"})
    }
}

const getQuestions = async (req, res) => {
    try {
        const conn = await oracle.getConnection(credentials)
        let {id, question, option_a, option_b, option_c, option_d, answer, question_paper_id} = req.body;
        let query = `select id, question, option_a, option_b, option_c, option_d from mcq_questions where question_paper_id = ${question_paper_id}`;
        const options = {
            autoCommit:true,
            outFormat: oracle.OBJECT
        }
        let response = await conn.execute(query, {}, options)
        let questions = response.rows;
        query = `select id, answer from mcq_questions where question_paper_id = ${question_paper_id}`;
        response = await conn.execute(query, {}, options)
        let answers = response.rows
        conn.commit()
        conn.close()

        res.status(200).json({
            questions: questions,
            answers: answers
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: "Internal Server Error"})
    }
}



module.exports = {createQuestionPaper, getQuestionPapers, createQuestion, getQuestions}