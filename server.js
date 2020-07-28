var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 8080;        // set our port


var router = express.Router();


router.get('/client/:id', function (req, res) {
   // res.json({ message: 'hooray! welcome to our api!' });
   let id = req.params.id;
   let data = [];
   if (id === 'SBI') {
      data = [
         {
            placeholder: "Client ID",
            name: "clientID",
            input_type: "text",
            required: true
         },
         {
            placeholder: "GSTIN",
            name: "GSTIN",
            input_type: "text",
            required: true
         },
         {
            placeholder: "Cersai Number",
            name: "cersaiNumber",
            input_type: "text",
            required: true
         },
         {
            placeholder: "Bank Statement Document ",
            name: "bankStatementDocument",
            input_type: "text",
            required: true
         }
      ]
   }

   if (id === 'HDFC') {
      data = [
         {
            placeholder: "Client ID",
            name: "clientID",
            input_type: "text",
            required: true
         },
         {
            placeholder: "Product name",
            name: "productName",
            input_type: "text",
            required: true
         },
         {
            placeholder: "Product type",
            name: "productType",
            input_type: "text",
            required: true
         },
         {
            placeholder: "CIBIL Score",
            name: "CIBILScore",
            input_type: "text",
            required: true
         },
         {
            placeholder: "Company Name",
            name: "companyName",
            input_type: "text",
            required: true
         },
         {
            placeholder: "Company PAN",
            name: "companyPAN",
            input_type: "text",
            required: true
         },
         {
            placeholder: "Company PAN Document",
            name: "companyPANDocumnet",
            input_type: "text",
            required: true
         }
      ]
   }

   res.json(data);
});

router.get('/', function (req, res) {
   res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server on port ' + port);