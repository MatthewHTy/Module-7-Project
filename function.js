
// const isPangram = (string) => {
//     for (int i = 0; i < str.length(); i++) {
//         if ('A' <= str[i] && str[i] <= 'Z')
//             index = str[i] - 'A';
//         else if ('a' <= str[i] && str[i] <= 'z')
//             index = str[i] - 'a';
//     }
 
//     for (int i = 0; i <= 25; i++)
//         if (mark[i] == false)
//             return (false);
//             return (true);
// }
 
// int main()
// {
//     string str = "The quick brown fox jumps over the"
//                  " lazy dog";
 
//     if (isPangram(str) == true)
//         printf(" %s is a pangram", str.c_str());
//     else
//         printf(" %s is not a pangram", str.c_str());
 
//     return (0);
// }

// Code wouldn't work -_-

// 


// Problem 2
const hasUniqueChars = (string) => {
    let arr = []
    for (let i = 0; i < string.length; i++) {
        if (arr.includes(string[i].toLowerCase())) {
			return false;
		} else {
			arr.join('');
			arr.push(string[i]);
		}
	}

	return true;
};

console.log(hasUniqueChars('Mathew'))
console.log(hasUniqueChars('Madelyn'))
console.log(hasUniqueChars('Madie'))
console.log(hasUniqueChars('Matt & Maddie'))
console.log(hasUniqueChars('Matthew'))

// Problem 4

function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
    return maxLength;
  }
  
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");

console.log(findLongestWordLength('Hello there'))
console.log(findLongestWordLength('Hello'))
console.log(findLongestWordLength('There'))
//  still testing
