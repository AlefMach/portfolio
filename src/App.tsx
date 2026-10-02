import { ScrollProgress } from "./components/common/ScrollProgress";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { Footer } from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Home />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;
