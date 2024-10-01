function getBasketContent(param){
    let fruits = ["strawberry","strawberry","strawberry", "apple-1","apple-1","le","lime" ,"peach" ,"pear","pear"]
    if (param>fruits.length){
    console.log ("Too many fruit(s)selected")
    return
    }
    else 
    console.log (param + " fruit+(s) selected ")
    return fruits.slice (0, param)
    }
    
    let fruits = getBasketContent(20)
    showMyBasket(fruits)