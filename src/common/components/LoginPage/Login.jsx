import React, { useContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, set, child, get } from "firebase/database";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router";
import { User } from "../../../context/UserType";

//firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDopsxTR5IOkWXfskDINNDqsQUOQZO-Rqo",
  authDomain: "fooddelivery-b7a69.firebaseapp.com",
  databaseURL:
    "https://fooddelivery-b7a69-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fooddelivery-b7a69",
  storageBucket: "fooddelivery-b7a69.appspot.com",
  messagingSenderId: "4629093531",
  appId: "1:4629093531:web:1dc2419039e96deef83a3e",
  measurementId: "G-YC0RRB0KM0",
};

const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();
// console.log("Databasee"+db)
const dbref = ref(db);
// console.log("Database ref "+dbref)

const Login = ({ toggleScreen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { userRole, setUserRole, user, setUser } = useContext(User);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleForm = async (e) => {
    e.preventDefault();

    // //   signInWithEmailAndPassword(auth, email, password)
    // // .then((userCredential) => {
    // //   // Signed in
    // //   const user = userCredential.user;
    // //   console.log(user)
    // //   // ...
    // // })
    // // .catch((error) => {
    // //   console
    // // });
    // const db = getFirestore();
    // const docRef = doc(db, "users","tArJnElZNjSS1top9QGDxIbJh2e2");
    // const docSnap = await getDoc(docRef);
    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   // docSnap.data() will be undefined in this case
    //   console.log("No such document!");
    // }
  };
  const signInWithEmailAndPasswordFun = () => {
    // console.log("hello")
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // console.log(userCredential);
        const user = userCredential.user;
        console.log(user);
        get(child(dbref, "userInfo" + user.uid)).then((snapshot) => {
          if (snapshot.exists) {
            console.log(snapshot);
            sessionStorage.setItem(
              "userLogInfo",
              JSON.stringify({
                // FullName:snapshot.val().FullName,
                Email: snapshot.val().Email,
              })
            );
            sessionStorage.setItem("userCredInfo", JSON.stringify({ user }));
            // console.log(snapshot.val().UserType);
            if (snapshot.val().UserType === "Retailer") {
              setUserRole("retailer");
              setUser(snapshot.val().Email);
              navigate("/retailer");
            } else if (snapshot.val().UserType === "Consumer") {
              console.log(snapshot.val().UserType === "Consumer");
              setUser(snapshot.val().Email);
              setUserRole("consumer");
              navigate("/consumer");
              // console.log(snapshot.val().UserType)
            }
          } else {
            console.log("Some error line no 97 in login.jsx");
          }
        });
        // console.log(user)
        // navigate("/retailer")
        // ...
      })
      .catch((error) => {
        console.log("error " + error);
      });
  };
  const signInWithPopUps = async () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        //  setUser(res.user.email);
        const user = res.user;
        //  console.log(user);
        get(child(dbref, "userInfo" + user.uid)).then((snapshot) => {
          if (snapshot.exists) {
            if (!snapshot.val() === null) {
              sessionStorage.setItem(
                "userLogInfo",
                JSON.stringify({
                  FullName: snapshot.val().FullName,
                  Email: snapshot.val().Email,
                })
              );
              sessionStorage.setItem("userCredInfo", JSON.stringify({ user }));
              // console.log(snapshot.val().UserType);
              if (snapshot.val().UserType === "Retailer") {
                setUserRole("retailer");
                setUser(snapshot.val().Email);
                navigate("/retailer");
              } else if (snapshot.val().UserType === "Consumer") {
                console.log(snapshot.val().UserType === "Consumer");
                setUser(snapshot.val().Email);
                setUserRole("consumer");
                navigate("/consumer");
                // console.log(snapshot.val().UserType)
              }
            } else {
              alert(
                "This account is not Exist Please First Create Your Account"
              );
            }
          } else {
            console.log("Some error line no 97 in login.jsx");
          }
        });
      })
      .catch((error) => {
        console.log("Error " + error);
      });
  };

  const changeToSignUp = () => {
    toggleScreen(false);
  };

  // const getUser=async()=>{

  // }

  return (
    <div className="flex justify-center items-center flex-wrap w-full z-10">
      <div className="p-6 bg-white flex justify-center items-center flex-col rounded-2xl w-full md:w-3/4 lg:w-2/4 xl:w-2/4">
        {/* <form onSubmit={handleForm}> */}
        <div className="mb-4 text-center">
          <h3 className="font-semibold text-3xl text-yellow-400">Log In </h3>
          <p className="text-gray-500 text-xl">
            Please sign in to your account.
          </p>
        </div>
        <div className="space-y-6 w-full">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 tracking-wide">
              Email
            </label>
            <input
              className="w-full text-base px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
              type="email"
              placeholder="mail@gmail.com"
              onChange={handleEmail}
            />
          </div>
          <div className="space-y-2">
            <label className="mb-2 text-sm font-medium text-gray-700 tracking-wide">
              Password
            </label>
            <input
              className="w-full text-base px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
              type="password"
              placeholder="Enter your password"
              onChange={handlePassword}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="#" className="text-yellow-400">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              onClick={signInWithEmailAndPasswordFun}
              type="submit"
              className="w-full flex justify-center border bg-yellow-400 hover:bg-yellow-500 hover:text-white text-black p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-1"
            >
              Sign in
            </button>
            <div
              className="text-lg underline mt-3 text-right"
              onClick={changeToSignUp}
            >
              <a href="#" className=" text-yellow-400">
                Create New Account
              </a>
            </div>
            <div
              onClick={signInWithPopUps}
              className="mt-3 flex flex-wrap justify-center bg-white"
            >
              <img
                className="signinBtn"
                width={300}
                height={300}
                src="https://assets-global.website-files.com/5c2a9a234fdbba7439c48fa4/632cc665abbc286ce8f3e896_Screen%20Shot%202022-09-22%20at%204.11.09%20PM.jpg"
              />
            </div>
          </div>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};
