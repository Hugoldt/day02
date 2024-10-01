fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];


function getIndexFromName(pif) {
     const index = fruits.indexOf(pif)
     	if (index === -1)
      return null
      
        return index
 }

const pif="banane"
displayResult(getIndexFromName(pif));