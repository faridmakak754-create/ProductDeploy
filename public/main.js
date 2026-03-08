// =======================
// Load Header
// =======================

fetch("header.html")
.then(response => response.text())
.then(data => {

    document.getElementById("header").innerHTML = data;

    // run navbar update AFTER header loads
    updateNavbar();

});


// =======================
// Load Footer
// =======================

fetch("footer.html")
.then(response => response.text())
.then(data => {

    document.getElementById("footer").innerHTML = data;

});


// =======================
// Sidebar Open / Close
// =======================

function openClose() {

    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    sidebar.classList.toggle("-left-64");
    overlay.classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden");

}


// =======================
// Navbar Update (Login / Logout)
// =======================

function updateNavbar(){

    const loggedIn = localStorage.getItem("loggedIn");

    const authLink = document.getElementById("authLink");
    const dashboardLink = document.getElementById("dashboardLink");

    if(!authLink || !dashboardLink) return;

    if(loggedIn){

        // change Login → Logout
        authLink.textContent = "Logout";
        authLink.href = "#";

        // show dashboard link
        dashboardLink.classList.remove("hidden");

        authBtn.classList.remove("bg-blue-600");
        authBtn.classList.add("bg-red-600")

        // logout event
        authLink.onclick = function(e){

            e.preventDefault();
            logout();

        };

    }

}


// =======================
// Logout
// =======================
function logout() {

    fetch("http://localhost:8080/Product/api/logout", {
        method: "POST"
    })
    .then(res => res.json())
    .then(data => {

        localStorage.removeItem("token");
        localStorage.removeItem("loggedIn"); // IMPORTANT

        window.location.href = "login.html";
    });

}