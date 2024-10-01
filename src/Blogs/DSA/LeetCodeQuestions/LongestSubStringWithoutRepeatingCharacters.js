import React from "react";
import "./LeetCode.css"; // Import CSS for styling

const LongestSubStringWithoutRepeatingCharacters = () => {
    const copyToClipboard = () => {
        const code = `public int lengthOfLongestSubstring(String s) {
    // Initialize two pointers for the sliding window: 'start' and 'end'
    int start = 0; // Start index of the current substring
    int end = 0; // End index of the current substring
    int maxLength = 0; // Variable to store the maximum length found

    // List to track the current substring characters
    List<Character> subStrList = new ArrayList<>();

    // Iterate until the end pointer reaches the length of the string
    while (end < s.length()) {
        // If the character at 'end' is not in the current substring list
        if (!subStrList.contains(s.charAt(end))) {
            // Add the character at 'end' to the substring list
            subStrList.add(s.charAt(end));
            // Move 'end' pointer to the right
            end++;
            // Update the maximum length found
            maxLength = Math.max(maxLength, subStrList.size());
        } else {
            // If the character at 'end' is already in the substring
            // Remove the character at 'start' from the list
            subStrList.remove(Character.valueOf(s.charAt(start)));
            // Move 'start' pointer to the right to shrink the window
            start++;
        }
    }
    // Return the maximum length of substring found
    return maxLength;
}`;
        navigator.clipboard.writeText(code);
        alert('Code copied to clipboard!');
      };
  return (
    <div className="two-sum-container">
      <h2>
        <a href="https://leetcode.com/problems/longest-substring-without-repeating-characters">
          3. Longest Substring Without Repeating Characters
        </a>
      </h2>
      <h3>Medium</h3>
      <hr />
      <p>
        Given a string <code>s</code>, find the length of the{" "}
        <strong>longest</strong>{" "}
        <span data-keyword="substring-nonempty">
          <strong>substring</strong>
        </span>{" "}
        without repeating characters.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = &quot;abcabcbb&quot; <br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> The answer is &quot;abc&quot;, with the
        length of 3.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = &quot;bbbbb&quot;
        <br />
        <strong>Output:</strong> 1<br />
        <strong>Explanation:</strong> The answer is &quot;b&quot;, with the
        length of 1.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = &quot;pwwkew&quot;
        <br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> The answer is &quot;wke&quot;, with the
        length of 3. Notice that the answer must be a substring,
        &quot;pwke&quot; is a subsequence and not a substring.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            0 &lt;= s.length &lt;= 5 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>s</code> consists of English letters, digits, symbols and
          spaces.
        </li>
      </ul>

      <section></section>

      <section>
        <h2>Explanation of Visual Table</h2>
        <p>
          Initialization: At the beginning, both the start and end pointers
          point to the first character, and the maximum length (
          <code>maxLength</code>) is 0.
        </p>
        <p>
          Adding Characters: As we iterate, we add characters to the{" "}
          <code>subStrList</code> when they are unique, updating the{" "}
          <code>maxLength</code> accordingly.
        </p>
        <p>
          Handling Duplicates: When a duplicate character is encountered, we
          remove characters from the beginning of the substring (moving the
          start pointer) until the substring can include the new character. This
          process continues until all characters are processed.
        </p>
        <p>
          Final Output: After all iterations, the maximum length of the
          substring without repeating characters remains at 3.
        </p>
      </section>
      <section>
        <h2>Visual Representation of the Algorithm</h2>
        <p><strong>Input String:</strong> "abcabcbb"</p>
        <pre>
Index:   0   1   2   3   4   5   6   7  <br />
String:  [a] [b] [c] [a] [b] [c] [b] [b]  <br />
          ↑  
        start  
          ↑  
        end  

Current Substring: []  
Max Length: 0  
        </pre>
        <h3>Step-by-Step Process</h3>
        <pre>
<strong>Step 1:</strong> Add 'a'
Index:   0   1   2   3   4   5   6   7  
String:  [a] [b] [c] [a] [b] [c] [b] [b]  
          ↑  
        start  
              ↑  
            end  

Current Substring: [a]  
Max Length: 1  

<strong>Step 2:</strong> Add 'b'
Index:   0   1   2   3   4   5   6   7  
String:  [a] [b] [c] [a] [b] [c] [b] [b]  
          ↑  
        start  
                  ↑  
                end  

Current Substring: [a, b]  
Max Length: 2  

<strong>Step 3:</strong> Add 'c'
Index:   0   1   2   3   4   5   6   7  
String:  [a] [b] [c] [a] [b] [c] [b] [b]  
          ↑  
        start  
                    ↑  
                  end  

Current Substring: [a, b, c]  
Max Length: 3  

<strong>Step 4:</strong> Encounter 'a' (duplicate)
Remove 'a' from the substring.
Index:   0   1   2   3   4   5   6   7  
String:  [a] [b] [c] [a] [b] [c] [b] [b]  
              ↑  
            start  
                    ↑  
                  end  

Current Substring: [b, c]  
Max Length: 3  

<strong>Step 5:</strong> Add 'a'
Index:   0   1   2   3   4   5   6   7  
String:  [a] [b] [c] [a] [b] [c] [b] [b]  
              ↑  
            start  
                      ↑  
                    end  

Current Substring: [b, c, a]  
Max Length: 3  

<strong>Step 6:</strong> Encounter 'b' (duplicate)
Remove 'b' from the substring.
Index:   0   1   2   3   4   5   6   7  
String:  [a] [b] [c] [a] [b] [c] [b] [b]  
                  ↑  
                start  
                      ↑  
                    end  

Current Substring: [c, a]  
Max Length: 3  

<strong>Step 7:</strong> Add 'b'
Index:   0   1   2   3   4   5   6   7  
String:  [a] [b] [c] [a] [b] [c] [b] [b]  
                  ↑  
                start  
                        ↑  
                      end  

Current Substring: [c, a, b]  
Max Length: 3  

<strong>Step 8:</strong> Encounter 'b' (duplicate)
Remove 'c' from the substring.
Index:   0   1   2   3   4   5   6   7  
String:  [a] [b] [c] [a] [b] [c] [b] [b]  
                      ↑  
                    start  
                        ↑  
                      end  

Current Substring: [a, b]  
Max Length: 3  

<strong>Step 9:</strong> Encounter 'b' (duplicate)
Remove 'a' from the substring.
Index:   0   1   2   3   4   5   6   7  
String:  [a] [b] [c] [a] [b] [c] [b] [b]  
                        ↑  
                      start  
                        ↑  
                      end  

Current Substring: [b]  
Max Length: 3  

<strong>Step 10:</strong> Encounter 'b' (duplicate)
Remove 'b' from the substring.
Index:   0   1   2   3   4   5   6   7  
String:  [a] [b] [c] [a] [b] [c] [b] [b]  
                          ↑  
                        start  
                          ↑  
                        end  

Current Substring: []  
Max Length: 3  
        </pre>
        <p><strong>Final Result:</strong></p>
        <p>After processing all characters in the string, the maximum length of the substring without repeating characters found is 3.</p>
      </section>
      <section>
        <h3>Java Code Implementation</h3>
        <p>Here is the Java code implementing the logic described above:</p>
        <div className="code-container">
          <button onClick={copyToClipboard} className="copy-button">
            Copy
          </button>
          <pre>
            <code className="language-java">
{`1.  public int lengthOfLongestSubstring(String s) {
2.      // Initialize two pointers for the sliding window: 'start' and 'end'
3.      int start = 0; // Start index of the current substring
4.      int end = 0; // End index of the current substring
5.      int maxLength = 0; // Variable to store the maximum length found
6.  
7.      // List to track the current substring characters
8.      List<Character> subStrList = new ArrayList<>();
9.  
10.     // Iterate until the end pointer reaches the length of the string
11.     while (end < s.length()) {
12.         // If the character at 'end' is not in the current substring list
13.         if (!subStrList.contains(s.charAt(end))) {
14.             // Add the character at 'end' to the substring list
15.             subStrList.add(s.charAt(end));
16.             // Move 'end' pointer to the right
17.             end++;
18.             // Update the maximum length found
19.             maxLength = Math.max(maxLength, subStrList.size());
20.         } else {
21.             // If the character at 'end' is already in the substring
22.             // Remove the character at 'start' from the list
23.             subStrList.remove(Character.valueOf(s.charAt(start)));
24.             // Move 'start' pointer to the right to shrink the window
25.             start++;
26.         }
27.     }
28.     // Return the maximum length of substring found
29.     return maxLength;
30. }`}
            </code>
          </pre>
        </div>
      </section>
    </div>
  );
};

export default LongestSubStringWithoutRepeatingCharacters;
