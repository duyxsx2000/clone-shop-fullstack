import  express  from "express";
import  bodyParser  from "body-parser";
import router from './routers/router.js'
import mongoose from "mongoose";
import cors from 'cors'



mongoose.connect('mongodb://127.0.0.1:27017/data-web1')
        .then(()=>{
            console.log('ket noi thanh cong voi database');
         })
         .catch((error)=>{'ket noi that bai',error})

const app = express();
const port = 5000;


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
 
app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

app.get('/',(req,res)=>{
    res.send('hello web test')
})
;
app.use('/data',router)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });