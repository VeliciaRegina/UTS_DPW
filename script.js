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

  const form = document.getElementById("form-kontak");
  const notifSukses = document.getElementById("notif-sukses");
  const inputNama = document.getElementById("nama");

  if (localStorage.getItem("namaUser")) {
    inputNama.value = localStorage.getItem("namaUser");
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    notifSukses.classList.remove("hidden");
    localStorage.setItem("namaUser", inputNama.value);
    document.getElementById("pesan").value = "";

    setTimeout(() => {
      notifSukses.classList.add("hidden");
    }, 3000);
  });
});
