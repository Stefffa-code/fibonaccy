module.exports.getIP = function (request) {
  let ip = request.headers['x-forwarded-for']
        || request.connection.remoteAddress
        || request.socket.remoteAddress
        || request.connection.socket.remoteAddress;
  ip = ip.split(',')[0];
  ip = ip.split(':').slice(-1); // in case the ip returned in a format: "::ffff:146.xxx.xxx.xxx"
  ip = ip.toString();
  return ip;
};
module.exports.getFibonaccy = function (n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
};
