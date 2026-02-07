let clicks = 0
let prestigepoints = 0
function myFunction(){
    clicks++
    console.log(clicks)
}
function moreclicks(){
    if (clicks < 50){
        alert("not 50 clicks yet")
    }
    else{
        clicks += 2
        console.log(clicks)
    }
}
function moreclicks2(){
    if (clicks < 150){
        alert("not 150 clicks yet")
    }
    else{
        clicks += 4
        console.log(clicks)
    }
}
function moreclicks3(){
    if (clicks < 500){
        alert("not 500 clicks yet")
    }
    else{
        clicks += 8
        console.log(clicks)
    }
}
function moreclicks4(){
    if (clicks < 1250){
        alert("not 1250 clicks yet")
    }
    else{
        clicks += 16
        console.log(clicks)
    }
}
function moreclicks5(){
    if (clicks < 5500){
        alert("not 5500 clicks yet")
    }
    else{
        clicks += 32
        console.log(clicks)
    }
}
function moreclicks6(){
    if (clicks < 14000){
        alert("not 14000 clicks yet")
    }
    else{
        clicks += 64
        console.log(clicks)
    }
}
function moreclicks7(){
    if (clicks < 56000){
        alert("not 56000 clicks yet")
    }
    else{
        clicks += 128
        console.log(clicks)
    }
}
function moreclicks8(){
    if (clicks < 167000){
        alert("not 167000 clicks yet")
    }
    else{
        clicks += 256
        console.log(clicks)
    }
}
function moreclicks9(){
    if (clicks < 445000){
        alert("not 445000 clicks yet")
    }
    else{
        clicks += 512
        console.log(clicks)
    }
}
function moreclicks10(){
    if (clicks < 1250000){
        alert("not 1.25 million clicks yet")
    }
    else{
        clicks += 2048
        console.log(clicks)
    }
}
function moreclicks11(){
    if (clicks < 3600000){
        alert("not 3.6 million clicks yet")
    }
    else{
        clicks += 5000
        console.log(clicks)
    }
}
function moreclicks12(){
    if (clicks < 5000000){
        alert("not 5 million clicks yet")
    }
    else{
        clicks += 12000
        console.log(clicks)
    }
}
function moreclicks13(){
    if (clicks < 9700000){
        alert("not 9.7 million clicks yet")
    }
    else{
        clicks += 27000
        console.log(clicks)
    }
}
function moreclicks14(){
    if (clicks < 27000000){
        alert("not 27 million clicks yet")
    }
    else{
        clicks += 67000
        console.log(clicks)
    }
}
function moreclicks15(){
    if (clicks < 54000000){
        alert("not 54 million clicks yet")
    }
    else{
        clicks += 134000
        console.log(clicks)
    }
}
function moreclicks16(){
    if (clicks < 87000000){
        alert("not 87 million clicks yet")
    }
    else{
        clicks += 246000
        console.log(clicks)
    }
}
function moreclicks17(){
    if (clicks < 298000000){
        alert("not 298 million clicks yet")
    }
    else{
        clicks += 387000
        console.log(clicks)
    }
}
function moreclicks18(){
    if (clicks < 456000000){
        alert("not 456 million clicks yet")
    }
    else{
        clicks += 683000
        console.log(clicks)
    }
}
function moreclicks19(){
    if (clicks < 1000000000){
        alert("not 1 billion clicks yet")
    }
    else{
        clicks += 2200000
        console.log(clicks)
    }
}
function prestigepoint(){
    if (clicks < 100000000000){
        alert("not 100 billion clicks yet")
    }
    else{
        clicks -= 100000000000
        prestigepoints += 1
        console.log(clicks)
        console.log(prestigepoints)
    }
}
function win(){
    if (prestigepoints < 250){
        alert("not 250 prestigepoints yet")
    }
    else{
        alert("You've finished the game")
    }
}