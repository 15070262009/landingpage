const path = require('path');
module.exports = {
  now: {
    token: 'your token',
    url: 'https://landingpage-topaz.vercel.app/',
    templateDir: path.join(__dirname, 'template'),
    whiteList: ['ant-design-landing-build'],
  },
}
