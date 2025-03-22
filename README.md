# BankPlus - Modern Banka Uygulaması

![BankPlus](https://img.shields.io/badge/BankPlus-v1.0-blue)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?logo=css3)

Finansal Geleceğinizin Güvenli Adresi

## 📋 Proje Tanımı

BankPlus, React ve modern web teknolojileri kullanılarak geliştirilmiş, kullanıcı dostu bir banka uygulamasıdır. Bu uygulama sayesinde kullanıcılar hesaplarını görüntüleyebilir, para transferi yapabilir, para çekip yatırabilir ve borç sorgulayabilirler.

## 🚀 Özellikler

- **Kullanıcı Hesap Yönetimi**: Farklı kullanıcılar arasında geçiş yapabilme
- **Bakiye Görüntüleme**: Anlık bakiye durumu izleme
- **Para Transferi**: Kullanıcılar arasında para transferi yapabilme
- **Para Çekme/Yatırma**: Hesaba para yatırma veya hesaptan para çekme işlemleri
- **Borç Sorgulama**: Mevcut borçları görüntüleme ve ödeme imkanı
- **Kredi Başvurusu**: Yeni kredi başvurusu yapabilme
- **İşlem Geçmişi**: Tüm finansal işlemlerin geçmişini görüntüleme

## 🛠️ Kullanılan Teknolojiler

- **React** (v18.3.1) - Kullanıcı arayüzü geliştirme
- **React Hooks** - useReducer ve useState ile state yönetimi
- **Modern JavaScript (ES6+)** - Güncel JavaScript özellikleri
- **CSS3** - Modern ve duyarlı tasarım
- **Fetch API** - Veri çekme işlemleri
- **JSON** - Veri formatı
- **Responsive Design** - Tüm cihazlarda uyumlu tasarım

## 📁 Proje Yapısı

```
bank-app/
│
├── public/                 # Statik dosyalar
│   ├── index.html          # Ana HTML dosyası
│   └── ...                 # Diğer statik dosyalar
│
├── src/                    # Kaynak kodları
│   ├── components/         # React bileşenleri
│   │   ├── App.js          # Ana uygulama bileşeni
│   │   ├── Header.js       # Üst bilgi bileşeni
│   │   ├── Main.js         # Ana içerik bileşeni
│   │   ├── AccountScreen.js # Hesap ekranı
│   │   └── ...             # Diğer bileşenler
│   │
│   ├── index.js            # React giriş noktası
│   └── index.css           # Global CSS stilleri
│
├── package.json            # Proje bağımlılıkları ve scriptleri
└── README.md               # Proje dokümantasyonu
```

## 🔄 Veri Akışı

Uygulama `useReducer` hook'u kullanarak merkezi bir state yönetimi sağlar:

1. Kullanıcı bir eylem gerçekleştirir (örn. para transferi)
2. İlgili bileşen bir action dispatch eder
3. Reducer fonksiyonu state'i günceller
4. Güncellenen state, ilgili bileşenlere iletilir
5. Bileşenler yeni state'e göre yeniden render edilir

## 🎨 Tasarım Özellikleri

- Modern ve temiz arayüz
- Duyarlı tasarım (mobil, tablet ve masaüstü uyumlu)
- Kullanıcı dostu formlar ve interaktif elementler
- Tutarlı renk şeması ve tipografi

## 🔮 Gelecek Geliştirmeler

- Kullanıcı kimlik doğrulama sistemi
- Daha gelişmiş borç yönetimi
- Otomatik ödeme ayarları
- Dark mode desteği
- Çoklu dil desteği

## 📝 Lisans

Bu proje [MIT](LICENSE) lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

Katkıda bulunmak için lütfen bir issue açın veya bir pull request gönderin.

---

Geliştirici: [Abdullah Alioğlu] | &copy; 2024
