import { useState } from "react";
import { Content } from "./components/Content";
import { Drawer } from "./components/Drawer";
import { Footer } from "./components/Footer";
import { MainHeader } from "./components/Main-header";

function App() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <div className="main-page">
      <MainHeader onClickOpenDrawer={setIsDrawerOpen} />
      <Content />
      <Footer />
      {isDrawerOpen && <Drawer onClose={setIsDrawerOpen}/>}
    </div>
  );
}

export default App;
