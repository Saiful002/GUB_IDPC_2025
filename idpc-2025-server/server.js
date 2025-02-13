const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER ,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ MySQL Connected...");
  }
});



// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // App password (not your email password)
  },
});

// Registration API Route
app.post("/register", (req, res) => {
    console.log("📥 Received Data:", req.body); // ✅ Log incoming data
    
    const { name, id, email, contact, department, batch, tshirtSize, transactionId } = req.body;
  
    // Debug: Check if any field is undefined or missing
    // if (!name || !id || !email || !contact || !department || !batch || !tshirtSize || !transactionId) {
    //   console.log("❌ Missing Fields!", req.body);
    //   return res.status(400).json({ message: "All fields are required!" });
    // }
  
    const sql = `INSERT INTO registrations (name, id, email, contact, department, batch, tshirtSize, transactionId) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  
    db.query(sql, [name, id, email, contact, department, batch, tshirtSize, transactionId], (err, result) => {
      if (err) {
        console.error("❌ Database Insert Error:", err);
        return res.status(500).json({ message: "Database error. Please try again." });
      }

// Send Confirmation Email
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: email,
  subject: "🎉 Registration Successful - GUB IDPC 2025",
  html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
      <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #2c3e50; text-align: center;">🎉 Welcome to GUB IDPC 2025 - Registration Confirmed! </h2>
        <p style="font-size: 16px; color: #555;">Dear <strong>${name}</strong>,</p>
        <p style="font-size: 16px; color: #555;">We are thrilled to welcome you to <strong>GUB IDPC 2025!</strong> 🚀 Your registration has been successfully completed, and we truly appreciate your enthusiasm for being part of this incredible event.</p>
        
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <p style="margin: 5px 0;"><strong>📌 University ID:</strong> ${id}</p>
          <p style="margin: 5px 0;"><strong>📌 Transaction ID:</strong> ${transactionId}</p>
        </div>

        <p style="font-size: 16px; color: #555;">Your participation means a lot to us, and we can’t wait to see you in action. Get ready for an exciting experience filled with learning, innovation, and networking with like-minded individuals! </p>

        <p style="font-size: 16px; color: #555;">If you have any questions or need further assistance, feel free to reach out. Stay tuned for more updates as we get closer to the event.</p>

        <p style="font-size: 16px; text-align: center; font-weight: bold;">✨ Thank you for being a part of this journey! See you at GUB IDPC 2025! ✨</p>

        <p style="text-align: center; font-size: 14px; color: #888;">Best Regards,</p>
        <p style="text-align: center; font-size: 14px; font-weight: bold;">GUB IDPC 2025 Team</p>
        <p style="text-align: center; font-size: 14px; color: #888;">📩 beginnercpgub@gmail.com | 📞 018*******</p>
      </div>
    </div>
  `,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("❌ Email Sending Error:", error);
  } else {
    console.log("✅ Confirmation Email Sent:", info.response);
  }
});

res.status(200).json({ message: "✅ Registration successful! Confirmation email sent." });




    });



  });
  



app.get("/registrations", (req, res) => {
    const sql = "SELECT * FROM registrations";
  
    db.query(sql, (err, results) => {
      if (err) {
        console.error("❌ Database Fetch Error:", err);
        return res.status(500).json({ message: "Database error. Please try again." });
      }
      res.status(200).json(results);
    });
  });
  

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
