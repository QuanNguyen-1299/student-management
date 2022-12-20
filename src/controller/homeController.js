import pool from "../configs/connectDB"

let getHomePage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `data-student`');
    return res.render('home.ejs', { dataStudent: rows })
}

let deleteStudent = async (req, res) => {
    let studentId = req.body.studentId;
    await pool.execute('DELETE FROM `data-student` WHERE id = ?', [studentId]);
    return res.redirect('/home')
}

let createNewStudent = async (req, res) => {
    let { studentName, studentGender, studentBirth, studentAddress, email } = req.body;
    await pool.execute('INSERT INTO `data-student`(studentName, studentGender, studentBirthday, studentAddress, studentEmail) VALUES (?,?,?,?,?)',
        [studentName, studentGender, studentBirth, studentAddress, email]);
    return res.redirect('/home')
}

let editStudent = async (req, res) => {
    let id = req.params.id;
    let [data] = await pool.execute('SELECT * FROM `data-student` WHERE id = ?', [id]);
    return res.render("update.ejs", { dataStudent: data[0] })
}

let updateStudent = async (req, res) => {
    let { studentName, studentGender, studentBirth, studentAddress, studentEmail, studentId } = req.body;
    console.log(studentName,studentGender, studentBirth, studentAddress, studentEmail, studentId)
    await pool.execute('UPDATE `data-student` SET studentName = ?, studentGender = ?, studentBirthday = ?, studentAddress = ?, studentEmail = ? WHERE id = ?',
        [studentName, studentGender, studentBirth, studentAddress, studentEmail, studentId]);
    return res.redirect('/home')
}

let searchStudent = async (req, res) => {
    let nameSearch = req.query.nameStudent;
    const [allData] = await pool.execute('SELECT * FROM `data-student`');
    let result = allData.filter( (student) => {
		return student.studentName.toLowerCase().indexOf(nameSearch.toLowerCase()) !== -1
	})
    return res.render('home.ejs', {dataStudent: result})
}

export default {
    getHomePage,
    deleteStudent,
    createNewStudent,
    updateStudent,
    editStudent,
    searchStudent
}
