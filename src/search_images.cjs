const https = require('https');
https.get('https://images.unsplash.com/photo-1540306351582-843de588b50f?q=80&w=1000&auto=format&fit=crop', (res) => {
  // test if this exists
  console.log(res.statusCode);
});
