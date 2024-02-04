"use server"



const express = require('express');
const router = express.Router();

const { getCounts } = require('../../utils/utils');  // Import the getCounts function

// Define a route to get student count
router.get('/getStudentCount', async (req, res) => {
    try {
      const counts = await getCounts();
    //   console.log('Fetched student count:', studentCount);  // ← Issue here
      res.json({ studentCount: counts.studentCount });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;