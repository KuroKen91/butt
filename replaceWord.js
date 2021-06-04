function randomReplace(replaceWord, sentence) {
    if (typeof replaceWord  !== "string" && typeof sentence !== "string" ) {
        return "Can't put a butt in this"
    }
    let sentenceArray = sentence.split(" ")
    let math = Math.floor(Math.random()*sentenceArray.length)
    sentenceArray[math] = replaceWord
    let finalSentence = sentenceArray.join(" ")

    return finalSentence
}


module.exports = { randomReplace }