// src/Blogs/LeetCode/TwoSum.js
import React from "react";
import "./TwoSum.css"; // Import CSS for styling

const TwoSum = () => {
    const copyToClipboard = () => {
        const code = `private static int[] twoPointerApproach(int[] nums, int target) {  
        int left = 0;  
        int right = nums.length - 1;  
        while (left < right) {  
            int sum = nums[left] + nums[right];  
            if (sum == target) {  
                return new int[] { left + 1, right + 1 }; // Returning one-based index  
            } else if (sum < target) {  
                left++; // Move the left pointer to the right  
            } else {  
                right--; // Move the right pointer to the left  
            }  
        }  
        return new int[0]; // Return an empty array if no solution found  
    }`;
        navigator.clipboard.writeText(code);
        alert('Code copied to clipboard!');
      };
  return (
    <div className="two-sum-container">
      <h1>Two Sum</h1>
      <section>
        <h2>Problem Statement</h2>
        <p>
          Given an array of integers <code>nums</code> and an integer{" "}
          <code>target</code>, return the indices of the two numbers such that
          they add up to <code>target</code>.
        </p>
        <p>
          You may assume that each input would have exactly one solution, and
          you may not use the same element twice. You can return the answer in
          any order.
        </p>
      </section>
      <section>
        <h3>Examples</h3>
        <div className="example">
          <h4>Example 1</h4>
          <p>
            <strong>Input:</strong> nums = [2, 7, 11, 15], target = 9<br />
            <strong>Output:</strong> [0, 1]
            <br />
            <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we
            return [0, 1].
          </p>
        </div>
        <div className="example">
          <h4>Example 2</h4>
          <p>
            <strong>Input:</strong> nums = [3, 2, 4], target = 6<br />
            <strong>Output:</strong> [1, 2]
            <br />
            <strong>Explanation:</strong> Because nums[1] + nums[2] == 6, we
            return [1, 2].
          </p>
        </div>
        <div className="example">
          <h4>Example 3</h4>
          <p>
            <strong>Input:</strong> nums = [3, 3], target = 6<br />
            <strong>Output:</strong> [0, 1]
            <br />
            <strong>Explanation:</strong> Because nums[0] + nums[1] == 6, we
            return [0, 1].
          </p>
        </div>
      </section>
      <section>
        <h3>Constraints</h3>
        <ul>
          <li>
            2 ≤ nums.length ≤ 10<sup>4</sup>
          </li>
          <li>
            -10<sup>9</sup> ≤ nums[i] ≤ 10<sup>9</sup>
          </li>
          <li>
            -10<sup>9</sup> ≤ target ≤ 10<sup>9</sup>
          </li>
        </ul>
      </section>
      <section>
        <h2>Steps</h2>
        <ol>
          <li>
            Initialize two pointers, one at the beginning of the array and the
            other at the end. The left pointer starts at the beginning of the
            array (index 0). The right pointer begins at the end of the array
            (index 3).
          </li>
          <li>
            Calculate the sum of the elements pointed to by the two pointers.
          </li>
          <li>
            We have found the solution if the sum equals the target. Move the
            left pointer to the right if the sum is less than the target. If the
            sum is greater than the target, move the right pointer to the left.
          </li>
          <li>
            Repeat steps 2 and 3 until we find a pair that adds up to the
            target.
          </li>
        </ol>
      </section>
      <section>
        <h2>Visual Representation</h2>
        <table className="visual-table">
          <thead>
            <tr>
              <th>Step</th>
              <th>Array</th>
              <th>Left Pointer</th>
              <th>Right Pointer</th>
              <th>Sum</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Initial</td>
              <td>[2, 7, 11, 15]</td>
              <td>0</td>
              <td>3</td>
              <td>2 + 15 = 17</td>
              <td>Move right pointer left</td>
            </tr>
            <tr>
              <td>Step 1</td>
              <td>[2, 7, 11, 15]</td>
              <td>0</td>
              <td>2</td>
              <td>2 + 11 = 13</td>
              <td>Move right pointer left</td>
            </tr>
            <tr>
              <td>Step 2</td>
              <td>[2, 7, 11, 15]</td>
              <td>0</td>
              <td>1</td>
              <td>2 + 7 = 9</td>
              <td>Found target</td>
            </tr>
          </tbody>
        </table>
        <div className="step">
          <h3>Return the Indices:</h3>
          <p>
            The indices of the numbers that add up to the target are [0, 1].
          </p>
        </div>
      </section>
      <section>
        <h3>Java Code Implementation</h3>
        <p>Here is the Java code implementing the two-pointer approach:</p>
        <div className="code-container">
          <button onClick={copyToClipboard} className="copy-button">
            Copy
          </button>
          <pre>
            <code className="language-java">
{`1.  private static int[] twoPointerApproach(int[] nums, int target) {  
2.      int left = 0;  
3.      int right = nums.length - 1;  
4.      while (left < right) {  
5.          int sum = nums[left] + nums[right];  
6.          if (sum == target) {  
7.              return new int[] { left + 1, right + 1 }; // Returning one-based index  
8.          } else if (sum < target) {  
9.              left++; // Move the left pointer to the right  
10.         } else {  
11.             right--; // Move the right pointer to the left  
12.         }  
13.     }  
14.     return new int[0]; // Return an empty array if no solution found  
15. }`}
            </code>
          </pre>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default TwoSum;
// const TwoSum = () => {
//   return (
//     <div>
//       <h1>Two Sum</h1>
//       <h2>Problem Statement</h2>
//       <p>
//         Given an array of integers <code>nums</code> and an integer <code>target</code>, return the indices of the two numbers such that they add up to <code>target</code>.
//       </p>
//       <p>
//         You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
//       </p>
//       <h3>Examples</h3>
//       <h4>Example 1</h4>
//       <p>
//         Input: nums = [2, 7, 11, 15], target = 9<br />
//         Output: [0, 1]<br />
//         Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
//       </p>
//       <h4>Example 2</h4>
//       <p>
//         Input: nums = [3, 2, 4], target = 6<br />
//         Output: [1, 2]<br />
//         Explanation: Because nums[1] + nums[2] == 6, we return [1, 2].
//       </p>
//       <h4>Example 3</h4>
//       <p>
//         Input: nums = [3, 3], target = 6<br />
//         Output: [0, 1]<br />
//         Explanation: Because nums[0] + nums[1] == 6, we return [0, 1].
//       </p>
//       <h3>Constraints</h3>
//       <p>
//         2 ≤ nums.length ≤ 10<sup>4</sup><br />
//         -10<sup>9</sup> ≤ nums[i] ≤ 10<sup>9</sup><br />
//         -10<sup>9</sup> ≤ target ≤ 10<sup>9</sup><br />
//         Only one valid answer exists.
//       </p>
//       <h2>Finding Pairs with Two Pointers in an Array</h2>
//       <h3>Introduction</h3>
//       <p>
//         Finding pairs of numbers that add up to a specific target can be an interesting challenge in programming and algorithm design. One efficient way to solve this problem is by using the two-pointer technique. In this post, we’ll walk through a practical example using the array [2, 7, 11, 15] and the target sum 9.
//       </p>
//       <h3>Steps:</h3>
//       <ol>
//         <li>Initialize two pointers, one at the beginning of the array and the other at the end. The left pointer starts at the beginning of the array (index 0). The right pointer begins at the end of the array (index 3).</li>
//         <li>Calculate the sum of the elements pointed to by the two pointers.</li>
//         <li>We have found the solution if the sum equals the target. Move the left pointer to the right if the sum is less than the target. If the sum is greater than the target, move the right pointer to the left.</li>
//         <li>Repeat steps 2 and 3 until we find a pair that adds up to the target.</li>
//       </ol>
//       <h3>Visual Representation</h3>
//       <p>
//         Let’s visualize the two-pointer technique with the array [2, 7, 11, 15] and the target sum 9.
//         </p>
//         <pre>
//         {`
// Initial: Array: [2, 7, 11, 15]
//                  ^          ^
//                left        right
// left = 0;
// right = array.length-1; // 3
// target = 9;

// Step 1:
//     Array: [2, 7, 11, 15]
//             ^          ^
//            left        right
// left = 0;
// right = 3;
// Calculate the sum:
//     nums[left] + nums[right]
//     nums[0] + nums[3] = 2 + 15 = 17
// Since 17 is greater than 9, move the right pointer one step left. inward.

// Step 2:
//     Array: [2, 7, 11, 15]
//             ^     ^
//           left    right
// left = 0;
// right = 2;
// Calculate the sum:
//     nums[left] + nums[right]
//     nums[0] + nums[2] = 2 + 11 = 13
// Since 13 is greater than 9, move the right pointer one step left.

// Continue Until a Match is Found:
// Step 3:
//     Array: [2, 7, 11, 15]
//             ^  ^
//          left  right
// left = 0;
// right = 1;
// Calculate the sum:
//     nums[left] + nums[right]
//     nums[0] + nums[1] = 2 + 7 = 9
// Since 9 equals the target, we have found our answer.

// Return the Indices:
// The indices of the numbers that add up to the target are [0, 1].
//         `}
//       </pre>
//       <h3>Java Code Implementation</h3>
//       <p>Here is the Java code implementing the two-pointer approach:</p>
//       <pre>
//         <code>
//           {`
// private static int[] twoPointerApproach(int[] nums, int target) {
//     int left = 0;
//     int right = nums.length - 1;
//     while (left < right) {
//         int sum = nums[left] + nums[right];
//         if (sum == target) {
//             return new int[] { left + 1, right + 1 }; // Returning one-based index
//         } else if (sum < target) {
//             left++; // Move the left pointer to the right
//         } else {
//             right--; // Move the right pointer to the left
//         }
//     }
//     return new int[0]; // Return an empty array if no solution found
// }
//           `}
//         </code>
//       </pre>
//       <h3>Conclusion</h3>
//       <p>
//         The two-pointer technique efficiently allows us to find pairs in a sorted array by leveraging the properties of addition. In this example, we achieved our goal by adjusting our pointers based on the calculated sums. This efficient method has a time complexity of O(n), making it suitable for larger datasets.
//       </p>
//     </div>
//   );
// };

// export default TwoSum;
