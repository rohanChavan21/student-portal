const express = require('express')
const bodyParser = require('body-parser')
const jsonwebtoken = require('jsonwebtoken')
const oracle = require('oracledb')

const JWT_SECRET = 'yGAf67tFYG*Tfd87T^gfe78rt4ugbTF*7tew8r&Y^*7r';

const credentials = {
    user: 'portal',
    password: 'portal',
    connectionString: 'localhost:1521/xepdb1'
}

const createuser = async(req, res) => {
    try {
        const conn = await oracle.getConnection(credentials);
        let {name, email, password, role} = req.body
        let query = ``;
        if(role === 'student'){
            query = `insert into student_users (name, email, password) values (:name, :email, :password)`;
            const binds = {
                name: name,
                email: email,
                password: password
            };
            const options = {
                autoCommit: true,
                outFormat: oracle.OBJECT
            }
            let response = await conn.execute(query, binds, options)
            console.log(response);
            conn.commit()
            const user = {
                name: name,
                email: email,
                password: password,
                login: true
            }
            conn.close()
            const token = jsonwebtoken.sign(user, JWT_SECRET, {expiresIn: '1d'})
            res.status(200).json({
                token: token,
                msg: "User Created Successfully"
            })
        } else if(role === 'faculty'){
            query = `insert into faculty_users (name, email, password) values (${name}, ${email}, ${password})`;
            const binds = {
                name: name,
                email: email,
                password: password
            };
            const options = {
                autoCommit: true,
                outFormat: oracle.OBJECT
            }
            let response = await conn.execute(query, binds, options)
            console.log(response)
            conn.commit()
            const user = {
                name: name,
                email: email,
                password: password,
                login: true
            }
            conn.close()
            const token = jsonwebtoken.sign(user, JWT_SECRET, {expiresIn: '1d'})
            res.status(200).json({
                token: token,
                msg: "User Created Successfully"
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: "Internal Server Error"})
    }
}

// const verifyuser = async(req, res) => {
//     try {
//         const conn = await oracle.getConnection(credentials)
//         let {email, password, role} = req.body
//         let query = `select * from ${role}_users where email = :email and password = :password`;
//         // const user = {
//         //     email: email,
//         //     password: password,
//         //     login: true
//         // }
//         const binds = {
//             email: email,
//             password: password
//         }
//         const options = {
//             fetchInfo: {
//                 "PASSWORD": {
//                     type: oracle.STRING
//                 }
//             },
//             autoCommit: true,
//             outFormat: oracle.OBJECT
//         }
//         let response = await conn.execute(query, binds, options)
//         console.log(response)
//         await conn.close();

//         if(response.rows.length === 1){
//             const user = {
//             id: response.rows[0][0],
//             name: response.rows[0][1],
//             email: response.rows[0][2],
//             role: role
//         }
//         const token = jsonwebtoken.sign(user, JWT_SECRET, {expiresIn: '1d'})
//         res.status(200).json({
//             token: token,
//             msg: "User Logged In Successfully"
//         })
//         } else {
//             res.status(401).json({error: "Invalid Credentials"})
//         }

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({msg: "Internal Server Error"})
//     }
// }

const verifyuser = async (req, res) => {
    try {
        const conn = await oracle.getConnection(credentials);
        let {email, password} = req.body;
        let query = `select * from users where email = :email and password = :password`;
        const binds = {
            email: email,
            password: password
        }
        const options = {
            fetchInfo: {
                "PASSWORD": {
                    type: oracle.STRING
                }
            },
            autoCommit: true,
            outFormat: oracle.OBJECT
        }
        let response = await conn.execute(query, binds, options);
        console.log(response)
        await conn.close()
        if(response.rows.length === 1){
            const user = {
                email: response.rows[0].EMAIL,
                user_role: response.rows[0].USER_ROLE
            }
            const token = jsonwebtoken.sign({
                user: user.email,
                role: user.user_role
            }, JWT_SECRET, {expiresIn: '1d'})
            res.status(200).json({
                user: user,
                msg: "User Logged In successfully"
            })
        } else {
            res.status(401).json({msg: "Invalid Credentials"})
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({msg: "Internal Server Error"})
    }
}

module.exports = {createuser, verifyuser}