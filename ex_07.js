fruits = ["Blackberries", "Mango", "Kiwi", "Peaches", "Strawberry"];

function getFruitByIndex(idx) {
    
    if (idx === -1) {
        return fruits[fruits.length - 1];
    }
    
    if (idx < 0 && idx >= fruits.length) {
        return null;
    }
    
    
    return fruits[idx];
}

let result=getFruitByIndex("4")

displayResult(result)