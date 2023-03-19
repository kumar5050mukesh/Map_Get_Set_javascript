function count_word(text){
    const words= text.split(" ")
const wordmap= new Map()

for ( let word of  words){
    if (wordmap.has (word) ){
        wordmap.set(word,wordmap.get(word)+1)
    } 
    else 
    wordmap.set(word,1)
}

return wordmap
    
}

const res= count_word("my my my name is is mukesh kumar kumar")
console.log(res )