const express = require('express');
const path = require('path'); 
const app = express();
const port = process.env.PORT || 3000; 


// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  
  app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
  });

  app.get('/apps', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'apps.html'));
  });

app.get('*', (req, res) => {
  res.statusCode = 404;
  res.send('404 - Page not found');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
