// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";

// const Register = ({ history }) => {
//   const [name, setName] = useState("");
//   const [lName, setLName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [cPassword, setCPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const auth = getAuth();

//     createUserWithEmailAndPassword(auth, email, password)
//       .then(() => {
//         updateProfile(auth.currentUser, { displayName: name })
//           .then(() => history.push("/"))
//           .catch((e) => alert(e.message));
//       })
//       .catch((e) => alert(e.message))
//       .finally(
//         () => setLoading(false),
//         setName(""),
//         setLName(""),
//         setEmail(""),
//         setPassword(""),
//         setCPassword("")
//       );
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       history.push("/");
//     }
//   }, []);

//   return (
//     <>
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-xl-10 col-lg-12 col-md-9">
//             <div className="card o-hidden border-0 shadow-lg my-5">
//               <div className="card-body p-0">
//                 {/* Nested Row within Card Body */}
//                 <div className="row">
//                   <div className="col-lg-5 d-none d-lg-block bg-register-image" />
//                   <div className="col-lg-7">
//                     <div className="p-5">
//                       <div className="text-center">
//                         <h1 className="h4 text-gray-900 mb-4">
//                           Create an Account!
//                         </h1>
//                       </div>
//                       <form className="user">
//                         <div className="form-group row">
//                           <div className="col-sm-6 mb-3 mb-sm-0">
//                             <input
//                               type="text"
//                               className="form-control form-control-user"
//                               placeholder="First Name"
//                               onChange={(e) => setName(e.target.value)}
//                               value={name}
//                             />
//                           </div>
//                           <div className="col-sm-6">
//                             <input
//                               type="text"
//                               className="form-control form-control-user"
//                               placeholder="Last Name"
//                               onChange={(e) => setLName(e.target.value)}
//                               value={lName}
//                             />
//                           </div>
//                         </div>
//                         <div className="form-group">
//                           <input
//                             type="email"
//                             className="form-control form-control-user"
//                             placeholder="Email Address"
//                             onChange={(e) => setEmail(e.target.value)}
//                             value={email}
//                           />
//                         </div>
//                         <div className="form-group row">
//                           <div className="col-sm-6 mb-3 mb-sm-0">
//                             <input
//                               type="password"
//                               className="form-control form-control-user"
//                               placeholder="Password"
//                               onChange={(e) => setPassword(e.target.value)}
//                               value={password}
//                             />
//                           </div>
//                           <div className="col-sm-6">
//                             <input
//                               type="password"
//                               className="form-control form-control-user"
//                               placeholder="Repeat Password"
//                               onChange={(e) => setCPassword(e.target.value)}
//                               value={cPassword}
//                             />
//                           </div>
//                         </div>
//                         <button
//                           onClick={handleSubmit}
//                           className="btn btn-primary btn-user btn-block"
//                         >
//                           {loading ? "Please Wait ..." : "Register Account"}
//                         </button>
//                       </form>
//                       <hr />
//                       <div className="text-center">
//                         <Link className="small" to="/login">
//                           Already have an account? Login!
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;
