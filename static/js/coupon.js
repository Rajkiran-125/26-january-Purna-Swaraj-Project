// const getDiscountBtn = document.querySelector(".get-discount-btn");
const couponContainer = document.querySelector(".coupon-container");
const closeBtn = document.querySelector(".coupon-container .close");

// getDiscountBtn.addEventListener("click", () => {
//   couponContainer.classList.add("active");
// });

closeBtn.addEventListener("click", () => {
  couponContainer.classList.remove("active");
});

let value=sessionStorage.getItem("marks");

if(value.match("1")){
  document.getElementById("percentage").innerHTML="20%";
  document.getElementById("code").innerHTML="ABCDEF10";
  
}

else if(value.match("2")){
  document.getElementById("percentage").innerHTML="40%";  
  document.getElementById("code").innerHTML="BCDEFG20";
}

else if(value.match("3")){
  document.getElementById("percentage").innerHTML="60%";  
  document.getElementById("code").innerHTML="CDEFGH30";
}
else if(value.match("4")){
  document.getElementById("percentage").innerHTML="80%";  
  document.getElementById("code").innerHTML="DEFGHI40";
}

else if(value.match("5")){
  document.getElementById("percentage").innerHTML="100%";  
  document.getElementById("code").innerHTML="EFGHIJ50";
}

else{
  document.getElementById("percentage").innerHTML="";  
 
  document.getElementById("fail").innerHTML="";  
  document.getElementById("get").innerHTML="Not Eligible";
  document.getElementById("ans").innerHTML="";  
  document.getElementById("code").innerHTML="You are Fail";
  
}



function myFunction() {
  // Get the text field
  var copyText = document.getElementById("code");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}