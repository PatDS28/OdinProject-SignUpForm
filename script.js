
const button = document.getElementById('submitBtn')

console.log(password);
button.addEventListener("click",()=>{
  event.preventDefault();
  const password = document.getElementById('password').value;
  const cpassword = document.getElementById('cpassword').value;
  // console.log(password);
  console.log(password);
  console.log(cpassword)
  if(password == cpassword){
    console.log("Matched")
  }
  else{
    console.log("Not Matched")
  }
})
