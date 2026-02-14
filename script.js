function checkPassword() {

    const password = document.getElementById("passwordInput").value;

    const correctPassword = "iloveyou";

    if(password === correctPassword) {

        document.getElementById("lockScreen").style.display = "none";

        document.getElementById("universe").style.display = "flex";

    }

    else {

        document.getElementById("errorMessage").innerText = "Wrong password";

    }

}
