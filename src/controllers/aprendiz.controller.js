import { pool } from "../db.js"

export const createAprendices = async (req, res) => {
    try{
        const {name, salary} = req.body
        const [rows] = await pool.query('INSERT INTO aprendiz (name, age) VALUES (?,?)', [name, age])
        res.send({ 
            id: rows.insertId,
            name,
            salary
        })
    } catch(error){
        return res.status(500).json({
            message: 'Algo Va mal'
        })
    }
    
}

export const getAprendices = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM aprendiz')
        res.json(rows)
    } catch(error){
        return res.status(500).json({
            message: 'Algo Va mal'
        })
    }
}

export const getAprendiz = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM aprendiz WHERE id=?', [req.params.id])

        if(rows.length <= 0) 
        return res.status(400).json({
            message: 'Aprendiz no encontrado'
        })
        res.json(rows[0])
    } catch(error){
        return res.status(500).json({
            message: 'Algo Va mal'
        })
    }
}

export const deleteAprendiz = async (req, res) => {
    try{
        const [result] = await pool.query('DELETE FROM aprendiz WHERE id=?', [req.params.id])

        if(result.affectedRows <= 0 ) 
        return res.status(400).json({
            message: 'Aprendiz no encontrado'
        })
        res.sendStatus(204)
    } catch(error){
        return res.status(500).json({
            message: 'Algo Va mal'
        })
    }
}


export const updateAprendiz = async (req, res) => {
    try{
        const {id} = req.params
        const {name, salary} = req.body
        
        const [result] = await pool.query('UPDATE aprendiz SET name = IFNULL(?, name), age = IFNULL(?, age) WHERE id =?', [name, age, id])

        if(result.affectedRows === 0) 
        return res.status(404).json({
            message: 'Aprendiz no encontrado'
        })

        const [rows] = await pool.query('SELECT * FROM aprendiz WHERE id=?', [id])

        res.json(rows[0])
    } catch(error){
        return res.status(500).json({
            message: 'Algo va mal'
        })
    }
    
} 