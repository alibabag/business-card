window.onload = () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("form-container").style.display = "block";
    }, 2000);
};

document.getElementById("card-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    // Yükleme animasyonu ekle
    document.getElementById("loading-screen").style.display = "block";
    document.getElementById("form-container").style.display = "none";
    
    setTimeout(() => {
        // Yükleme animasyonunu gizle
        document.getElementById("loading-screen").style.display = "none";
        
        // Kartvizit bilgilerini güncelle
        document.getElementById("card-name").innerText = name;
        document.getElementById("card-job").innerText = job;

        // Telefon numarasını formatla ve kartvizite ekle
        const formattedPhone = `Phone: +${phone}`;
        document.getElementById("card-phone").innerText = formattedPhone; // Telefonu ekle
        document.getElementById("card-phone").href = `tel:${phone}`; // Telefon linkini ayarla

        // E-posta adresini formatla ve kartvizite ekle
        const formattedEmail = `Email: ${email}`;
        document.getElementById("card-email").innerText = formattedEmail; // E-posta adresini ekle
        document.getElementById("card-email").href = `mailto:${email}`; // E-posta linkini ayarla

        // Kartviziti görünür yap
        document.getElementById("card").style.display = "flex"; 
    }, 2000);
});
