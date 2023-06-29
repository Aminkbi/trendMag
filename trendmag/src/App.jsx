import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "../src/features/Posts/AppContext";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer/Footer";
import PostPage from "./Pages/PostPage";
import { CategoriesContext } from "./features/Categories/CategoryContext";
import CategoryPage from "./Pages/CategoryPage";

const App = () => {
  return (
    <AppProvider>
      <CategoriesContext>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/posts/:postId" element={<PostPage />} />
            <Route
              path="/categories/:categoryName"
              element={<CategoryPage />}
            />
          </Routes>
          <Footer />
        </Router>
      </CategoriesContext>
    </AppProvider>
  );
};

export default App;
