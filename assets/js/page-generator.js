// Elementos del formulario y vista previa
const deInput = document.getElementById("de");
const paraInput = document.getElementById("para");
const mensajeInput = document.getElementById("mensaje");

const previewPara = document.getElementById("previewPara");
const previewDe = document.getElementById("previewDe");
const previewMensaje = document.getElementById("previewMensaje");

const tarjeta = document.getElementById("tarjeta");
const descargarBtn = document.getElementById("descargarBtn");
const resetBtn = document.getElementById("resetBtn");

// Actualizar la vista previa
deInput.addEventListener("input", () => {
    previewDe.textContent = `De: ${deInput.value || "Tu nombre"}`;
});

paraInput.addEventListener("input", () => {
    previewPara.textContent = `Para: ${paraInput.value || "Nombre del destinatario"}`;
});

mensajeInput.addEventListener("input", () => {
    previewMensaje.textContent = mensajeInput.value || "Tu mensaje aquí";
});

// Descargar tarjeta como imagen
descargarBtn.addEventListener("click", () => {
    // Obtener los valores de los campos del formulario
    const paraValue = document.getElementById("para").value.trim();
    const deValue = document.getElementById("de").value.trim(); // Asegúrate de que este ID sea correcto
    const mensajeValue = document.getElementById("mensaje").value.trim();

    // Verificar si los campos están vacíos
    if (!paraValue || !deValue || !mensajeValue) {
        alert("Por favor, completa todos los campos antes de descargar.");
        return; // Detener la ejecución si hay campos vacíos
    }

    // Si todos los campos están llenos, proceder a la descarga
    html2canvas(tarjeta).then((canvas) => {
        const link = document.createElement("a");
        link.download = "tarjeta.png";
        link.href = canvas.toDataURL("image/jpeg");
        link.click();
    });
});

// Limpiar formulario
resetBtn.addEventListener("click", () => {
    deInput.value = "";
    paraInput.value = "";
    mensajeInput.value = "";
    previewDe.textContent = "De: Tu nombre";
    previewPara.textContent = "Para: Nombre del destinatario";
    previewMensaje.textContent = "Tu mensaje aqui";
});


const textarea = document.getElementById('mensaje');

textarea.addEventListener('input', function () {
    this.style.height = 'auto'; // Restablece la altura
    this.style.height = this.scrollHeight + 'px'; // Ajusta la altura al contenido
});


function actualizarContador() {
    const textarea = document.getElementById("mensaje");
    const contador = document.getElementById("contador");
    const max = textarea.maxLength;
    const actual = textarea.value.length;
    contador.textContent = `${actual}/${max}`;
}
