let milidetik = 0;
let saatIni = null;
const jamElement = document.getElementById("jam");
const menitElement = document.getElementById("menit");
const detikElement = document.getElementById("detik");
const milidetikElement = document.getElementById("milidetik");

function waktu() {
  milidetik += 10;
  const jam = Math.floor(milidetik / (1000 * 60 * 60));
  const menit = Math.floor((milidetik % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((milidetik % (1000 * 60)) / 1000);
  const milidetikValue = milidetik % 1000;
  jamElement.innerHTML = pad(jam);
  menitElement.innerHTML = pad(menit);
  detikElement.innerHTML = pad(detik);
  milidetikElement.innerHTML = ":" + pad(milidetikValue);
}

function pad(angka) {
  if (angka < 10) {
    return "0" + angka;
  }
  return angka;
}

function handleStartStop() {
  if (saatIni === null) {
    saatIni = setInterval(waktu, 10);
    document.getElementById("start-stop").innerHTML = "Stop";
  } else {
    clearInterval(saatIni);
    saatIni = null;
    document.getElementById("start-stop").innerHTML = "Start";
  }
}

function handleReset() {
  clearInterval(saatIni);
  milidetik = 0;
  saatIni = null; // variabel harus diubah kembali ke nol
  waktu();
  document.getElementById("start-stop").innerHTML = "Start";
}

waktu();
