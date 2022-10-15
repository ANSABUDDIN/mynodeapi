import express from 'express';
import con from './config.js'
import Jwt from 'jsonwebtoken';
import cors from 'cors'
import pkg from 'bcryptjs';



const app = express()
const { hashSync, genSaltSync, compareSync } = pkg;
app.use(express.json());
app.use(cors());





// get all users

app.get('/', (req, resp) => {
    con.query("select * from users", (err, result) => {
        if (err) {
            resp.send("error")
        }
        else {
            resp.send(result)
        }
    })
});

// Register api

app.post('/register', (req, resp) => {

    const data = {
        "username": req.body.username,
        "email": req.body.email,
        "password": req.body.password,
    }
    const salt = genSaltSync(10);
    data.password = hashSync(data.password, salt);
    con.query(`select * from users where email = '${data.email}'`, (error, result, field) => {
        if (result.length == 0) {
            con.query('INSERT INTO users SET ?', data, (error, result, field) => {
                if (error) {
                    console.log(error)
                } else {
                    resp.status(200).send({
                        msg: "Register Successfull"
                    });
                }
            });
        } else {
            resp.status(500).send({
                msg: "Email Already Exist"
            });

        }
    })


});


// login api 

app.post('/login', (req, resp) => {
    const data = {
        "email": req.body.email,
        "password": req.body.password,
    }
    con.query(`select * from users where email = '${req.body.email}'`, (error, result, field) => {
        if (result.length == 0) {
            resp.status(500).send({
                msg: "Email Incorrect"
            });

        } else {
            const token = Jwt.sign(data.email, "thisisupcomingnftsecreatekeyitshouldlong");
            var passwordmatch = compareSync(req.body.password, result[0].password);
            // console.log(passwordmatch)
            if (passwordmatch == true) {
                resp.status(200).send({
                    msg: "Login Successfull",
                    token: token
                });
            }
            else {
                resp.status(500).send({
                    msg: "Password Incorrect"
                });
            }
        }
    });
});


// forget api otp code send


app.post('/forget', (req, resp) => {
    const data = {
        "email": req.body.email

    }
    con.query(`select * from users where email = '${req.body.email}'`, (error, result, field) => {
        if (result.length == 0) {
            resp.status(500).send({
                msg: "Email Incorrect"
            });
        } else {
            const otp = Math.floor(1000 + Math.random() * 9000);
            con.query(`UPDATE users set otp = '${otp}' WHERE email = '${req.body.email}'`, (error, result, field) => {
                resp.status(200).send({
                    msg: "Otp Generate Sucessfully"

                });
            })
        }
    });
});






app.listen(5000, () => {
    console.log("your Port is 5000")
})