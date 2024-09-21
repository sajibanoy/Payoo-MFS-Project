// step-1: set the event handler
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    // step-2: prevent reloading browser(jodi form er vitore thake taholei eta likhte hobe. Input ba textarea er jonno likhte hobe na)

    event.preventDefault();
    // console.log("login button clicked"); (button click pailam)

    // step-3: get the mobile & pin number
    const mobileNumber = document.getElementById("mobile-number").value;
    // console.log(mobileNumber);  (phn no pailam)

    const pinNumber = document.getElementById("pin-number").value;
    // console.log(pinNumber); (pin no pailam)

    // step-4: validation mobile & pin number
    if (mobileNumber === "5" && pinNumber === "1234") {
      // console.log("you are logged in");
      window.location.href = "/home.html";
    } else {
      alert("wrong mobile or pin number");
    }
  });
