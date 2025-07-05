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
      
      // Simular apertura en Drive
      const btn = document.querySelector('.video-btn.primary');
      const originalText = btn.innerHTML;
      
      btn.innerHTML = '🚀 ABRIENDO...';
      btn.disabled = true;
      
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        
        // En una implementación real, aquí se abriría el enlace real de Drive
        const confirmOpen = confirm('¿Abrir el video en Google Drive?\n\nEsto abrirá una nueva ventana con el contenido del video.');
        
        if (confirmOpen) {
          // Aquí pondrías tu enlace real de Drive
          window.open('https://drive.google.com/file/d/17pS1u53qRP95SVrQvm9mPGsnx74EOhyp/view?usp=sharing', '_blank');
        }
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
        
        alert('🎬 Vista previa del video:\n\n' +
              '📁 Archivo: Actividad3_FranciscoMora.mp4\n' +
              '🎥 Resolución: 1920x1080 (Full HD)\n' +
              '⏱️ Duración: 5:30 minutos\n' +
              '📊 Tamaño: 45.2 MB\n' +
              '🎬 Codec: H.264\n' +
              '🔊 Audio: AAC 48kHz\n\n' +
              '✅ Estado: Disponible para reproducción');
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
        
        // Simular copiado al portapapeles
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