const SignUp = ({ toggleScreen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [userType, setUserType] = useState("");
  const navigate=useNavigate();

  // //firebase configuration
  // const firebaseConfig = {
  //   apiKey: "AIzaSyDopsxTR5IOkWXfskDINNDqsQUOQZO-Rqo",
  //   authDomain: "fooddelivery-b7a69.firebaseapp.com",
  //   databaseURL:
  //     "https://fooddelivery-b7a69-default-rtdb.asia-southeast1.firebasedatabase.app",
  //   projectId: "fooddelivery-b7a69",
  //   storageBucket: "fooddelivery-b7a69.appspot.com",
  //   messagingSenderId: "4629093531",
  //   appId: "1:4629093531:web:1dc2419039e96deef83a3e",
  //   measurementId: "G-YC0RRB0KM0",
  // };

  // const provider = new GoogleAuthProvider();
  // const app = initializeApp(firebaseConfig);
  // const auth = getAuth(app);

  const handleUserType = (e) => {
    setUserType(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };
  // const retriveData = () => {
  //   console.log(ref(db));
  // };
  const createUser = async () => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const userId = userCredential.user.uid;
    const res = await set(ref(db, "userInfo" + userId), {
      Email: email,
      FullName: fullName,
      Password: password,
      UserType: userType,
    });
    if(userCredential){
      toggleScreen(true)
    }
  };

  const changeToSignIn = () => {
    toggleScreen(true);
  };
  return (
    <div className="flex justify-center items-center flex-wrap w-full z-10">
      <div className="p-6 bg-white flex justify-center items-center flex-col rounded-2xl w-full md:w-3/4 lg:w-2/4 xl:w-2/4">
        <div className="mb-4 text-center">
          <h3 className="font-semibold text-3xl text-yellow-400">Sign Up </h3>
        </div>
        <div className="space-y-6 w-full">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 tracking-wide">
              Full Name
            </label>
            <input
              className="w-full text-base px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
              type="text"
              placeholder="Nilesh Pushkarna"
              onChange={handleFullName}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 tracking-wide">
              Email
            </label>
            <input
              className="w-full text-base px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
              type="email"
              placeholder="mail@gmail.com"
              onChange={handleEmail}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm  tracking-widetext-sm font-medium tracking-wide">
              User Type
            </label>
            <select
              onChange={handleUserType}
              className="w-full text-base px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
            >
              <option>-----Select-----</option>
              <option>Retailer</option>
              <option>Consumer</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="mb-2 text-sm font-medium text-gray-700 tracking-wide">
              Password
            </label>
            <input
              className="w-full text-base px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
              type="password"
              placeholder="Enter your password"
              onChange={handlePassword}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="#" className="text-yellow-400">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              onClick={createUser}
              // onClick={retriveData}
              type="submit"
              className="w-full flex justify-center border bg-yellow-400 hover:bg-yellow-500 hover:text-white text-black p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-1"
            >
              Sign Up
            </button>
            <div
              className="text-lg underline mt-3 text-right"
              onClick={changeToSignIn}
            >
              <a href="#" className=" text-yellow-400">
                Already Have An Account
              </a>
            </div>
            {/* <div
              // onClick={signInWithPopUps}
              className="mt-3 flex flex-wrap justify-center bg-white"
            >
              <img
                className="signinBtn"
                width={300}
                height={300}
                src="https://assets-global.website-files.com/5c2a9a234fdbba7439c48fa4/632cc665abbc286ce8f3e896_Screen%20Shot%202022-09-22%20at%204.11.09%20PM.jpg"
              />
            </div> */}
          </div>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};
const LogOut = () => {
  const { user, setUser } = useContext(User);
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            setUser("");
            navigate("/login");
            // console.log("hellos")
          })
          .catch((error) => {
            // An error happened
            console.log("error" + error);
          });
      }}
    >
      Sign Out
    </button>
  );
};
const ToggleScreen = ({ userType }) => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      {showLogin ? (
        <Login toggleScreen={setShowLogin} />
      ) : (
        <SignUp toggleScreen={setShowLogin} />
      )}
    </>
  );
};

export { SignUp, Login, LogOut };
export default ToggleScreen;
