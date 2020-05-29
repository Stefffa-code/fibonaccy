const { Router } = require('express');
const { check } = require('express-validator');
const Fibonaccy = require('../models/Fibonaccy');
const { getIP, getFibonaccy } = require('../helpers/helper');

const router = Router();


// '/api/fibonacci/send'
router.post(
  '/send',
  [
    check('order', 'Некорректное число').custom((value) => value > 0),
  ],
  async (req, res) => {
    try {
      const { order } = req.body;
      const fibonaccy = getFibonaccy(order);
      const IP = getIP(req);
      const fib = await Fibonaccy.create({
        order, IP, fibonaccy,
      });
      await fib.save();
      res.status(201).json({ message: 'Запрос создан', fibObj: fib });
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так send' });
    }
  },
);


module.exports = router;
