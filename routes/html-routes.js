
// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // form route loads contact.html
  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  // main route loads index.html
  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
 
   // main route loads services.html
  app.get("/services", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/services.html"));
  });
  
  //  route loads gallery.html
  app.get("/gallery", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/gallery.html"));
  });
};
