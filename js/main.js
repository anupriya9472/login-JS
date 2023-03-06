const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    login();
});

function login() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let registeredMember = JSON.parse(localStorage.getItem('registeredMember'));
    if (registeredMember) {
        let flag = 0;
        let name = "";
        registeredMember.forEach(user => {
            if (user.email === email && user.password === password) {
                flag = 1;
                name = user.fullname;
            }
        });
        if (flag == 1) {
            alert("Welcome " + name);
            location.reload();
        } else {
            alert("Please register yourself before login!");
        }
    } else {
        alert("Something Wrong!");
    }
}