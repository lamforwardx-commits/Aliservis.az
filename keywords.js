/* AliServis.az – səhifəyə görə açar sözlər */
window.ALI_KEYWORDS = {
  home: [
    'ремонт кондиционеров', 'kondisioner təmiri', 'kombi təmiri', 'ремонт котлов',
    'paltaryuyan təmiri', 'Bakı servis', 'kondisioner ustası', 'Kombi Ustasi',
    'maşın təmiri Bakı', 'peşəkar usta', 'təcili servis', '6 ay zəmanət'
  ],
  services: [
    'ремонт кондиционеров', 'установка кондиционеров', 'заправка фреоном',
    'kondisioner servis', 'kondisioner ustası', 'ремонт котлов', 'сервис котлов',
    'Kombi Servisi', 'Kombi Temiri', 'ремонт стиральных машин', 'ремонт бытовой техники',
    'paltaryuyan təmiri', 'diaqnostika', 'profilaktik servis'
  ],
  about: [
    'AliServis.az', 'Bakı servis şirkəti', 'peşəkar ustalar', '8 il təcrübə',
    'müştəri məmnuniyyəti', 'orijinal ehtiyat hissələri', 'rəsmi zəmanət',
    'ремонт бытовой техники Баку', 'etibarlı servis', 'Abşeron servis'
  ],
  contact: [
    'AliServis.az əlaqə', 'Bakı kombi servisi', 'kondisioner təmiri zəng',
    '+994 992 44 50 05', 'təcili usta çağırışı', 'pulsuz diaqnostika',
    'Nizami rayonu', '24/7 təcili yardım', 'WhatsApp servis'
  ],
  kombi: [
    'Kombi Ustasi', 'Kombi', 'Kombi Qiymetleri', 'Kombi Temizlenmesi', 'Kombi Yuyulması',
    'Kombi Servisi', 'Imerqaz Kombi', 'Immergas Kombi', 'Kombi Temiri', 'Kombi Qiymetleri Sederek',
    'Nobella Kombi', 'Eca Kombi', 'Kombi Arıza Kodları', 'Kombi Xeta Kodlari', 'Termogas Kombi Qiymeti',
    'Omid Kombi', 'Baymak Kombi', 'Demirdöküm Kombi', 'Neoterm Kombi', 'Nobella Kombi Qiymetleri',
    'Ariston Kombi', 'Kombi Immergas 24 Qiymeti', 'Kombi Immergas 32 Qiymeti', 'Kombi Radiator',
    'Kombi Radiatorlar Qiymeti', 'Kombi Radiatorları', 'Kontakt Home Kombi', 'Airfel Kombi',
    'Baxi Kombi', 'Demirdöküm Kombi Qiymeti', 'Demirdöküm Kombi Qiymetleri', 'Kombi E1 Hatası',
    'Kombi Radiator Qiymeti', 'Nova Hot Kombi', 'Novahot Kombi', 'Termet Kombi', 'Beretta Kombi',
    'E1 Kombi', 'Imerqaz Kombi Qiymeti', 'Kombi E4 Hatası'
  ]
};

(function () {
  'use strict';

  function renderPageKeywords() {
    var container = document.getElementById('pageKeywords');
    if (!container || !window.ALI_KEYWORDS) return;

    var page = container.getAttribute('data-keywords-page') || 'home';
    var keywords = window.ALI_KEYWORDS[page] || window.ALI_KEYWORDS.home;
    var isKombiPage = page === 'kombi';

    container.innerHTML = keywords.map(function (kw) {
      if (isKombiPage) {
        return '<span class="keyword-tag">' + kw + '</span>';
      }
      if (/kombi|Kombi|котл/i.test(kw)) {
        return '<a href="kombi-servisi.html" class="keyword-tag keyword-link">' + kw + '</a>';
      }
      return '<span class="keyword-tag">' + kw + '</span>';
    }).join('');
  }

  document.addEventListener('DOMContentLoaded', renderPageKeywords);
})();
