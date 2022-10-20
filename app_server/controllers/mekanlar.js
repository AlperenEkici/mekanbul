var express = require('express');
var router = express.Router();

  const anaSayfa = function(req, res, next) {
    res.render('anasayfa', 
    {"baslik":"Anasayfa",
      "sayfaBaslik":{
        "siteAd":"Mekanbul",
        "slogan":"Civardaki Mekanları Keşfet!"
      },
      "mekanlar":[
        {
          "ad":'Starbucks',
          "adres":'Centrum Garden',
          "puan":3,
          "imkanlar":['Dünya Kahveleri','Yiyecek','Hızlı Wifi Bağlantısı'],
          "mesafe":'100m'
        }
        ,
        {
          "ad":"Gloria Jeans",
          "adres":"Sdü Doğu Kampüsü",
          "puan":"3",
          "imkanlar":["Kahve","Çay","Pasta"],
          "mesafe":"5km"
        }

      ]

    }
    );
  }
  
  const mekanBilgisi = function(req, res, next) {
    res.render('mekanbilgisi', 
    { "baslik": "Mekan Bilgisi",
      "mekanBaslik":"Starbucks",
      "mekanDetay":{
        "ad":"Starbucks",
        "adres":"Centrum Garden",
        "puan":"4",
        "saatler":[
          {
            "gunler":"Pazartesi-Cuma",
            "acilis":"9.00",
            "kapanis":"23.00",
            "kapali":"false"
          },
          {
            "gunler":"Pazartesi-Cuma",
            "acilis":"10.00",
            "kapanis":"22.00",
            "kapali":"false"
          }

        ],
        "imkanlar":["kahve","çay","kek"],
        "koordinatlar":{
          "enlem":"37.78",
          "boylam":"30.56"
        },
        "yorumlar":[
          {
            "yorumYapan":"Alperen",
            "puan":"3",
            "tarih":"20 Ekim 2022",
            "yorumMetni":"Çok Berbat"

          },
          {
            "yorumYapan":"Alp",
            "puan":"5",
            "tarih":"20 Ekim 2022",
            "yorumMetni":"İyi"

          }
        ]


      } });
  }

  const yorumEkle = function(req, res, next) {
    res.render('yorumekle', { title: 'Yorum Ekle' });
  }

  module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle
  }