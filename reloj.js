document.addEventListener("DOMContentLoaded", () => {
  const formatSwitchBtn = document.querySelector(".format-switch-btn");
  const dotmenuBtn = document.querySelector(".dot-menu-btn");
  const dotMenu = document.querySelector(".dot-menu");

  formatSwitchBtn.addEventListener("click", () => {
    formatSwitchBtn.classList.toggle("active");
    const format = formatSwitchBtn.getAttribute("data-format");
    formatSwitchBtn.setAttribute("data-format", format === "12" ? "24" : "12");
  });

  function clock() {
    const now = new Date();

    // Hora
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let period = "AM";

    const format = formatSwitchBtn.getAttribute("data-format");

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

    // Fecha
    const dayNum = now.getDate();
    const year = now.getFullYear();
    const dayName = now.toLocaleString("es-ES", { weekday: "long" });
    const monthName = now.toLocaleString("es-ES", { month: "short" });

    document.querySelector(".month-name").innerHTML = monthName;
    document.querySelector(".day-name").innerHTML = dayName;
    document.querySelector(".day-num").innerHTML = dayNum;
  }

  setInterval(clock, 1000);
  clock();

  // Menú de opciones
  dotmenuBtn.addEventListener("click", () => {
    dotMenu.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dot-menu-btn") && !e.target.closest(".dot-menu")) {
      dotMenu.classList.remove("active");
    }
  });
});

// Funciones para el video de Drive
function openDriveVideo() {
  const driveUrl = "https://drive.google.com/file/d/17pS1u53qRP95SVrQvm9mPGsnx74EOhyp/view?usp=sharing";
  
  const btn = document.querySelector('.video-btn.primary');
  const originalText = btn.innerHTML;
  
  btn.innerHTML = '🚀 ABRIENDO...';
  btn.disabled = true;
  
  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.disabled = false;
    
    window.open(driveUrl, '_blank');
  }, 1500);
}

function previewVideo() {
  const btn = document.querySelector('.video-btn.secondary');
  const originalText = btn.innerHTML;
  
  btn.innerHTML = '👁️ CARGANDO...';
  btn.disabled = true;
  
  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.disabled = false;
    
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
    `;
    
    const videoContainer = document.createElement('div');
    videoContainer.style.cssText = `
      position: relative;
      width: 80%;
      max-width: 900px;
      background: #fff;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '✕';
    closeBtn.style.cssText = `
      position: absolute;
      top: 10px;
      right: 15px;
      background: rgba(255, 255, 255, 0.9);
      border: none;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      font-size: 16px;
      cursor: pointer;
      z-index: 10001;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    
    const iframe = document.createElement('iframe');
    iframe.src = 'https://drive.google.com/file/d/17pS1u53qRP95SVrQvm9mPGsnx74EOhyp/preview';
    iframe.style.cssText = `
      width: 100%;
      height: 500px;
      border: none;
    `;
    
    closeBtn.addEventListener('click', () => {
      document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    });
    
    videoContainer.appendChild(closeBtn);
    videoContainer.appendChild(iframe);
    modal.appendChild(videoContainer);
    document.body.appendChild(modal);
    
  }, 2000);
}

function shareDriveLink() {
  const btn = document.querySelector('.video-btn.tertiary');
  const originalText = btn.innerHTML;
  
  btn.innerHTML = '🔗 GENERANDO...';
  btn.disabled = true;
  
  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.disabled = false;
    
    const driveLink = "https://drive.google.com/file/d/17pS1u53qRP95SVrQvm9mPGsnx74EOhyp/view?usp=sharing";
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(driveLink).then(() => {
        alert('🔗 Enlace copiado al portapapeles:\n\n' + driveLink + '\n\n✅ Listo para compartir');
      }).catch(() => {
        prompt('📋 Copia este enlace:', driveLink);
      });
    } else {
      prompt('📋 Copia este enlace:', driveLink);
    }
  }, 1000);
}