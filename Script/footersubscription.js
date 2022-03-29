//FOOTER SUBSCRIPTION
//VERIFY EMAIL CODES
var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const footerEmail = document.getElementById('subscribeEmail');
const footerSubscribeBtn = document.getElementById('subscribeEmailbtn');
var emailInput;

function updateValue(e) {
  emailInput = e.target.value;
}
footerEmail.addEventListener('input', updateValue)
footerSubscribeBtn.addEventListener('click', () => {
  //IF VERIFICATION OF EMAIL IS VALID, SUCCESSFUL EMAIL POP-UP WILL SHOW
  if (regex.test(emailInput)) {
    swal({
      title: "Thank you for subscribing to our newsletter!",
      text: "A confirmation email will be sent to you within 24 hours.",
      icon: "success",
    });
    footerEmail.value = '';
    emailInput = '';
    //IF VERIFICATION OF REGEX IS FALSE THEN WILL ALERT INVALID EMAIL
  } else {
    new AWN().alert('You have input an invalid email.');
    footerEmail.value = '';
  }
})
