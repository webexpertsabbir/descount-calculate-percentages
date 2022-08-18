
function getInputField(input){
  const carentInputField = document.getElementById(input);
  const newInputField = carentInputField.value;
  return newInputField;
}

function getElementValue(value){
  const carentPrice = document.getElementById(value);
  const carentPriceString = carentPrice.innerText;
  const previousPrice = parseFloat(carentPriceString);
  return previousPrice;
}

function setTotalPrice(total, newValue){
  const setPrice = document.getElementById(total);
  setPrice.innerText = newValue;
}

document.getElementById('btn-dis').addEventListener('click', function(){
  const carentInput = getInputField('input-field');
  const carentPriceTotal = getElementValue('total')
  // console.log(carentPriceTotal);
  if(carentInput === 'DOM'){
    const carentPriceTotal = getElementValue('total');
    const priceParcent = (carentPriceTotal / 100) * 70;
    setTotalPrice('total', priceParcent);
  }
  else(
    alert('apner copon ti vul hoyeche')
  )
})