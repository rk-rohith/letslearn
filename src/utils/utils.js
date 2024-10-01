// utils.js
export const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };
  
  export const addLineNumbers = (code) => {
    return code.split('\n').map((line, index) => (
      <span key={index}>
        {index + 1}. {line}
        <br />
      </span>
    ));
  };