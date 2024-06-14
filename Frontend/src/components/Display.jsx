import axios from 'axios'
import React, { useEffect,useState } from 'react'

const Display = () => {

  const [data, setData] = useState([])

  useEffect(()=>{
     axios.get("http://localhost:9008/display").then((res)=>{
      setData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  const deleteItem = (id) => {
    axios.delete(`http://localhost:9008/delete${id}`)
      .then(response => {
        setItems(items.filter(item => item._id !== id));
        console.log(response.data.msg);
      })
      .catch(error => {
        console.error('There was an error deleting the item!', error);
      });
  };
  
  return (
    <>
    {
      data.map((item)=>{
        return(
          <>
         
          <div class="card" style={{width:"16rem",marginTop:"40px" }} >
          <img src={item.file} class="card-img-top  " style={{width:"180px",marginLeft:"5%"}} alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{item.name}</h5>
            <p class="card-text">{item.email}</p>
            <p class="card-text">{item.number}</p>
            <button type="button" class="btn btn-danger" onClick={() => deleteItem(item._id)}>Delete</button>
          </div>
        </div>
       
          </>
        )
         
      })
    }

    </>
  )
}

export default Display
