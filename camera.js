
navigator.mediaDevices.getUserMedia({ video: true })
  .then(s => document.getElementById('v').srcObject = s);
