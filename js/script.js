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
const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade", // フェード切り替え
  // 自動再生
  autoplay: {
    delay: 4000, // 4秒後に次のスライドへ
    disableOnInteraction: false, // ユーザーが操作しても自動再生を継続
  },
  speed: 2000, // 2秒かけてフェード
});