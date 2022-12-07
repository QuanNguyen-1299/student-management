import pool from "../configs/connectDB"

let getHomePage = async (req, res) => {
    return res.render('home.ejs')
}

export default {
    getHomePage
}