function writeCards(giftors, msg) {
    const cards = [];
    for (let i = 0; i < giftors.length; i++) {
       cards.push(`Thank you, ${giftors[i]}, for the wonderful ${msg} gift!`)
    }
    return cards
}   

function countDown(number) {
    while (number > 0) {
        console.log(number--)
    }
    console.log(number)
}


