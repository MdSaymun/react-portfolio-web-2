import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/main.scss";
import router from "./router/routes";
import Navbar from "./components/Navbar";
import NavbarTop from "./components/NavbarTop";
import LoadingCom from "./components/Loading";
import { useGlobalContext } from "./utils/context";

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    <LoadingCom />;
  }

  return (
    <>
      <Router>
        <NavbarTop />
        <Navbar />
        <Switch>
          {router.map((item, index) => {
            const { exact, path, component } = item;
            return <Route key={index} exact={exact} path={path} component={component} />;
          })}
        </Switch>
      </Router>
    </>
  );
}

export default App;
