const { Router } = require('express');
const Fibonaccy = require('../models/Fibonaccy');
const { getIP } = require('../helpers/helper');

const router = Router();


// '/api/history/get'
router.get('/get', async (req, res) => {
  try {
    const ip = getIP(req);
    const list = await Fibonaccy.findAll({
      where: { IP: ip },
    });
    res.json(list);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});


module.exports = router;
