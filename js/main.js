// ! JSNACK 1
let n1 = document.getElementById("n1")
let n2 = document.getElementById("n2")
let js1_button = document.getElementById("js1_button")


function RNG(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


js1_button.addEventListener("click", function () {
    let n1v = parseInt(n1.value)
    let n2v = parseInt(n2.value)


    if (!(isNaN(n1v) || isNaN(n2v)) && (n1v != n2v)) {

        //rendi il numero positivo
        n1v = (n1v < 0) ? n1v * -1 : n1v
        n2v = (n2v < 0) ? n2v * -1 : n2v

        let result = RNG(n1v, n2v)
        alert(result)
    } else {
        alert("I dati devono essere diversi e/o numeri interi!")
    }
})


// ! JSNACK 2
let word1 = document.getElementById("word1")
let word2 = document.getElementById("word2")
let js2_button = document.getElementById("js2_button")
let js2_display = document.getElementById("js2_display")

js2_button.addEventListener("click", function () {

    let w1 = word1.value
    let w2 = word2.value


    if (w1 && w2) {
        if (w1.length == w2.length) {
            js2_display.innerHTML = `${w1} e ${w2}`
        } else if (w1.length > w2.length) {
            js2_display.innerHTML = w1
        } else {
            js2_display.innerHTML = w2
        }
    } else {
        alert("Devi inserire due parole!")
    }

})
