import React, { useEffect, useState } from "react";
import {
  auth,
  dbref,
  db,
  storage,
} from "../../../common/components/FirebaseSetup/firebaseconfig";
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
// import { child, get, ref,  } from "@firebase/database";
import { v4 as uuidv4 } from "uuid";
import { onValue, ref, remove, update, set } from "firebase/database";
import { useDispatch } from "react-redux";
import { add } from "../AddToCartSlice/Slice";

const ProductItems = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [categories, setCategories] = useState(null);
  const [isComponentUpdate, setIsComponentUpdate] = useState(null);
  const [typeSerach, setTypeSerach] = useState("");
  const [addItemToCart, setAddItemToCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2800);
  }, [isComponentUpdate]);

  const dispatch = useDispatch();
  const uid = auth.currentUser.uid;
  const cardFields = [
    "Item Name",
    "Item Label",
    "Price",
    "Category",
    "Quantity",
  ];
  const uniqueId = uuidv4();
  const userId = auth.currentUser.uid;
  const email = auth.currentUser.email;

  const starCountRef = ref(db, `Products/`);
  let records = [];

  useEffect(() => {}, [isComponentUpdate]);

  onValue(starCountRef, (snapshot) => {
    // const data = snapshot.val();
    snapshot.forEach((childSnapshot) => {
      // let key=childSnapshot.key;
      let data = childSnapshot.val();
      // console.log();
      records.push(data);
    });
  });

  const onSerachData = (e) => {
    setTypeSerach(e.target.value);
  };

  const addToCart = (item) => {
    dispatch(add(item));
  };

  return (
    <div>
      <div className="mb-4">
        <h1 className="text-5xl text-center">Products Items</h1>
      </div>
      {/* <select className="select select-info w-full max-w-xs">
        <option disabled selected>
          ------------------ Sort By : ------------------
        </option>
        <option>Modified By Time</option>
      </select> */}
      {!isLoading ? (
        <div className="flex flex-row w-full flex-wrap justify-center items-center">
          {records.map((item) => {
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
                        className="btn btn-success"
                        onClick={() => {
                          addToCart(item);
                          alert("Item Is Added Into Cart");
                        }}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default ProductItems;
