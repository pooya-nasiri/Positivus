import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/home/Home";
import Layout from "./pages/Layout";
import AboutUs from "./pages/aboutUs/AboutUs";
import Services from "./pages/services/Services";
import UseCses from "./pages/useCases/UseCases";
import Pricing from "./pages/pricing/Pricing";
import Blog from "./pages/blog/Blog";
import RequestAquote from "./pages/requestAqute/RequestAquote";
import NoPage from "./pages/NoPage";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="useCase" element={<UseCses/>} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="blog" element={<Blog />} />
          <Route path="requestAquote" element={<RequestAquote />} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
