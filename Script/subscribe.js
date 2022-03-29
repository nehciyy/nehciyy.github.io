//SUBSCRIPTION PAGE
var subscriptionEmailInput;
const subscriptionEmailBtn = document.getElementById('subscribeButton');
const subscriptionEmail = document.getElementById('emailInput');
subscriptionEmail.addEventListener('input', updateValue2);
function updateValue2(e){
    subscriptionEmailInput = e.target.value;
}
subscriptionEmailBtn.addEventListener('click',()=>{
  //IF VERIFICATION OF EMAIL IS VALID, SUCCESSFUL EMAIL POP-UP WILL SHOW
    if(regex.test(subscriptionEmailInput)){
        swal({
          title: "Thank you for subscribing to our newsletter!",
          text: "A confirmation email will be sent to you within 24 hours.",
          icon: "success",
        });
        subscriptionEmail.value='';
        subscriptionEmailInput='';
    //IF VERIFICATION OF REGEX IS FALSE THEN WILL ALERT INVALID EMAIL
    }else{
        new AWN().alert('You have input an invalid email.');
        subscriptionEmail.value = '';
    }
})
