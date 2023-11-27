const darkmode = document.querySelector('#dark-mode');
const bodyelt = document.querySelector("body");

darkmode.addEventListener('click', () => {
    if (darkmode.textContent == 'DARK') {
        document.documentElement.style.setProperty('--text-color', 'white');
        document.documentElement.style.setProperty('--background-color', 'grey');
        document.documentElement.style.setProperty("--hover-background-color", "#dda15e");
        bodyelt.style.backgroundColor = 'black';
        darkmode.textContent = 'LIGHT';
          header.style.backgroundColor = "var(--header-background-color)";
          header.querySelector("h1").style.color = "white";
          nav.style.backgroundColor = "#2c2c2c";



    } else {
        document.documentElement.style.setProperty('--text-color', 'black');
        document.documentElement.style.setProperty('--background-color', 'rgb(249, 245, 245)');
        bodyelt.style.backgroundColor = 'white';
        darkmode.textContent = 'DARK';
    }
});
