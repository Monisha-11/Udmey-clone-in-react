import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Saleimages from "./components/Sale-images";
import Recommended from "./components/Recommended";
import Topic from "./components/Topic";
import Popular from "./components/Popular";
import Footer from "./components/Footer";

function App()
{
  return(
    <div>
      <Navbar></Navbar>
      <Categories></Categories>
      <Saleimages></Saleimages>
      <Recommended></Recommended>
      <Topic></Topic>
      <Popular></Popular>
      <Footer></Footer>
    </div>
  )
}

export default App