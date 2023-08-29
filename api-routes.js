// Initialize express router
const router = require('express').Router();
const contactController = require("./contactController");

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

// contact routes
router.route("/contact")
.get(contactController.index)
.post(contactController.new)

router.route("/contact/:contact_id")
.get(contactController.view)
.patch(contactController.update)
.put(contactController.update)
.delete(contactController.delete)


// Export API routes
module.exports = router;    