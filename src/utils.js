export function isPalindrome(word) {
    if (typeof word !== "string") {
      throw new Error("Input must be a string");
    }
  
    if (word.length === 0) {
      return false;  // <<< Move this check BEFORE regex
    }
  
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error("Input must contain only letters");
    }
  
    const normalized = word.toLowerCase();
    return normalized === normalized.split("").reverse().join("");
  }
  