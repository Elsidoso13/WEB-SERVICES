    const formatSwitchBtn = document.querySelector(".format-switch-btn");

    formatSwitchBtn.addEventListener("click", () => {
      formatSwitchBtn.classList.toggle("active");
      const format = formatSwitchBtn.getAttribute("date-format");
      formatSwitchBtn.setAttribute("date-format", format === "12" ? "24" : "12");
    });

    function clock() {
      const today = new Date();
      let hours = today.getHours();
      let minutes = today.getMinutes();
      let seconds = today.getSeconds();
      let period = "AM";

      const format = formatSwitchBtn.getAttribute("date-format");

      if (hours >= 12) period = "PM";
      if (format === "12") {
        hours = hours % 12 || 12;
      }

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      document.querySelector(".hours").innerHTML = hours;
      document.querySelector(".minutes").innerHTML = minutes;
      document.querySelector(".seconds").innerHTML = seconds;
      document.querySelector(".period").innerHTML = format === "12" ? period : "";
    }

    setInterval(clock, 1000);
    clock();

    // Fecha
    const today = new Date();
    const dayNum = today.getDate();
    const year = today.getFullYear();
    const dayName = today.toLocaleString("default", { weekday: "long" });
    const monthName = today.toLocaleString("default", { month: "short" });

    document.querySelector(".month-name").innerHTML = monthName;
    document.querySelector(".day-name").innerHTML = dayName;
    document.querySelector(".day-num").innerHTML = dayNum;

    // Menú de opciones
    const dotmenuBtn = document.querySelector(".dot-menu-btn");
    const dotMenu = document.querySelector(".dot-menu");

    dotmenuBtn.addEventListener("click", () => {
      dotMenu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".dot-menu-btn") && !e.target.closest(".dot-menu")) {
        dotMenu.classList.remove("active");
      }
    });









