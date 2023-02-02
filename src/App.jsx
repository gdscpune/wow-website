import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Loader from "./Components/Loader/Loader";
import Schedule from "./Pages/Schedule/Schedule";
import Nav from "./Components/Nav/Nav";
import HomePage from "./HomePage";
import Footer from "./Components/Footer/Footer";
import CommunityPartners from "./Pages/Community_Partners/CommunityPartners";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, []);
  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/agenda" element={<Schedule />} />
              <Route path="/partners" element={<CommunityPartners />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </>
      )}
    </>
  );
}

export default App;
