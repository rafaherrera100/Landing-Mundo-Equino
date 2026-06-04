const https = require('https');

function test(url) {
  https.get(url, (res) => {
    console.log(url.split('/').pop(), res.statusCode, res.headers['content-length']);
  });
}

test('https://upload.wikimedia.org/wikipedia/commons/9/90/Chestnut_Paso_Fino.jpg')
test('https://upload.wikimedia.org/wikipedia/commons/b/be/Schwarzwaelder-kaltblut.jpg')
test('https://upload.wikimedia.org/wikipedia/commons/a/ad/Bay_Morgan.jpg')
test('https://images.unsplash.com/photo-1543083477-4f785aeafaa9?auto=format&fit=crop&w=1000&q=80')
