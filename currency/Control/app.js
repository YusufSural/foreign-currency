const amountInput = document.querySelector('#amount');
const firstOption = document.querySelector('#firstCurrencyOption');
const secondOption = document.querySelector('#secondCurrencyOption');
const resultInput = document.querySelector('#result');

const currency = new Currency()

runEventListener();

function runEventListener(){
    amountInput.addEventListener('input',exchange)
}

function exchange(){
    const amount = Number(amountInput.value.trim())
    const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;
    const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;
    console.log(firstOptionValue,secondOptionValue);

    currency.exchange(amount,firstOptionValue,secondOptionValue).then((result)=> {
        resultInput.value = result.toFixed(2);
    })
}