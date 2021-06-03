function butt(buttlessString) {
    if (typeof buttlessString !== "string") {
        return "Can't put a butt in this"
    }
    let splitButtArray = buttlessString.split(" ")
    let math = Math.floor(Math.random()*splitButtArray.length)
    splitButtArray[math] = "butt"
    let buttfullSentence = splitButtArray.join(" ")

    return buttfullSentence
}


module.exports = { butt }