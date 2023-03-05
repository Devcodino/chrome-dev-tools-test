let registerbtn = document.querySelector(".devc-btn-register");

registerbtn.onclick = (event) => {
  event.preventDefault();
  alert("Register zurzeit nicht Möglich");
  console.error("ErrorCode: 869 => Login zurzeit deaktiviert");
};
