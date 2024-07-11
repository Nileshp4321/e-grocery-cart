import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../AddToCartSlice/Slice";
import { uuidv4 } from "@firebase/util";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { auth } from "../../../common/components/FirebaseSetup/firebaseconfig";

function ConsumerAdd() {
  const dispatch = useDispatch();
  const userId = uuidv4();
  const cartItems = useSelector((state) => state.addToCart);
  const [, ...AddedCartItems] = cartItems;
  const [open, setOpen] = React.useState(true);
  // console.log(AddedCartItems[0].Price.slice(1));
  const numberofItem = AddedCartItems.length;
  const totalAmount =
    AddedCartItems.length > 0 &&
    AddedCartItems.reduce((prev, item) => {
      const total =
        parseInt(item.Price.slice(1)) + parseInt(prev.Price.slice(1));
      return total;
    });

  //  console.log(numberofItem);
  const handleOpen = () => setOpen(!open);

  return (
    <div className="flex justify-center flex-wrap ">
      <div className="flex flex-row w-[70%] flex-wrap items-center">
        {AddedCartItems.map((item) => {
          return (
            <>
              <div
                key={item + uuidv4()}
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
                      onClick={() => {
                        dispatch(deleteItem(item.id));
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
    </div>
  );
}

export default ConsumerAdd;
