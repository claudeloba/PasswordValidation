let isVisible = false;

let see = () => {
  let input = document.getElementById("password");
  let see = document.getElementById("see");

  if (isVisible) {
    input.type = "password";
    isVisible = false;
    see.style.color = "grey";
  } else {
    input.type = "text";
    isVisible = true;
    see.style.color = "black";
  }
}

const check = () => {
  let input = document.getElementById("password").value;
  input = input.trim();
  document.getElementById("password").value = input;
  document.getElementById("count").innerText = "Length : " + input.length;

  if (input.length >= 8) {
    document.getElementById("check0").style.color = "green";
    document.getElementById("eight").innerText = "Password contains 8 characters";
  } else {
    document.getElementById("check0").style.color = "red";
    document.getElementById("eight").innerText = "Password does not contain 8 characters";
  }

  if (input.match(/\d/)) {
    document.getElementById("check1").style.color = "green";
    document.getElementById("numbCheck").innerText = "Password contains a number";
  } else {
    document.getElementById("check1").style.color = "red";
    document.getElementById("numbCheck").innerText = "Password does not contain a number";
  }

  if (input.match(/[A-Z]/)) {
    document.getElementById("check2").style.color = "green";
    document.getElementById("capital").innerText = "Password does contain a capital letter";

  } else {
    document.getElementById("check2").style.color = "red";
    document.getElementById("capital").innerText = "Password does not contain a capital letter";

  }

  if (input.match(/[^A-Za-z0-9-''/i]/)) {
    document.getElementById("check3").style.color = "green";
    document.getElementById("special").innerText = "Password does contain a special character";

  } else {
    document.getElementById("check3").style.color = "red";
    document.getElementById("special").innerText = "Password does not contain a special character";

  }
}