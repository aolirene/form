const form = document.querySelector("form");


form.addEventListener("submit",event => {
    event.preventDefault();
const username = document.querySelector("[name= 'username']").value.trim();
const email = document.querySelector("[name='email']").value.trim();
const password = document.querySelector("[name='password']").value.trim();
const confirmPassword = document.querySelector("[name='confirm-password']").value.trim();

const errors=[];
if (username === '')
errors.push("Username cannot be blank"); 
if (email === '')
errors.push("Email cannot be blank");
if (password === '')
errors.push("Password cannot be blank");
if (password !== confirmPassword)
errors.push("Passwords must match");

if(errors.length > 0)
{
    for(let i=0; i<errors.length; i++)
    {
        Toastify({
            Text: errors[i],
            duration: 4000,
            gravity: "top",
            position: "center",
            style: { 
                background: "#DF1C24"
            }
        }).showToast();
    }
} 
else
{
    Toastify({
        text: "Successful!",
        gravity: "top",
        position: "center",
        style: {
            background: "#4bab4e",
            duration: 4000,
        }
    }).showToast
}
});