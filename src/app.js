const path = require('path');
const express = require('express');

const publicDirPath = path.join(__dirname, './public');
console.log(publicDirPath);

const app = express();
app.use(express.static(publicDirPath));

app.listen(3000, () => {
  console.log('\n\n----An express server listening on port 3000');
});
