import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        localStorage.setItem("token", useCredential._tokenResponse.idToken);
        history.push("/");
      })
      .catch((e) => alert(e.message))
      .finally(() => setLoading(false), setEmail(""), setPassword(""));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/");
    }
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container">
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            placeholder="Enter Email Address..."
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                          />
                        </div>
                        <button
                          onClick={onLogin}
                          className="btn btn-primary btn-user btn-block"
                        >
                          {loading ? "Please Wait ..." : "Login"}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Login);
