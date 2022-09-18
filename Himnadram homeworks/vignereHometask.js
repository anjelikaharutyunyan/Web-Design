function encrypt(plaintext, key){
    plaintext = plaintext.toUpperCase();
    key = key.toUpperCase();
    let data = "";
    if(plaintext.length === key.length){
        key = key;
    }
    else {
        key = Array.from(key);
        let newLength = key.length;
        for(let i = 0; i < plaintext.length; i++){
            key.push(key[i % key.length]);
        }
    }
    for(let i = 0; i < plaintext.length; i++){
        let string = (plaintext[i].charCodeAt(0) % 26);
        string += 'A'.charCodeAt(0);
        data += String.fromCharCode(string);
    }
    return data;
}
let value = encrypt("thank you","cover");
console.log(value);