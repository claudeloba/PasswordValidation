let isVisible = false;

const grandparent = document.querySelector(".check");
const parent = Array.from(grandparent.children);

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
    parent[0].style.color = "green";
    document.querySelector("#check0 span").innerText = "Password contains 8 characters";
  } else {
    parent[0].style.color = "red";
    document.querySelector("#check0 span").innerText = "Password does not contain 8 characters";
  }

  if (input.match(/\d/)) {
    parent[1].style.color = "green";
    document.querySelector("#check1 span").innerText = "Password contains a number";
  } else {
    parent[1].style.color = "red";
    document.querySelector("#check1 span").innerText = "Password does not contain a number";
  }

  if (input.match(/[A-Z]/)) {
    parent[2].style.color = "green";
    document.querySelector("#check2 span").innerText = "Password does contain a capital letter";

  } else {
    parent[2].style.color = "red";
    document.querySelector("#check2 span").innerText = "Password does not contain a capital letter";

  }

  if (input.match(/[^A-Za-z0-9-''/i]/)) {
    parent[3].style.color = "green";
    document.querySelector("#check3 span").innerText = "Password does contain a special character";

  } else {
    parent[3].style.color = "red";
    document.querySelector("#check3 span").innerText = "Password does not contain a special character";

  }
}