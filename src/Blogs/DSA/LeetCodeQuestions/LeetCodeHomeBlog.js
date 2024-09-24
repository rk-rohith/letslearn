import React from "react";
import { Link } from 'react-router-dom'; // Add this import statement


const LeetCodeHomeBlog = () => {
    return (
        <div>
        <h2>LeetCode Questions</h2>
        <p>
            LeetCode is a popular platform for practicing coding problems. It offers
            a wide range of problems to help developers improve their problem-solving
            skills. LeetCode questions are categorized based on different topics such
            as arrays, strings, linked lists, trees, graphs, and more.
        </p>
        <h3>Benefits of Solving LeetCode Questions</h3>
        <p>
            Solving LeetCode questions has several benefits for developers:
        </p>
        <ul>
        <li><Link to="/leetcode/two-sum">Two Sum</Link></li>
        {/* <li><Link to="/leetcode/reverse-integer">Reverse Integer</Link></li>
        <li><Link to="/leetcode/palindrome-number">Palindrome Number</Link></li>
        <li><Link to="/leetcode/maximum-subarray">Maximum Subarray</Link></li>
        <li><Link to="/leetcode/contains-duplicate">Contains Duplicate</Link></li> */}
        </ul>
        <h3>Popular LeetCode Questions</h3>
        <p>
            Some popular LeetCode questions include:
        </p>
        <ul>
            <li>Two Sum</li>
            <li>Reverse Integer</li>
            <li>Palindrome Number</li>
            <li>Maximum Subarray</li>
            <li>Contains Duplicate</li>
        </ul>
        </div>
    );
    }



export default LeetCodeHomeBlog;