const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs');

app.use(require('prerender-node').set('prerenderToken', 'WDrC75zyvxppYZZnfxJB'));

app.listen(port, () => console.log(`Listening on port ${port}`));