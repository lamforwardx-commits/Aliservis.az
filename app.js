(function () {
  'use strict';

  var STORAGE_KEY = 'mikrorayonservis_lang';
  var DEFAULT_LANG = 'ru';
  var SEO_LANG = 'ru';
  var currentLang = DEFAULT_LANG;

  function getInitialLang() {
    var params = new URLSearchParams(window.location.search);
    if (params.get('lang') === 'az') return 'az';
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'az' || saved === 'ru') return saved;
    } catch (e) {}
    return DEFAULT_LANG;
  }

  function applyLanguage(lang) {
    if (!window.ALI_I18N || !window.ALI_I18N[lang]) lang = DEFAULT_LANG;
    currentLang = lang;
    var dict = window.ALI_I18N[lang];

    document.documentElement.lang = lang === 'az' ? 'az' : 'ru';
    document.documentElement.dir = 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!dict[key]) return;
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) el.placeholder = dict[key];
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key]) el.setAttribute('aria-label', dict[key]);
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });

    var seoDict = window.ALI_I18N[SEO_LANG];
    var pageMeta = window.ALI_PAGE_META && window.ALI_PAGE_META[lang];
    if (pageMeta) {
      document.title = pageMeta.title || document.title;
      var desc = document.querySelector('meta[name="description"]');
      if (desc && pageMeta.description) desc.setAttribute('content', pageMeta.description);
      var kw = document.querySelector('meta[name="keywords"]');
      if (kw && pageMeta.keywords) kw.setAttribute('content', pageMeta.keywords);
    } else {
      document.title = dict['meta.title'] || document.title;
      var descEl = document.querySelector('meta[name="description"]');
      if (descEl) {
        var descText = dict['meta.description'];
        if (descText) descEl.setAttribute('content', descText);
      }
    }

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    var url = new URL(window.location.href);
    if (lang === 'az') {
      url.searchParams.set('lang', 'az');
    } else {
      url.searchParams.delete('lang');
    }
    history.replaceState(null, '', url.pathname + url.search + url.hash);
  }

  window.setAliLanguage = applyLanguage;

  document.addEventListener('DOMContentLoaded', function () {
    applyLanguage(getInitialLang());

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLanguage(this.getAttribute('data-lang'));
      });
    });

    var mobileMenu = document.getElementById('mobileMenu');
    var hamburger = document.getElementById('hamburger');

    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function () {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
      });

      mobileMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileMenu.classList.remove('active');
          hamburger.classList.remove('active');
          document.body.style.overflow = '';
        });
      });

      var mobileDropBtn = mobileMenu.querySelector('.mobile-dropdown .nav-link--drop');
      var mobileSubmenu = mobileMenu.querySelector('.mobile-submenu');
      if (mobileDropBtn && mobileSubmenu) {
        mobileDropBtn.addEventListener('click', function (e) {
          e.preventDefault();
          mobileSubmenu.classList.toggle('open');
          var expanded = mobileDropBtn.getAttribute('aria-expanded') === 'true';
          mobileDropBtn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        });
      }
    }

    var header = document.getElementById('header');
    var scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', function () {
      if (header) header.classList.toggle('scrolled', window.scrollY > 50);
      if (scrollTopBtn) scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
      checkFade();
    });

    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    var fadeElements = document.querySelectorAll('.fade-in');
    function checkFade() {
      fadeElements.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) el.classList.add('visible');
      });
    }
    window.addEventListener('load', checkFade);

    document.querySelectorAll('.nav-link--drop').forEach(function (btn) {
      var parent = btn.closest('.nav-dropdown');
      if (!parent) return;
      btn.setAttribute('aria-expanded', parent.classList.contains('open') ? 'true' : 'false');
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var isOpen = parent.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    });

    document.addEventListener('click', function (e) {
      document.querySelectorAll('.nav-dropdown.open').forEach(function (el) {
        if (!el.contains(e.target)) {
          el.classList.remove('open');
          var btn = el.querySelector('.nav-link--drop');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // ===== WELCOME MODAL =====
    (function() {
        var modal = document.getElementById('welcomeModal');
        if (!modal) return;
        
        var shownKey = 'welcomeModalShown';
        var alreadyShown = false;
        
        try {
            alreadyShown = sessionStorage.getItem(shownKey) === 'true';
        } catch (e) {}
        
        function openModal() {
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('modal-open');
            try {
                sessionStorage.setItem(shownKey, 'true');
            } catch (e) {}
        }
        
        function closeModal() {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('modal-open');
        }
        
        if (!alreadyShown) {
            setTimeout(openModal, 1200);
        }
        
        modal.querySelectorAll('[data-close-modal]').forEach(function(el) {
            el.addEventListener('click', closeModal);
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
        
        modal.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', closeModal);
        });
    })();
    // ===== END WELCOME MODAL =====

    var form = document.getElementById('contactForm');
    var formSuccess = document.getElementById('formSuccess');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var name = document.getElementById('name');
        var phone = document.getElementById('phone');
        var nameError = document.getElementById('nameError');
        var phoneError = document.getElementById('phoneError');
        var dict = window.ALI_I18N[currentLang] || window.ALI_I18N.ru;
        var valid = true;

        name.classList.remove('error');
        phone.classList.remove('error');
        nameError.classList.remove('visible');
        phoneError.classList.remove('visible');

        if (name.value.trim().length < 2) {
          name.classList.add('error');
          nameError.textContent = dict['contact.form.name.error'];
          nameError.classList.add('visible');
          valid = false;
        }

        var phoneClean = phone.value.replace(/[\s\-()]/g, '');
        if (phoneClean.length < 9 || !/^[+]?[0-9]{9,15}$/.test(phoneClean)) {
          phone.classList.add('error');
          phoneError.textContent = dict['contact.form.phone.error'];
          phoneError.classList.add('visible');
          valid = false;
        }

        if (valid) {
          form.style.display = 'none';
          formSuccess.classList.add('visible');
          setTimeout(function () {
            form.reset();
            form.style.display = 'block';
            formSuccess.classList.remove('visible');
          }, 5000);
        }
      });
    }
  });
})();