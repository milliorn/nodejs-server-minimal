const http = require('http');
const fs = require('fs');

// Create a server
const server = http.createServer((req, res) => {
  if (req.url === '/robots.txt') {
    // Serve the robots.txt file
    fs.readFile('./robots.txt', 'utf8', (err, txt) => {
      if (err) {
        // Set the content type
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        // Send the error message
        res.end('500 - Internal Server Error');
      }
      // Set the content type for robots.txt
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      // Send the robots.txt content
      res.end(txt);
    });
  } else {
    // Serve the index.html file for all other requests
    fs.readFile('./index.html', 'utf8', (err, html) => {
      if (err) {
        // Set the content type
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        // Send the error message
        res.end('500 - Internal Server Error');
      }
      // Set the content type for HTML
      res.writeHead(200, { 'Content-Type': 'text/html' });
      // Send the html content
      res.end(html);
    });
  }
});

// Set the port
const port = 3000;
// Listen to the port
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
