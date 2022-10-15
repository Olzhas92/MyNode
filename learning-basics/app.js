const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title><Enter Message</title></head>");
    res.write(
      `<body><form action = "/message" method = "POST"><input type= "text" name="message"><button type="submit">Send Form</button></form></body>`
    );
    res.write("</head>");
    return res.end();
  } else if (url === "/test") {
    res.write("<html>");
    res.write("<head><title>Test Page</title></head>");
    res.write("<body><h2>Test Page</h2></body>");
    res.write("</html>");
    return res.end();
  }

  console.log(req.url, req.method, req.headers);
  //   process.exit();
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title><My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</head>");
  res.end();
});

server.listen(4000);
