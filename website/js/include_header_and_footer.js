window.addEventListener('DOMContentLoaded', (event) => {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            
            // After the header is loaded, dynamically add the active class.
            const currentPage = window.location.pathname.split("/").pop() || "index.html";
            const navLinks = document.querySelectorAll(".nav-links a");

            navLinks.forEach(link => {
                if(link.getAttribute("href") === currentPage) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
        });
});

window.addEventListener('DOMContentLoaded', (event) => {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});