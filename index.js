var express     = require('express');
var cors        = require('cors');
var bodyParser  = require('body-parser'); 
const { v4 } = require('uuid');
const app = express();
const multer = require('multer');
const upload = multer();


app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});


app.post('/api/fileanalyse/', upload.any(), function (req, res) {
  // req.file is the name of your file in the form above, here 'uploaded_file'
  // req.body will hold the text fields, if there were any 
  const { files } = req;
  const { originalname,mimetype,size } = files[0];
  let resJson = {"name": originalname ,"type": mimetype,"size":size}
  res.json(resJson);      
});    



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
