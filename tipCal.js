const form = document.getElementById('form')
const tipAmountEl= document.getElementById('tip-amount')
const totalEl =document.getElementById('total')
const resetButton= document.getElementById('reset')
const billInput=document.getElementById('bill')
const peopleInput=document.getElementById('people')
const percentageBtns = document.querySelectorAll('.btn')
const customInput = document.getElementById('custom')
let tipAmount
let bill
let total
let numberOfPeople
let percentage
chooseThepercentage()
function resetTheButtons(){
    percentageBtns.forEach(btn=>btn.className="btn value-btn")
    percentageBtns[percentageBtns.length-1].className="btn btn-custom"
}

function chooseThepercentage(){
    
    percentageBtns.forEach(btn=>{
        btn.addEventListener('click',(e)=>{
            if(e.target.classList.contains('value-btn')){
            
                percentage=e.target.value/100;
                resetTheButtons()
                e.target.classList.add('active')
            }
         })
    })
}
function calcTip(bill,nop,custom){
    resetTheInputs()
    if(custom){
        tipAmount = +((bill/nop)*custom).toFixed(2)
        resetTheButtons();
    }
    else{
        tipAmount = +((bill/nop)*percentage).toFixed(2)
       
    }
    total = +(bill/nop+tipAmount).toFixed(2)
    showAnswer(tipAmount,total)
}

function resetTheInputs(){
    tipAmountEl.innerText='$0.00'
    totalEl.innerText="$0.00"
}

function showAnswer(tip,total){
    if(tip||total){
        resetButton.disabled=false
        tipAmountEl.innerText='$'+tip
        totalEl.innerText='$'+total
    }
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()    
    if(peopleInput.value==="" || peopleInput.value==="0"){
        alert('Number of people cant be zero')
    }
        calcTip(+billInput.value,+peopleInput.value,+customInput.value/100)
 
})
resetButton.addEventListener('click',()=>{
    resetTheInputs();
    resetTheButtons()
    resetButton.disabled=true
    billInput.value='';
    peopleInput.value='';
})


