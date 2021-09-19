import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import SingleBlog from "../pages/SingleBlog";
import Eror from "../pages/Eror";

const router = [
  { path: "/", exact: true, component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/services", component: Services },
  { path: "/singleblog/:name", component: SingleBlog },
  { path: "*", component: Eror },
];
export default router;
