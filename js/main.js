// ! JSNACK 1
let n1 = document.getElementById("n1")
let n2 = document.getElementById("n2")
let js1_button = document.getElementById("js1_button")


function RNG(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


js1_button.addEventListener("click",function(){
    let n1v = parseInt(n1.value)
    let n2v = parseInt(n2.value)

    if (!(isNaN(n1v) || isNaN(n2v))) {
        console.log(n1v, n2v)
        
        let result = RNG(n1v,n2v)

        alert(result)
    } else {
        alert("I numeri devono essere interi!")
    }
})