
function mostrar() {
    let id = document.getElementById('num')
    let num = Number(id.value)

    var x1 = num * 1
    var x2 = num * 2
    var x3 = num * 3
    var x4 = num * 4
    var x5 = num * 5
    var x6 = num * 6
    var x7 = num * 7
    var x8 = num * 8
    var x9 = num * 9
    var x10 = num * 10

    document.getElementById('print').innerHTML = `Aqui está a tabuado do ${num}  <p> ${num} X 1 = ${x1} </p> <p> ${num} X 2 = ${x2} </p> <p> ${num} X 3 = ${x3} </p> <p> ${num} X 4 = ${x4} </p> <p> ${num} X 5 = ${x5} </p> <p> ${num} X 6 = ${x6} </p> <p> ${num} X 7 = ${x7} </p> <p> ${num} X 8 = ${x8} </p> <p> ${num} X 9 = ${x9} </p> <p> ${num} X 10 = ${x10} </p> `

}