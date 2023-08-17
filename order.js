let total = 0;
function addToCart(target) {
    const totalPrice = document.getElementById('total-price').innerText;
    const parseTotalPrice = parseFloat(totalPrice);

    // console.log(parseTotalPrice);
    const price = target.parentNode.parentNode.childNodes[5].innerText.split(' ');
    // console.log(price[1]);
    const parseIntPrice = parseFloat((price[1]));
    // console.log(parseIntPrice);
    total = parseFloat(total) + parseIntPrice;
    // console.log(total);

    document.getElementById('total-price').innerText = total;


}