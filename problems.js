const sumZero = (arr) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] + arr[i] === 0){
            return true
        }
    }
    return false
}

addToZero([1, 2, 3, 4, 5])  
//it will return false because none of these numbers together eqaul zero.
//console logged on repl.it




const uniqueChar = (str) => {
    for(let i = 0; i < str.length; i++){
        if(i !== i && str[i] === hello[i]){
            return false
        }
    }
return true
}

uniqueChar('hello')              //function will return false
//this function will return true because it is equal to the length of the string being passed in.
//console logged on repl.it




const isPangram = (str) => {
    str = str.toLowerCase()
const alphabet = {
    a:0,
    b:0,
    c:0,
    d:0,
    e:0,
    f:0,
    g:0,
    h:0,
    i:0,
    j:0,
    k:0,
    l:0,
    m:0,
    n:0,
    o:0,
    p:0,
    q:0,
    r:0,
    s:0,
    t:0,
    v:0,
    w:0,
    x:0,
    y:0,
    z:0,
}
for(let i = 0; i<str.length; i++){
    if(alphabet[str[i]]===0){
        alphabet[str[i]] += 1
    }
}
for (let key in alphabet){
    if(alphabet[key] === 0){
        return false
    }
}
return true
}

isPangram("The quick brown fox jumps over the lazy dog.")
//all of the letters in the alphabet are being used in this sentence so this function will return true
//console logged on repl.it


const findLongestWord = (arr) => {
    let longestLength = 0
    arr.forEach (str => {
        if(str.length > longestLength) {
            longestLength = str.length
        }
    })
    return longestLength
}

findLongestWord(["me", "you", "they"])
//this function will return the number 4, counting the letters in the str "they".
