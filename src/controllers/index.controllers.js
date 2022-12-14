import { pool } from '../db.js'

export const index = (req, res) => res.json({ message: "Welcome to my NodeJS MySQL REST API" });

export const ping = async (req, res) => {
    const [result] = await pool.query('SELECT "PONG" AS result')
    res.json(result[0])
}
