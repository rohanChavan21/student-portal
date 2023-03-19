const express = require('express');
const bodyParser = require('body-parser');
const oracle = require('oracledb');

const credentials = {
    user: 'portal',
    password: 'portal',
    connectionString: 'localhost:1521/xepdb1'
}

const createcourse = async (req, res) => {
    try {
        const conn = await oracle.getConnection(credentials);
        let {course_name, course_description, course_credits} = req.body;
        let query = `insert into courses (course_name, course_desc, course_credits) values (:course_name, :course_description, :course_credits)`;
        const binds = {
            course_name: course_name,
            course_description: course_description,
            course_credits: course_credits
        }
        const options = {
            autoCommit: true,
            outFormat: oracle.OBJECT
        }
        let response = await conn.execute(query, binds, options);
        console.log(response)

        conn.commit();
        conn.close();

        res.status(200).json({msg: "Course Created Successfully"})
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: "Internal Server Error"})
    }
}

const getcourses = async (req, res) => {
    try {
        const conn = await oracle.getConnection(credentials)
        let query = `select * from courses`;
        const options = {
            autoCommit: true,
            outFormat: oracle.OBJECT
        }
        let response = await conn.execute(query, {}, options)
        console.log(response)
        conn.close();

        res.status(200).json({courses: response.rows})
    } catch (error) {
        console.error(error);
    }
}

module.exports = {createcourse, getcourses, credentials}