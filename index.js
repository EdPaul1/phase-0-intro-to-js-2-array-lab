// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push("Ralph")
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    return appendCat = [...cats, "Broom"];
}
function prependCat(name){
    return prependCat = ["Arnold",...cats];
}
function removeLastCat(){
    let cats1;
    cats1 = cats.slice(0,2);
    return cats1;
    
}
function removeFirstCat(){
    let cats2;
    cats2 = cats.slice(1);
    return cats2;
}