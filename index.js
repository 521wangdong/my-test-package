function zoina() {
    console.log('use zoina JS库') 
}
zoina.trim = function (str) {
    return str.replace(/\s*/g, "");
}
zoina.default = function (x, y) {
    return x + y;
}



export default zoina