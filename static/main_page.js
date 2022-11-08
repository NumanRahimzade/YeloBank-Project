let nn = document.getElementsByName('salary');
let dom = document.getElementsByClassName('dom');
for (let i=0; i < nn.length; i++) {
    
    nn[i].addEventListener("input", function() {
        let payment = (parseFloat(nn[1].value) + parseFloat(nn[1].value) *14/100)/ parseFloat(nn[2].value)
        payment = payment.toFixed(2)
        console.log(payment);
        let money_to_pay = document.getElementById('payment');
        money_to_pay.innerText = payment;
        dom[i].innerText = nn[i].value;
        
      });
}



window.addEventListener('load', (event) => {
    for (let i=0; i<dom.length; i++) {
        dom[i].innerText = nn[i].value;
    }
    
  });