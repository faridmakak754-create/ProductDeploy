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

function updateNavbar() {

    const loggedIn = localStorage.getItem("loggedIn");

    const authLinkDesktop = document.getElementById("authLinkDesktop");
    const authBtnDesktop = document.getElementById("authBtnDesktop");
    const dashboardLinkDesktop = document.getElementById("dashboardLinkDesktop");

    const authLinkMobile = document.getElementById("authLinkMobile");
    const authBtnMobile = document.getElementById("authBtnMobile");
    const dashboardLinkMobile = document.getElementById("dashboardLinkMobile");

    if (loggedIn) {

        // Desktop
        authLinkDesktop.textContent = "Logout";
        authLinkDesktop.href = "#";
        dashboardLinkDesktop.classList.remove("hidden");
        authBtnDesktop.classList.remove("bg-blue-600");
        authBtnDesktop.classList.add("bg-red-600");

        // Mobile
        authLinkMobile.textContent = "Logout";
        authLinkMobile.href = "#";
        dashboardLinkMobile.classList.remove("hidden");
        authBtnMobile.classList.remove("bg-blue-600");
        authBtnMobile.classList.add("bg-red-600");

        authLinkDesktop.onclick = logout;
        authLinkMobile.onclick = logout;
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