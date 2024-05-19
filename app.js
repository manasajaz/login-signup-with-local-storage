// localStorage.setItem("neme", "ajaz");
// localStorage.setItem("age", "22");

// sessionStorage.setItem("neme", "ajaz");
// console.log(localStorage.getItem("neme"), localStorage.getItem("age"));
// localStorage.clear();

function signup() {
  var fname = document.getElementById("Fname").value;
  var lname = document.getElementById("Lname").value;
  var email = document.getElementById("Email").value;
  var pswd = document.getElementById("pswd").value;

  localStorage.setItem("first Name", fname);
  localStorage.setItem("last Name", lname);
  localStorage.setItem("Email", email);
  localStorage.setItem("passward", pswd);

  function gotologin() {
    alert("data successfully entered");
    window.location.href = "./login.html";
  }
  gotologin();
}
