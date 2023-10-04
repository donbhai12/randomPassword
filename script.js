let input  = document.querySelector("input");
let icon = document.querySelector("i");
let dup = document.querySelector("i");
let length  = 4;
let button = document.querySelector("button");
let number = "1234567890";
let small = "abcdefghijklmnopqrstuvwxyz";
let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let syb = "!@#$%^&*"
let allChar = number+syb+capital+small;
icon.addEventListener("click",()=>{
  input.select();
  document.execCommand("copy");
  input.selectionEnd = input.selectionStart;
  
  const alertBox = document.createElement('div');
  alertBox.textContent = 'Password copied to clipboard';
  alertBox.className = 'alert-box';

  // Position the alert box above the copy icon
  const iconRect = icon.getBoundingClientRect();
  alertBox.style.top = iconRect.top - alertBox.clientHeight - 10 + 'px';
  alertBox.style.left = iconRect.left + 'px';

  // Add the alert box to the document
  document.body.appendChild(alertBox);

  // Remove the alert box after a few seconds (e.g., 2 seconds)
  setTimeout(function() {
    document.body.removeChild(alertBox);
  }, 2000);
});
  


button.addEventListener("click",()=>{
    let password ="";
    password += capital[Math.floor(Math.random() * capital.length)]
    password += small[Math.floor(Math.random() * small.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += syb[Math.floor(Math.random() * syb.length)]
   
   for(let i = 0;i<length;i++){
    password+=allChar[Math.floor(Math.random() * allChar.length)];
   }
   
   
    input.value = password; 
})
  

dup.addEventListener("click",()=>{
    
})