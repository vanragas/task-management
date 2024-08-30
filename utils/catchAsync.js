//Async Wrapper fn
module.exports = (fn) => (req, res, next) => fn(req, res, next).catch(next);
