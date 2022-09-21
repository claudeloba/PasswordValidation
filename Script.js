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
  } else {
    document.getElementById("check0").style.color = "red";
  }

  if (input.match(/\d/)) {
    document.getElementById("check1").style.color = "green";
  } else {
    document.getElementById("check1").style.color = "red";
  }

  if (input.match(/[A-Z]/)) {
    document.getElementById("check2").style.color = "green";
  } else {
    document.getElementById("check2").style.color = "red";
  }

  if (input.match(/[^A-Za-z0-9-''/i]/)) {
    document.getElementById("check3").style.color = "green";
  } else {
    document.getElementById("check3").style.color = "red";
  }
}