import React, { useState } from 'react'
import axios from 'axios';

const InsertData = () => {

  const [alldata, setAllData] = useState({
    name: '',
    email: '',
    number: '',
    file: null,
  })

  const handleFileChange = (e) => {
    setAllData({
      ...alldata,
      file: e.target.files[0]
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
// Cloudinary api call 
      const formData = new FormData();

      formData.append("file", alldata.file)
      formData.append("upload_preset", "vqx0qkap")
      formData.append("cloud_name", "djncr1nay")

      const res = await axios.post("https://api.cloudinary.com/v1_1/djncr1nay/image/upload", formData)
      let imgpath = res.data.url;
      alldata.file=imgpath;

      

    // backend Api call

   const sendData = await axios.post("http://localhost:9008/register",alldata).then((res)=>{
    console.log("Data send successfully ")
  }).catch((error)=>{
    console.log(error)
  })
console.log(sendData)
    } catch (error) {
      console.error('Error uploading image:', error);
    }

    
  setAllData({
    name: '',
    email: '',
    number: '',
    file: '',
  })
  }




  const handleInput = () => {
    setAllData({ ...alldata })
  }

  return (
    <>
      <form className='main_form-div' onSubmit={handleSubmit} >
        <div class="mb-3 " >
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input
            value={alldata.name} onChange={(e) => setAllData({ ...alldata, name: e.target.value })}
            type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3 ">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input
            value={alldata.email} onChange={(e) => setAllData({ ...alldata, email: e.target.value })}
            type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">

          <label for="exampleInputPassword1" class="form-label">Number</label>
          <input
            value={alldata.number} onChange={(e) => setAllData({ ...alldata, number: e.target.value })}
            type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3">
          <label for="formFileMultiple" class="form-label">Multiple files input example</label>
          <input
            onChange={handleFileChange}
            class="form-control" type="file" id="formFileMultiple" multiple />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default InsertData