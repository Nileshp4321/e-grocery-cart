import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem } from '../AddToCartSlice/Slice';

function ConsumerAdd() {
  const dispatch=useDispatch();

  const cartItems=useSelector((state)=>state.addToCart);
  const [,...AddedCartItems]=cartItems;
  return (
    <div className="flex flex-row w-full flex-wrap justify-center items-center">
      {AddedCartItems.map((item) => {
          return (
            <>
              <div
                key={item}
                className="card bg-base-100 shadow-xl ml-5 mt-9 w-60 "
              >
                <figure>
                  <img
                    className="object-cover w-48 h-48 "
                    src={item.ImgURL}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body flex flex-wrap jsutify-center">
                  <h1 className="text-3xl">
                    <b>Item Name : </b>
                    {item.ItemName}
                  </h1>
                  <h1 className="text-2xl">
                    <b>Item Label : </b>
                    {item.ItemLabel}
                  </h1>
                  <h1 className="text-xl">
                    <b>Item Category : </b>
                    {item.Category}
                  </h1>
                  <h2 className="card-title">
                    <b>Item Price : </b>
                    {item.Price}
                  </h2>
                  <p>{"Store Name : " + item.StoreName}</p>
                  <div className="w-42 card-actions flex flex-wrap justify-center items-center ">
                    <button
                      className="btn btn-error"
                      onClick={()=>{
                        dispatch(deleteItem(item.id))
                      }}
                    >
                      Remove Item
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  )
}

export default ConsumerAdd