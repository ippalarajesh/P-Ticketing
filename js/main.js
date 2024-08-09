const cart = document.getElementById('cart');

const selectedSeats = new Set()
const allBtns = document.querySelectorAll('.btns')


for(btn of allBtns) {
    btn.addEventListener('click', function (e) {
        const seatNumber = this.innerText;

        if(selectedSeats.has(seatNumber)) {
            selectedSeats.add(seatNumber)
            selectSeat(seatNumber)

            // set button background color
            e.classList.add('bg-green-300')
        }
    })
}


function selectSeat(seatNumber){

    addToCart(seatNumber)

    // calculate total price
    const totalPrice = cart.childElementCount * 550;
    setInnerText('totalPrice', totalPrice)
}


function addToCart(seatNumber){
    const cartItem = document.createElement('tr')
    cartItem.innerHTML = `<td>${seatNumber}</td>
    <td>Economoy</td>
    <td>BDT 550</td>`

    cart.appendChild(cartItem)
}


function getDiscount () {
    const inputElement = document.getElementById('coupon-input');
    const input = inputElement.value;
    const totalPrice = parseFloat(getInnerText('discountPrice')).toFixed(2)
    
    if(input === 'NEW15'){
        const discount = totalPrice * (15 / 100)
        setInnerText('discountPrice', discount)
    }
    else if(input === 'Couple20'){
        const discount =  totalPrice * (20 / 100)
        setInnerText('discountPrice', discount)
    }
    else{
        alert('Invalid coupon code. Please enter valid coupon.')
    }

    // reset input field
    input.value = ''    
}



function getInnerText (elementId) {
    return document.getElementById('totalPrice').innerText;
}

function setInnerText (elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

