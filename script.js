document.getElementById("dataForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah pengiriman form secara default

  // Mengambil nilai input dari form
  var nama = document.getElementById("nama").value;
  var alamat = document.getElementById("alamat").value;
  var nomorTelepon = document.getElementById("nomorTelepon").value;

  // Memproses data (misalnya menyimpannya di basis data atau mengirim ke server)
  // Di sini Anda dapat menggunakan teknologi seperti PHP, Node.js, atau framework lainnya

  // Contoh tampilan data yang telah disimpan
  alert("Data telah disimpan:\n\nNama: " + nama + "\nAlamat: " + alamat + "\nNomor Telepon: " + nomorTelepon);

  // Mengosongkan form setelah data disimpan
  document.getElementById("dataForm").reset();
});
