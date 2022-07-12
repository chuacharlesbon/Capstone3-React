const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs');

app.get('/', function(request, response) {
  console.log('Home page visited!');
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, 'Home Page');
    data = data.replace(/\$OG_DESCRIPTION/g, "Home page description");
    result = data.replace(/\$OG_IMAGE/g, 'https://scontent.fmnl25-2.fna.fbcdn.net/v/t1.15752-9/287613990_788804295612023_3592606866863967157_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHpSyGG8qpjJYtvzPnzFRWdf_HJnfWzEh5_8cmd9bMSHvHHi4KA_0xf22pe-mxBBLOXe_BNFymuRgNsmvM0o9Hc&_nc_ohc=VTDU_O-V7-sAX-tj29H&_nc_ht=scontent.fmnl25-2.fna&oh=03_AVIyjGo8fzR-6KOIauiZMvfYdvuSbN3ur5UPvTekawiuJQ&oe=62F4A8EF');
    response.send(result);
  });
});

app.get('/login', function(request, response) {
  console.log('About page visited!');
  const filePath = path.resolve(__dirname, './build', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, 'Login Page');
    data = data.replace(/\$OG_DESCRIPTION/g, "Login page description");
    result = data.replace(/\$OG_IMAGE/g, 'https://scontent.fmnl25-2.fna.fbcdn.net/v/t1.15752-9/290698029_1055229348438848_3021423764528670047_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeH214aMwDihOm64Jrm4OylrYheR2HbQYexiF5HYdtBh7EX7MmH6FsLZdITlN5VpEoRmp-spqMu_qTQ51nM3ubhh&_nc_ohc=7LiaWBSkBrAAX8uZJBC&_nc_ht=scontent.fmnl25-2.fna&oh=03_AVIoRLIEv9LFeT7HDWul9HYRMF7vMFxnOFGNDOh3PU8PwA&oe=62F3A960');
    response.send(result);
  });
});

app.get('/products/categoryFood', function(request, response) {
  console.log('Contact page visited!');
  const filePath = path.resolve(__dirname, './build', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, 'Store Page');
    data = data.replace(/\$OG_DESCRIPTION/g, "Store page description");
    result = data.replace(/\$OG_IMAGE/g, 'https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.15752-9/290638872_1644852462596058_2758669802422900894_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFdfGaDR-V4hanrS6c7TEuOIQTms3t-gOwhBOaze36A7KjkDOB97WeXI0qLxzoi7f0WQk0PB-BQxnNp0NU9G5JH&_nc_ohc=EIgzgekXaa4AX8gDnas&_nc_ht=scontent.fmnl25-1.fna&oh=03_AVKKSQwWg7xuhpnJYlvdg0SX7HHc_vJJCWZt3b9vQbGm1A&oe=62F1EC2F');
    response.send(result);
  });
});

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));