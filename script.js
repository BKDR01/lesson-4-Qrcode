function generateQRCode() {
    const qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = "";

    const text = document.getElementById("text").value;
    const foreground = document.getElementById("foreground").value;
    const background = document.getElementById("background").value;
    
    new QRCode(qrContainer, {
      text: text,
      width: 200,
      height: 200,
      colorDark: foreground, 
      colorLight: background, 
      correctLevel: QRCode.CorrectLevel.H,
    });
  }