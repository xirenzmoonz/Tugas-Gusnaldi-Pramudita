function isValid(s) {
    let stack = [];
    let mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char in mapping) { // Jika char adalah kurung tutup
            let topElement = stack.length ? stack.pop() : '#';
            if (topElement !== mapping[char]) {
                return false; // Kurung tidak cocok
            }
        } else {
            stack.push(char); // Simpan kurung buka ke stack
        }
    }

    return stack.length === 0; // Stack harus kosong jika valid
}

// Contoh penggunaan:
console.log(isValid("()[]{}"));   
console.log(isValid("(]"));    
console.log(isValid("([{}])"));   
console.log(isValid("({[}]"));    
