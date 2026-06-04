const https = require('https');
const q = encodeURIComponent('site:pexels.com horse portrait bridle brown');
https.get(`https://html.duckduckgo.com/html/?q=${q}`, {
    headers: { 'User-Agent': 'Mozilla/5.0' }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const rx = /https:\/\/www\.pexels\.com\/photo\/[-a-zA-Z0-9]+/g;
    let m = data.match(rx);
    if(m) console.log(Array.from(new Set(m)).join('\n'));
  });
});
