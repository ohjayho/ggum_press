const btn_submit = document.querySelector(".btn_submit");
const contact_inputs = document.querySelectorAll(".contact_input");
const contact_name = document.querySelector(".contact_name");
const contact_phone = document.querySelector(".contact_phone");
const contact_email = document.querySelector(".contact_email");
const contact_msg = document.querySelector(".contact_msg");

let client_name,
  client_phone,
  client_email,
  client_msg = "";

//Get values and fields reset after submit
// btn_submit.addEventListener("click", function (e) {
//   //reset
//   e.preventDefault();
//   contact_inputs.forEach((input) => {
//     input.value = "";
//   });
// });
