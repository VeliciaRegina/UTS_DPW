document.addEventListener("DOMContentLoaded", () => {
  const btnSelengkapnya = document.getElementById("btn-selengkapnya");
  const teksTambahan = document.getElementById("teks-tambahan");

  btnSelengkapnya.addEventListener("click", () => {
    if (teksTambahan.classList.contains("hidden")) {
      teksTambahan.classList.remove("hidden");
      btnSelengkapnya.textContent = "Sembunyikan";
    } else {
      teksTambahan.classList.add("hidden");
      btnSelengkapnya.textContent = "Selengkapnya";
    }
  });
});
