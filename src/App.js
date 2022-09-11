import { useEffect, useState } from "react";
import { Content } from "./components/Content";
import { Drawer } from "./components/Drawer";
import { Footer } from "./components/Footer";
import { MainHeader } from "./components/Main-header";

function App() {

  const [products, setProducts] = useState([])
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('https://631de283cc652771a48d2626.mockapi.io/sneakers');

      const sneakers = await data.json();

      setProducts(sneakers)
    }

    fetchData();
  }, [])


  return (
    <div className="main-page">
      <MainHeader onClickOpenDrawer={setIsDrawerOpen} />
      <Content products={products} />
      <Footer />
      {isDrawerOpen && <Drawer onClose={setIsDrawerOpen} />}
    </div>
  );
}

export default App;
