// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    var areIdentical;
    if (str1.length !== str2.length) {

        areIdentical = false;
    }
    else {
        if ((str1.length === 1 && str2.length ===1) && (str1[0] === str2[0])) {
            areIdentical = true;
        }
        else if(str1[0] !== str2[0]) {
            areIdentical = false;
        }
        else {
            str1 = str1.slice(1, str1.length);
            str2 = str2.slice(1, str2.length);
            return compareStr(str1, str2);
        }
    }
    return areIdentical;
};

console.log(compareStr('apple store', 'apple store'));
//first check if the lengths are the same; if they are not the same, automatically return false
//have a variable areIdentical 
//pass each string and check the value at index[0] on each pass
//if they are the same
    //pass the string with the first value slices
//if they are not the same
    //return false