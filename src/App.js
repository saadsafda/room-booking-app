import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
// import RegisterPage from "./Pages/RegisterPage";

import HomeLayout from "./Pages/Home";
import ContentWraper from "./components/ContentWraper";
import Cafe from "./Pages/Cafe1";
import Calenderespage from "./Pages/Calenderespage";

function App() {
  return (
    <div id="page-top">
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomeLayout>
                <ContentWraper />
              </HomeLayout>
            </Route>
            <Route exact path="/cafe/:cafeId">
              <HomeLayout>
                <Cafe />
              </HomeLayout>
            </Route>
            <Route path="/cafe/:cafeId/:roomId">
              <HomeLayout>
                <Calenderespage />
              </HomeLayout>
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            {/* <Route path="/register">
              <RegisterPage />
            </Route> */}
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
