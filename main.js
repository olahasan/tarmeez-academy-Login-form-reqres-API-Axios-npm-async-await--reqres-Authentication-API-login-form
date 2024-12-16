let button = document.getElementsByTagName("button")[0];
let inputEmail = document.querySelector('input[type="email"]');
let inputPassword = document.querySelector('input[type="password"]');
// console.log(button);
// console.log(inputEmail);
// console.log(inputPassword);

button.onclick = async function () {
  let emailValue = inputEmail.value;
  let passwordValue = inputPassword.value;
  //   console.log(inputEmail.value);
  //   console.log(inputPassword.value);
  try {
    let response = await login(emailValue, passwordValue);
    // console.log(response);
    window.location.href = "index2.html";
  } catch (error) {
    // console.log("Login failed:", error);
    // console.log("Login failed:", error.response.data.error);
    alert(`Login failed: ${error.response.data.error}`);
  }
};

function login(emailValue, passwordValue) {
  let userData = {
    email: emailValue,
    password: passwordValue,
    ////////////////////////////////////////////////////////////////
    // if you want to login successful you should copy those values and past them into input fields
    // email: "charles.morris@reqres.in",
    // password: "pistol",
    ////////////////////////////////////////////////////////////////
  };

  return axios
    .post("https://reqres.in/api/login", userData)
    .then(function (response) {
      //   console.log(response);
      //   console.log(response.data.token);
      return response;
    })
    .catch(function (error) {
      //   console.log(error);
      //   console.log(error.response.data.error);
      throw error;
    });
}
