
    // load header
    fetch("header.html")
    .then(response => response.text())
    .then(data =>{
        document.getElementById("header").innerHTML =data;
    });

    // load footer
    fetch ("footer.html")
    .then(response => response.text())
    .then(data =>{
        document.getElementById("footer").innerHTML =data;

    } );


    function openClose() {
        const sidebar = document.getElementById("sidebar");
        const overlay = document.getElementById("overlay");

        sidebar.classList.toggle("-left-64");
        overlay.classList.toggle("hidden");
        document.body.classList.toggle("overflow-hidden");
    }