$(".hamber").click(function () {
  $(".mobile-nav-list").toggle(300);
  $(".hamber").toggleClass("cross");
});

$(".go-btn").click(function () {
  
  const email = document.querySelector("input").value;

    const input_details = $(".input-details");
    if(!validateEmail(email)){
        input_details.addClass("error");
    }
    else{
        if (input_details.hasClass("error")){
            input_details.removeClass("error");
        }
    }
});

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
