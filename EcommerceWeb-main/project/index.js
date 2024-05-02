document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        var currentDate = new Date();
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1; 
        var year = currentDate.getFullYear();
        var hours = currentDate.getHours();
        var minutes = currentDate.getMinutes();
        var seconds = currentDate.getSeconds()
        day = (day < 10) ? '0' + day : day;
        month = (month < 10) ? '0' + month : month;
        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        var formattedDate = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;
        document.getElementById('dateDisplay').textContent =  "call us or whatsapp 0794015883" +"" + "Now" +"" + formattedDate;
    }
    let hoveredElement = document.getElementById("hoveredElement");

    hoveredElement.addEventListener("mouseover", function() {
        let dropdown =getElementById("dropDown");
        dropdown.style.display = "flex";
    
    });

    hoveredElement.addEventListener("mouseout", function() {
        let dropdown =getElementById("dropDown");
        dropdown.style.display = "none";
    
    });
    updateTime();


    setInterval(updateTime, 1000);
   
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });
    
    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
    
});
