import { Drawer } from "./components/Drawer";
import { Footer } from "./components/Footer";
import { ItemsList } from "./components/Items-list";
import { MainHeader } from "./components/Main-header";

function App() {
  return (
    <div className="main-page">
      <MainHeader />
      <main className="content main-page__content">
        <ItemsList />
      </main>
      <Footer />
      <Drawer />
    </div>
  );
}

export default App;
