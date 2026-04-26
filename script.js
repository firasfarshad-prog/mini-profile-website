let bahasa = "id";

function ubahBahasa() {
  const indo = document.querySelectorAll('.id');
  const eng = document.querySelectorAll('.en');

  if (bahasa === "id") {
    indo.forEach(el => el.style.display = "none");
    eng.forEach(el => el.style.display = "block");
    bahasa = "en";
  } else {
    indo.forEach(el => el.style.display = "block");
    eng.forEach(el => el.style.display = "none");
    bahasa = "id";
  }
}