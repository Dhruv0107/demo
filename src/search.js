import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './card';
function Single(a)
{
    const [getchar, setchar] = useState([])
    const [value , setvalue] = useState(a.name)
    // console.log (value)
    useEffect(() => {
        axios.get('https://dummyjson.com/products/search?q='+value)
          .then(function (response) {
            // handle success
            console.log(response);
            setchar(response.data.products)
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      })
    return(
        <>
        <div className="header ">
          <div className="container ">
            <div className="row justify-content-between align-items-center pt-2 pb-2  ">
              <div className="col-auto">
                <div className="logo"><img src={require('./image/Swiffer.png')} alt="" className='img-fluid' /></div>
              </div>
              <div className="col-auto d-lg-block d-none">
                <ul className='list-unstyled d-flex main-menu' >
                  <li className='me-4'><a href="#">home</a><i class="fa-solid fa-angle-down"></i></li>
                  <li className='me-4'><a href="#">mobiles</a><i class="fa-solid fa-angle-down"></i></li>
                  <li className='me-4'><a href="#">electronics</a><i class="fa-solid fa-angle-down"></i></li>
                  <li className='me-4'><a href="#">cosmetic</a><i class="fa-solid fa-angle-down"></i></li>
                  <li className='me-4'><a href="#">top offers</a><i class="fa-solid fa-angle-down"></i></li>
                </ul>
              </div>
              <div className="col-auto d-lg-block d-none">
                {/* <i class="fa-brands fa-facebook me-3"></i>
                <i class="fa-brands fa-twitter me-3"></i>
                <i class="fa-brands fa-instagram me-3"></i>
                <i class="fa-brands fa-linkedin me-3"></i> */}
                {/* <input type="text" placeholder='search' onChange={(i) => {setvalue(i.target.value)}} value={value} /> */}
        <input type="text" placeholder='search' value={value} onChange={(i) =>{setvalue(i.target.value)}}/>
              </div>
              
              <div className="col-auto d-lg-none ">
                <div className="toggle"><i class="fa-solid fa-list"></i></div>
              </div>
            </div>
          </div>
        </div> 
        {
              getchar.slice(0, 30).map((i,id) => {
                return (
                  <>
                    <Card img={i.images[0]}
                      title={i.title}
                      price={i.price}
                      stock={i.stock}
                      brand={i.brand}
                      category={i.category}
                      rating={i.rating}
                      dis={i.discountPercentage}
                    />
                  </>
                )
              })
            }
        </>
    )
}
export default Single