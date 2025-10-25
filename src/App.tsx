import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CommunityPage from "./pages/CommunityPage";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import ContactPage from "./pages/ContactPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<CommunityPage />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
