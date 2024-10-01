// src/Blogs/LeetCode/TwoSum.js
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import copy from "copy-to-clipboard";
import "./LeetCode.css"; // Import CSS for styling

const TwoSum = () => {
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

  return (
    <div className="two-sum-container">
      <h1>Two Sum</h1>
      <section>
        <h2>Problem Statement</h2>
        <p>
          Given an array of integers <code>nums</code> and an integer <code>target</code>, return the indices of the two numbers such that they add up to <code>target</code>.
        </p>
        <p>
          You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
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
            <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
          </p>
        </div>
        <div className="example">
          <h4>Example 2</h4>
          <p>
            <strong>Input:</strong> nums = [3, 2, 4], target = 6<br />
            <strong>Output:</strong> [1, 2]
            <br />
            <strong>Explanation:</strong> Because nums[1] + nums[2] == 6, we return [1, 2].
          </p>
        </div>
        <div className="example">
          <h4>Example 3</h4>
          <p>
            <strong>Input:</strong> nums = [3, 3], target = 6<br />
            <strong>Output:</strong> [0, 1]
            <br />
            <strong>Explanation:</strong> Because nums[0] + nums[1] == 6, we return [0, 1].
          </p>
        </div>
      </section>
      <section>
        <h3>Constraints</h3>
        <ul>
          <li>2 ≤ nums.length ≤ 10<sup>4</sup></li>
          <li>-10<sup>9</sup> ≤ nums[i] ≤ 10<sup>9</sup></li>
          <li>-10<sup>9</sup> ≤ target ≤ 10<sup>9</sup></li>
        </ul>
      </section>
      <section>
        <h2>Steps</h2>
        <ol>
          <li>Initialize two pointers, one at the beginning of the array and the other at the end. The left pointer starts at the beginning of the array (index 0). The right pointer begins at the end of the array (index 3).</li>
          <li>Calculate the sum of the elements pointed to by the two pointers.</li>
          <li>We have found the solution if the sum equals the target. Move the left pointer to the right if the sum is less than the target. If the sum is greater than the target, move the right pointer to the left.</li>
          <li>Repeat steps 2 and 3 until we find a pair that adds up to the target.</li>
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
          <p>The indices of the numbers that add up to the target are [0, 1].</p>
        </div>
      </section>
      <section>
        <h3>Java Code Implementation</h3>
        <p>Here is the Java code implementing the two-pointer approach:</p>
        <CopyBlock
          text={code}
          language={"java"}
          showLineNumbers={true}
          wrapLines={true}
          theme={dracula}
          codeBlock
          onCopy={() => copy(code)}
          style={{
            fontFamily: 'Roboto, sans-serif',
            lineHeight: 1.5
          }}
        />
      </section>
      <section>
        <h3>Conclusion</h3>
        <p>
          The two-pointer technique efficiently allows us to find pairs in a sorted array by leveraging the properties of addition. In this example, we achieved our goal by adjusting our pointers based on the calculated sums. This efficient method has a time complexity of O(n), making it suitable for larger datasets.
        </p>
      </section>
    </div>
  );
};

export default TwoSum;