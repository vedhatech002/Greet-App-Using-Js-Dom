// getting html elements via dom selectors
const userInputEl = document.getElementById("input-name");
const submitBtn = document.getElementById("submit-btn");
const popupEl = document.getElementById("greet-popup");
const popupNameEl = document.getElementById("user-name");
const popupCloseBtn = document.getElementById("close-btn");
const errorMsg = document.getElementById("error-msg");

submitBtn.addEventListener("click", handleinput);

function handleinput() {
  let userName = userInputEl.value;
  let namelength = userName.length;

  if (userName !== "") {
    if (namelength >= 3 && namelength <= 20) {
      let captalizieName = captalize(userName);
      popupNameEl.innerText = captalizieName;
      popupEl.style.visibility = "visible";

      popupCloseBtn.addEventListener("click", (e) => {
        e.target.parentElement.style.visibility = "hidden";
        userInputEl.value = "";
      });
    } else {
      errorMsg.innerText = "username mustbe 3 to 20 characters  only";
    }
  } else {
    errorMsg.innerText = "please fill the Name!..";
  }
}

// clear errormsg using keyboard event
userInputEl.addEventListener("keyup", () => {
  errorMsg.innerText = "";
});

// function to captalize function
function captalize(name) {
  let split = name.split(" ");
  let finilaizeName = split.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return finilaizeName.join(" ");
}
