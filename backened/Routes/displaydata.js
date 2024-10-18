const express = require('express');
const router = express.Router();

router.post('/fooddata', (req, res) => {
    try {
        if (!global.food_items || global.food_items.length === 0) {
            return res.status(500).send("Data not available yet");
        }
        console.log("Sending food items:", global.food_items);
        res.send([global.food_items]); // Return food items
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
