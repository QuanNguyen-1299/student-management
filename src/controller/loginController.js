import bcrypt from "bcrypt";
import pool from "../configs/connectDB"

let getLoginPage = (req, res) => {
    return res.render('login.ejs')
}

let registerPage = (req, res) => {
    return res.render('register.ejs')
}
let registeredUsers = async(req, res) => {
    const saltRounds = 10;
    let username = req.body.username;
    let password = req.body.password;
    // const passHash = bcrypt.hashSync(password, saltRounds);
    await pool.execute('INSERT INTO `admin-login` (username, password) VALUES (?,?)',
     [username, password]); 
    return res.redirect('/')
}

let loginHomePage = async (req, res) => {
    const saltRounds = 10;
    let username = req.body.username;
    let password = req.body.password;
    const [rows] = await pool.execute('SELECT * FROM `admin-login` WHERE `username` = ?',
        [username]);   
    let user = rows[0]; 
    let pass_fromdb = user.password;
    const hash = bcrypt.hashSync(pass_fromdb, saltRounds);
    let match = bcrypt.compareSync(password, hash);
    if (match) {
        return res.redirect('/home')
    } else {
        res.redirect('/');
    }
}

export default {
    loginHomePage,
    getLoginPage,
    registerPage,
    registeredUsers
}