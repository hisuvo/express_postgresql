import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { Pool } from "pg";
import path from "node:path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const app = express();
const port = 5000;

// parse
app.use(express.json());
// app.use(express.urlencoded()); // * use for get form data

// DB
const pool = new Pool({
  connectionString: `${process.env.CONNECTION_STRING}`,
});

const indexDB = async () => {
  await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        age INT,
        phone VARCHAR(15),
        address TEXT,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )
        `);

  await pool.query(`
        CREATE TABLE IF NOT EXISTS todos(
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(id) ON DELETE CASCADE,
        title VARCHAR(200) NOT NULL,
        description TEXT,
        complete BOOLEAN DEFAULT false,
        due_data DATE,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )
        `);
};

indexDB();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    title: "Hello Suvo. Welcome to Next level Developer Journy",
    message: "get successfuly",
  });
});

app.post("/users", async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const result = await pool.query(
      `INSERT INTO users(name, email) VALUES($1, $2) RETURNING *`,
      [name, email]
    );

    res.status(201).json({
      success: true,
      message: "Data Insert successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

app.get("/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM users`);

    res.status(200).json({
      success: true,
      message: "users retrived succssfully",
      users: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [
      req.params.id,
    ]);

    // when user not found then
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "user not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "user retrived successfully",
      user: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
});

app.listen(port, () => {
  console.log(`server listening port No. ${port}`);
});
