const stock = require('./router/stock/index')
const auth = require('./router/auth/authControllers')
const equipaments = require('./router/equipments/index')
const office = require('./router/office/index');

module.exports = (app) => {
  app.use('/auth', auth)
  app.use('/stock', stock)
  app.use('/equipaments', equipaments)
  app.use('/office', office)
}
