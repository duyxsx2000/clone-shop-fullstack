
import React ,{useState,useEffect} from "react";
import axios from 'axios';
import '../style/post.css';
function Post() {

  const [dataName,setDataName] = useState("");
  const [dataPrice,setDataPrice] = useState('');
  const [dataAmount,setDataAmount] = useState('');
  const [dataImage,setDataImage] = useState('');
 
 
  const SetImage =(event)=>{
    const file = event.target.files[0]
    getBase64(file)
   
  }

  const getBase64 = (file)=>{
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onloadend = (e)=>{ 
    setDataImage(e.target.result)
  }}
  
  function setName(event){
      setDataName(event.target.value)
  };
  

 function setPrice(event){
    setDataPrice(event.target.value)
  };

 function setAmount(event){
    setDataAmount(event.target.value)
 }


  const newData = {
    name:dataName,
    gia:dataPrice,
    soluong:dataAmount,
    img:dataImage
  }


function postData(event){
  event.preventDefault()
  axios.post('http://localhost:5000/data/user',newData
  
  )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  
    setDataName("")
    setDataPrice("")
    setDataAmount("")
    setDataImage("")

}

  return(
       
       <div>
        <h1>post</h1>
        <form className="fromPost">
            
            <input type="text"  
                   value={dataName}
                   onChange={setName}
                   placeholder='NAME' />
            
           
            <input type="text" 
                   value={dataPrice}
                   onChange={setPrice}
                   placeholder='PRICE' />
            
            
            <input type="numble"
                   value={dataAmount}
                   onChange={setAmount}
                   placeholder='AMOUNT' />
            <div>      
              
              <input type="file"
                    
                    onChange={SetImage}
                    placeholder='file image'   />
            </div> 
            <button className="postData" onClick={postData}>Thêm mặt hàng</button>
        </form>
       
       </div>
    )
}

export default Post