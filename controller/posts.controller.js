const pool = require("../database/index")
const postsController = {

    getAll: async (req,res) => {
        try {
            const [rows, fields] = await pool.query("select * from users")
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
        }
    },
    getById: async (req, res) => {
        try {
            const {id} = req.params
            const [rows, fields] = await pool.query("select * from users where id = ?", [id])
            res.json({
                data:rows
            })
        } catch (error) {
            console.log(error)
        }
    },
    create: async (req, res) => {
        try {
            const {email, username, password} = req.body 
            const sql = "insert into users (email, username, password) values (?,?,?)"
            const  [rows,fields] = await pool.query(sql, [email, username, password])
            res.json({
                status: "user added"
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
            
        }
    },
    update: async (req, res) => {
        try {
            const {email, username, password} = req.body 
            const {id} = req.params
            const sql = "update users set email = ?, username = ? , password = ?  where id = ?"
            const  [rows,fields] = await pool.query(sql, [email, username, password, id])
            res.json({
                status: "user updated"
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
            
        }
    },
    delete: async (req, res) => {
        try {
            const {id} = req.params
            const sql = "delete from users where id = ?"
            const  [rows,fields] = await pool.query(sql, [id])
            res.json({
                status: "user deleted"
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
            
        }
    }


    

}

module.exports = postsController