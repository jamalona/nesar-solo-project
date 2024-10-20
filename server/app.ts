import express, { Express } from "express";

const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const jobRoutes = require('./routes/jobRoutes');
// const adminRoutes = require('./routes/adminRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json())

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/jobPlatform')
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err: Error) => console.error(err));

// Routes
app.use('/api/jobs', jobRoutes);
// app.use('/api/admin', adminRoutes);

// Start server
const PORT =  5001; //process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app