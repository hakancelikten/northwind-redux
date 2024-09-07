npm i redux
npm i react-redux
npm i reactstrap
npm i bootstrap
npm install @reduxjs/toolkit


redux kısmının özeti:
1. actionType ile aksiyonlarımızı yazıyoruz.
2. kategori ile ilgili aksiyonlar için de  changeCategory ismiyle gönderilen parametreyi redux'ın anlayacağı bir objeye çeviriyoruz.
diyorum ki changeCategory'de reducer bak senin tipin CHANGE_CATEGORY, payload'ın ise parametreyle gönderilen category'nin kendisi 
3. changeCategoryReducer içerisinde de  gelen action'a göre hangi aksiyonsa onun payload'ını state olarak döndürüyüroruz.
4. reducer => index.js içerisinde bütün reducer'larımızı bir araya getiriyoruz.
5. configureStore ile bir fonksiyon vasıtasıyla reducerımızı rootreducer olarak veriyoruz
6. index.js reactdom.render içerisinde de provider olarak app.js'si encapsule etmemiz gerekiyor.
