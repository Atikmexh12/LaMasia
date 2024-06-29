let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = ()  => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = ()  => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');

}



let header = document.querySelector('header');


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);

});

const toggleButton = document.getElementById("toggle-button");
const form = document.getElementById("form");
const formTitle = document.getElementById("form-title");
let isLogin = true;

toggleButton.addEventListener("click", () => {
  if (isLogin) {
    formTitle.textContent = "Register";
    form.innerHTML = `
      <h2 id="form-title">Register</h2>
      <fieldset style="border: none; padding: 0;">
        <legend style="padding: 0;"></legend>
        <label for="username">Username</label><br>
        <input type="text" id="username" name="username" required pattern="[a-zA-Z0-9._%+-]{3,}"><br>
        <label for="email">Email</label><br>
        <input type="email" id="email" name="email" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"><br>
        <label for="password">Password</label><br>
        <input type="password" id="password" name="password" required pattern=".{8,}"><br>
        <label for="confirm-password">Confirm Password</label><br>
        <input type="password" id="confirm-password" name="confirm-password" required pattern=".{8,}"><br>
      </fieldset>
      <button type="submit">Submit</button>
    `;
    toggleButton.textContent = "Login";
    isLogin = false;
  } else {
    formTitle.textContent = "Login";
    form.innerHTML = `
       <h2 id="form-title">Login</h2>
                    <fieldset style="border: none; padding: 0;">
                      <legend style="padding: 0;"></legend>
                      <label for="email">Email</label><br>
                      <input type="email" id="email" name="email" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"><br>
                      
                      <label for="password">Password</label><br>
                      <input type="password" id="password" name="password" required pattern=".{8,}"><br>
                      
                      <a href="#" id="forgot-password">Forgot Password?</a><br>
                    </fieldset>
                    <button type="submit">Submit</button>
    `;
    toggleButton.textContent = "Register";
    isLogin = true;
  }
});
