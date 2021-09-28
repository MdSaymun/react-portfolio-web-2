import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import router from "./router/routes";
import Navbar from "./components/Navbar";
import NavbarTop from "./components/NavbarTop";
import LoadingCom from "./components/Loading";
import { useGlobalContext } from "./utils/context";
import Footer from "./components/Footer";
import "./styles/main.scss";
import Sidebar from "./components/Sidebar";

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return <LoadingCom />;
  }

  return (
    <>
      <Router>
        <NavbarTop />
        <Navbar />
        <Sidebar />
        <Switch>
          {router.map((item, index) => {
            const { exact, path, component } = item;
            return <Route key={index} exact={exact} path={path} component={component} />;
          })}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
