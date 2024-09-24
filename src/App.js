import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Dashboard from './Dashboard/Dashboard';
import Blog from './Blogs/Blogs'; // Corrected import statement
import TwoSum from './Blogs/DSA/LeetCodeQuestions/TwoSum'; // Corrected import statement

const App = () => {
  return (
    <Router>
      <Header />
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/blog/:topic/:subtopic/*" element={<Blog />} />
            <Route path="/leetcode/two-sum" element={<TwoSum />} />
            {/* <Route path="/leetcode/reverse-integer" element={<ReverseInteger />} />
            <Route path="/leetcode/palindrome-number" element={<PalindromeNumber />} />
            <Route path="/leetcode/maximum-subarray" element={<MaximumSubarray />} />
            <Route path="/leetcode/contains-duplicate" element={<ContainsDuplicate />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;