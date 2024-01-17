const currencyFirstEl=document.getElementById("currency-1")
const currencySecondEl=document.getElementById("currency-2")
const worthFirstEl=document.getElementById("worth-1")
const worthSecondEl=document.getElementById("worth-2")
const exchangeRateEl=document.getElementById("exchange")

updateRate()

function updateRate(){
    //console.log('Changed');
    fetch(`https://v6.exchangerate-api.com/v6/d698824c0bfda54fd4d8176b/latest/${currencyFirstEl.value}`)
    .then((res)=>res.json())
    .then((data)=>{
    const rate=data.conversion_rates[currencySecondEl.value]
    //console.log(rate);
    exchangeRateEl.innerText=`1 ${currencyFirstEl.value} = ${rate + " " + currencySecondEl.value}`
    worthSecondEl.value=(worthFirstEl.value*rate).toFixed(2)
})
}

currencyFirstEl.addEventListener("change", updateRate)

currencySecondEl.addEventListener("change", updateRate)

worthFirstEl.addEventListener("input", updateRate)