// Code your solutions in this file




/**   for(let age =30; age< 40; age++){
    console.log(`I am ${age} years old, happy birthday to me`);

} **/





 const gifts = ["Teddy Bear", "Drone", "Doll"];

function wrapGifts(gifts){
    for(i=0; i<gifts.length; i++){
        console.log(`wrapped ${gifts[i]} and added a bow!`)

    }
    return gifts
}

wrapGifts(gifts);




const gift =["Teddy Bear", "Drone", "Doll"]

function wrappedGift(){
    let i=0;
    while (i<gift.length) {
        console.log(`wrapped ${gift[i]} and added a bow`); i++;
    }
    return gift
}

wrappedGift(gift)






// WRITECARDS Function 


function writeCards(naames){
    const arrName = []
    for(let i = 0; i < naames.length; i ++){

        arrName.push(`Thank you, ${naames[i]}, for the wonderful surprise gift!`)
//return `Thank you, ${naames[i]}, for the wonderful surprise gift!`
}

return arrName}

writeCards(naames);





function countDown(num){
    let i =0; 
    while ( num>=i){
      console.log(num); num--;
    }
    return num;
  }
  
  countDown(10);