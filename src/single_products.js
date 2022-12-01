import { useParams } from "react-router-dom"
import axios from "axios"
import Spinner from 'react-bootstrap/Spinner';
import { useEffect, useState } from "react"


function Single_products() {
  const { id } = useParams()
  const [getchar, setchar] = useState([])
  const [ condition , setcondition] = useState(false)
  // alert("hello")
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(function (response) {
        setchar(response.data)
        // console.log(response.data)
        console.log(getchar)
        setcondition(true)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])
  if(condition)
  {
  return (
    <>
      <div className="single">
        <div className="container p-4">
          <div className="row justify-content-between gap-5 ">
            <div className="col-auto m-0 p-0 ">
              <div className="img">

                <img src={getchar.thumbnail} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-auto m-0 p-0">
              <div className="single_content">
                <div className="title">{getchar.title} {getchar.description}</div>
                <div className="rating"><button>{getchar.rating} <i class="fa-solid fa-star"></i></button></div>
                <div className="discount">{getchar.discountPercentage}% off</div>
                <div className="desc"></div>
                  <div className="brand">{getchar.brand}</div>
                <div className="category">{getchar.category}</div>
                <div className="price">price{getchar.price}</div>

              </div>
              
            
            </div>
            
            <div className="back_button"><a href="/">Back</a></div>
          </div>
        </div>
      </div>

    </>
  )}
  else{
    return(
      <>
     
    <div class="text-center">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
      </>
    )
    
  //   
// alert()
}


 
}
export default Single_products

