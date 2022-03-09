// Kullanıcıdan prompt yöntemi ile isim bilgisi alma.

let userName = prompt("Lütfen adınızı giriniz.");

   // İf  else if yapısı ile aldığımız kullanıcı adını HTML'e yazdırma. Prompt kutusuna boş iken tamam'a tıklanırsa, ya da iptal edilerek prompt kutusu kapatılırsa alert ile geri bildirim verme.
   if( (userName != "") && (userName != null) ) {
       document.getElementById("myName").innerHTML=userName.toUpperCase();   
}

   else if(isim == "") 
   
   alert("Boş giriş yaptınız!");
   
   else if(isim == null) 
  
   alert("Giriş yapmaktan vazgeçtiniz!");

   // Fonksiyon içinde bir değişkeni tarihe tanımlama, bu değişkeni HTML'e yazdırma

   function dateClock(){

      let d= new Date().toLocaleString();
      document.getElementById("myClock").innerHTML=d;

   }
//setInterval yöntemi ile saniyede bir fonksiyonu çalıştırarak, anlık saati ekranda gösterme.
   setInterval(dateClock,1000);


