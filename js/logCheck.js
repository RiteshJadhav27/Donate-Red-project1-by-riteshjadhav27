window.addEventListener('DOMContentLoaded', () => { 
    fetch(`../Backend/loggedin.php`)
    .then(resp => resp.json())
    .then((res) => {
        if (res.stat === true) {
            const headLoginButton = document.getElementById('headLoginButton');
            const nav = document.getElementById('nav');
            const regButton = document.getElementById('regButton');
            const mainButton = document.getElementById('mainButton');

            if (headLoginButton) {
                headLoginButton.style.display = "none";
            }

            if (nav) {
                nav.innerHTML += `
                    <h5 style="font-family: var(--ff-poppins); color: white; font-weight: 500; font-size: medium;">
                        <a style="color: white; text-decoration: none;" href='../Backend/logout.php'>Logout</a>
                    </h5>&nbsp;&nbsp;&nbsp;
                    <h3 style="font-weight: bold; font-family: var(--ff-poppins); color: white; margin-left: 20px;">
                        ${res.user.name}
                    </h3>`;
            }

            if (regButton) {
                regButton.style.display = "none";
            }

            if (mainButton) {
                mainButton.innerHTML = `
                    <button style="color: white; background-color: hsl(225, 68%, 53%)"
                        class="Register" id="findButton"
                        onclick="window.location.href='../html/find.html'">
                        Find Blood
                    </button>
                    &nbsp;
                    <button style="color: white; background-color: hsl(225, 68%, 53%)"
                        class="Register" id="donateButton"
                        onclick="window.location.href='../html/check2.html'">
                        Donate
                    </button>`;
            }
        }
    })
    .catch(error => console.error('Error fetching loggedin.php:', error));
});
