//ヘッダー制御
window.addEventListener('scroll', headerChange);
function headerChange() {
  const header = document.querySelector('.header');
  let headerHeight = header.clientHeight;
  if (window.scrollY > headerHeight) {
    header.classList.add('fixed');
    header.style.animation = 'header-anime ease .4s';
  } else {
    if (header.classList.contains('fixed')) {
      header.style.animation = 'header-anime-remove ease .4s';
      setTimeout(fixedRemove, 150);
      function fixedRemove() {
        header.classList.remove('fixed');
        header.style.animation = '';
      }
    }
  }
}

// カレンダー（範囲選択）
flatpickr('#flatpickr', {
  locale: 'ja',
  minDate: 'today',
  mode: 'range',
  dateFormat: 'Y/m/d(D)',
});
// 日付選択後の区切り文字を「 〜 」に置換
const flatpc = document.getElementById('flatpickr');
flatpc.addEventListener('change', function () {
  flatpc.value = flatpc.value.replace('から', ' 〜 ');
});

// セレクトボックスで初期値選択時はグレー表示
function changeColor(plan) {
  if (plan.value === '') {
    plan.style.color = 'gray';
  } else {
    plan.style.color = '#000000';
  }
}

// モーダル
const reserveBtn = document.querySelector('.reserve-btn');
const ovarLay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-icon');

const body = document.body;
const formModal = document.querySelector('.form');

// モーダル切り替え関連の要素にイベント設定
let modalTriggers = [reserveBtn, ovarLay, closeBtn];
modalTriggers.forEach((modalTrigger) => {
  modalTrigger.addEventListener('click', toggleModal);
});
function toggleModal() {
  ovarLay.classList.toggle('modal-open');
  formModal.classList.toggle('modal-open');
  body.classList.toggle('no-scroll');
}

// swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  effect: 'fade', // フェード切り替え
  // 自動再生
  autoplay: {
    delay: 4000, // 4秒後に次のスライドへ
    disableOnInteraction: false, // ユーザーが操作しても自動再生を継続
  },
  speed: 2000, // 2秒かけてフェード
});
