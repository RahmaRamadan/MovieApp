import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import MoviesList from "./pages/MoviesList";
import MovieDetails from "./pages/MovieDetails";
import LoginUser from "./pages/LoginForm";
import RegUser from "./pages/RegForm";
import Favourites from "./pages/Favourites";
// import { useSelector } from "react-redux";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="body_color">
        <div className="container  my-5">
          <Switch>
            <Route path={"/"} exact component={MoviesList} />
            <Route path={"/login"} exact component={LoginUser} />
            <Route path={"/register"} exact component={RegUser} />
            <Route path={"/favourites"} exact component={Favourites} />
            <Route path={"/:id?"} exact component={MovieDetails} />
            <Route path={"*"} component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
