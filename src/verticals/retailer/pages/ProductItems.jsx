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

const ProductItems = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [categories, setCategories] = useState(null);
  const [isComponentUpdate, setIsComponentUpdate] = useState(null);
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
  const [isLoading,setIsLoading]=useState(true);
  let records = [];

  useEffect(() => {
    setTimeout(()=>{
      setIsLoading(false)
    },2800);
  }, [isComponentUpdate]);

  onValue(starCountRef, (snapshot) => {
    // const data = snapshot.val();
    snapshot.forEach((childSnapshot) => {
      // let key=childSnapshot.key;
      let data = childSnapshot.val();
      // console.log(data);
      records.push(data);
    });
  });
  const handleSelect = (e) => {
    setCategories(e.target.value);
  };
  const handlCartForm = async (e) => {
    e.preventDefault();
    const userId = auth.currentUser.uid;
    const email = auth.currentUser.email;
    // get(child(dbref, "userInfo" + userId)).then((snapshot) => {
    //   if (snapshot.exists) {
    //     console.log(snapshot.val().Email);
    //   }
    // });
    // console.log(storage);
    if (imageUpload == null) {
      alert("Please Select a Image");
      return;
    }
    const uniqueId = uuidv4();
    const imageRef = storageRef(storage, `Products${userId}/` + uniqueId);
    uploadBytes(imageRef, imageUpload)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            // setUrlOfImg(url)
            set(ref(db, `Products/` + uniqueId), {
              id: uniqueId,
              StoreName: e.target[0].value,
              ItemName: e.target[1].value,
              ItemLabel: e.target[2].value,
              Price: e.target[3].value,
              Category: categories,
              Quantity: e.target[5].value,
              ImgURL: url,
            });

            // setaActiveComponent("Products");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const Model = ({cartId, cartDetails }) => {
  //   return (
  //     <dialog id="my_modal_3" className="modal">
  //       <div className="modal-box ">
  //       <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
  //         <form
  //           className="max-w-md h-screen flex flex-col justify-center items-center "
  //         >
  //           <div className="relative z-0 w-full mb-5 group">
  //             <h1 className="text-4xl text-blue-400 text-center">
  //               Update Cart
  //             </h1>
  //             {/* {console.log()} */}
  //           </div>
  //           {cardFields.map((item) => {
  //             return (
  //             <div key={item} className="relative z-0 w-full mb-5 group">
  //               <label
  //                 htmlFor={`${item}`}
  //                 className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  //               >
  //                 {item}
  //               </label>
  //               {item === "Category" && (
  //                 <select
  //                   defaultValue={`Choose a ${item}`}
  //                   onChange={handleSelect}
  //                   id="underline_select"
  //                   className="mt-3 bg-gray-700 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
  //                 >
  //                   <option value="categories">Choose a {item}</option>
  //                   <option value="Fresh Fruits and Veggies">
  //                     Fresh Fruits and Veggies
  //                   </option>
  //                   <option value="Spices and Masalas">
  //                     Spices and Masalas
  //                   </option>
  //                   <option value="Clothing and Apparel">
  //                     Clothing and Apparel
  //                   </option>
  //                   <option value="Electronics and Gadgets">
  //                     Electronics and Gadgets
  //                   </option>
  //                   <option value="Home and Kitchen Appliances">
  //                     Home and Kitchen Appliances
  //                   </option>
  //                   <option value="Books and Stationery">
  //                     Books and Stationery
  //                   </option>
  //                   <option value="Health and Beauty">
  //                     Health and Beauty
  //                   </option>
  //                   <option value="Books and Stationery">
  //                     Books and Stationery
  //                   </option>
  //                   <option value="Toys and Games">Toys and Games</option>
  //                   <option value="Sports and Fitness">
  //                     Sports and Fitness
  //                   </option>
  //                   <option value="Automotive and Accessories">
  //                     Automotive and Accessories
  //                   </option>
  //                 </select>
  //               )}
  //               {item !== "Category" && (
  //                 <input
  //                   type="text"
  //                   name={`${item}`}
  //                   id={`${item}`}
  //                   value={cartDetails[item]}
  //                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  //                   placeholder=" "
  //                   required
  //                 />
  //               )}
  //             </div>
  //             );
  //           })}
  //           <div className="relative z-0 w-full mb-5 group">
  //             <input
  //               onChange={(e) => {
  //                 setImageUpload(e.target.files[0]);
  //               }}
  //               type="file"
  //               className="file-input file-input-bordered file-input-info w-full max-w-xs"
  //             />
  //           </div>
  //           <div className="flex flex-row justify-center">
  //             <button
  //               onClick={updataItemFromCart}
  //               width={100}
  //               type="submit"
  //               className="text-white btn btn-warning m-2 w-full"
  //             >
  //               Update
  //             </button>
  //           </div>
  //         </form>
  //       </div>
  //     </dialog>
  //   );
  // };
  const deleteItemFromCart = async (id) => {
    // console.log(id);
    try {
      remove(ref(db, `Products/${id}`));
      console.log("delte");
      setIsComponentUpdate("Item is Deleted");
    } catch (error) {
      console.error("Error deleting item:", error.message);
    }
  };
  const updataItemFromCart = async (id) => {
    try {
      await update(ref(db, `Products${uid}/${id}`, {}));
    } catch (error) {
      console.error("Error deleting item:", error.message);
    }
  };

  return (
    <div>
      <div className="mb-4">
        <h1 className="text-5xl text-center">Products Items</h1>
      </div>
      {
        !isLoading?
      <div className="flex flex-row w-full ">
        {records.map((item) => {
          return (
            <>

             {item.user===email&& <div
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
                <div className="card-body flex flex-wrap jutify-center">
                  <h1 className="text-6xl font-bold   ">{item.ItemName}</h1>
                  <h1 className="text-3xl font-bold  ">{item.ItemLabel}</h1>
                  <h1 className="text-xl  font-bold  ">{item.Category}</h1>
                  <h2 className="card-title font-bold">{item.Price}</h2>
                  <h2 className="card-title font-bold">{"Quantity : "+item.Quantity}</h2>
                  <p className="card-title font-bold">{"Store Name : " + item.StoreName}</p>
                  <div className="w-42 card-actions flex flex-wrap justify-center items-center ">
                    <button
                      className="btn btn-error"
                      onClick={() => {
                        deleteItemFromCart(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>}
            </>
          );
        })}
      </div>
      :
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
      }
    </div>
  );
};

export default ProductItems;
