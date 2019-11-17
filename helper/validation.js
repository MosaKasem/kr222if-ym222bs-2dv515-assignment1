module.exports = (req, res, next) => {
  try {
    const isNumber = parseInt(req.params.id)
    if (isNaN(isNumber)) {
      throw new Error()
    }
    next()
  } catch (error) {
    res.status(404).json({
      status: 404,
      msg: 'User could not be found'
    })
  }
}
