import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Enrollment from "./pages/Enrollment";
import Accounts from "./pages/Accounts";
import Schedule from "./pages/Schedule";
import Grades from "./pages/Grades";
import Forms from "./pages/Forms";
import HDF from "./pages/HDF";
import InboxDetail from "./pages/InboxDetail"; // Add this import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enrollment" element={<Enrollment />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/hdf" element={<HDF />} />
        <Route path="/inbox/:id" element={<InboxDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
