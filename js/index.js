document.addEventListener("DOMContentLoaded", function() {
    const clientsContainer = document.querySelector(".clients");
    const clientLogos = document.querySelectorAll(".clients img");
    const clientWidth = clientLogos[0].offsetWidth + 20;
    const totalWidth = clientWidth * clientLogos.length;

    let position = 0;
    let intervalId; 

    function moveLogos() {
        position -= 1;

        clientsContainer.style.transform = `translateX(${position}px)`;

        if (position <= -clientWidth) {
            const firstLogo = clientsContainer.firstElementChild;
            clientsContainer.removeChild(firstLogo); 
            clientsContainer.appendChild(firstLogo);
            position += clientWidth;
        }
    }

    intervalId = setInterval(moveLogos, 50);

    clientsContainer.addEventListener("mouseover", function() {
        clearInterval(intervalId);
    });

    clientsContainer.addEventListener("mouseout", function() {
        intervalId = setInterval(moveLogos, 50);
    });
});
