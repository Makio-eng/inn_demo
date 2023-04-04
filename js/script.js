'use strict';

/* ヘッダー
---------------------------------------------------*/
const header = document.querySelector('header');
const bars = document.querySelectorAll('.bar');
// 下層ページはアニメーション無しで固定
if (!header.classList.contains('under-header')) {
  window.addEventListener('scroll', headerChange);
}
function headerChange() {
  let headerHeight = header.clientHeight;
  const nav = document.querySelector('.nav');
  if (window.scrollY > headerHeight) {
    header.classList.add('fixed');
    bars.forEach((bar) => {
      bar.classList.add('black-bar');
    });
    nav.classList.add('white-nav');
    header.style.animation = 'header-anime ease .4s';
  } else {
    if (header.classList.contains('fixed')) {
      header.style.animation = 'header-anime-remove ease .4s';
      setTimeout(fixedRemove, 150);
      function fixedRemove() {
        header.classList.remove('fixed');
        bars.forEach((bar) => {
          bar.classList.remove('black-bar');
        });
        nav.classList.remove('white-nav');
        header.style.animation = '';
      }
    }
  }
}

/* カレンダー
---------------------------------------------------*/
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

/* セレクトボックスで初期値選択時はグレー表示
---------------------------------------------------*/
function changeColor(plan) {
  if (plan.value === '') {
    plan.style.color = 'gray';
  } else {
    plan.style.color = '#000000';
  }
}

/* モーダル
---------------------------------------------------*/

// オーバーレイ・スクロールロック用にbody取得
const body = document.body;

// モーダル切り替え関連の要素にイベント設定(宿泊予約画面)
const reserveBtn = document.querySelector('.reserve-btn');
const closeBtn = document.querySelector('.close-icon');
const formModal = document.querySelector('.form');
const ovarLayReserve = document.querySelector('.overlay--reserve');

let reserveTriggers = [reserveBtn, ovarLayReserve, closeBtn];
reserveTriggers.forEach((reserveTrigger) => {
  reserveTrigger.addEventListener('click', toggleReserveModal);
});
function toggleReserveModal() {
  ovarLayReserve.classList.toggle('modal-open');
  body.classList.toggle('no-scroll');
  formModal.classList.toggle('modal-open');
}

// モーダル切り替え関連の要素にイベント設定(ナビゲーション)
const nav = document.querySelector('.nav');
const burgerBtn = document.querySelector('.burger-btn');
const ovarLayNav = document.querySelector('.overlay--nav');
let navTriggers = [burgerBtn, ovarLayNav];
navTriggers.forEach((navTrigger) => {
  navTrigger.addEventListener('click', toggleNavModal);
});
function toggleNavModal() {
  ovarLayNav.classList.toggle('modal-open');
  body.classList.toggle('no-scroll');
  nav.classList.toggle('menu-open');
  burgerBtn.classList.toggle('btn-open');
}

/* swiper
---------------------------------------------------*/
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

/* タブ
---------------------------------------------------*/
const tabMenus = document.querySelectorAll('.tab__menu-item');
// イベント付加
tabMenus.forEach((tabMenu) => {
  tabMenu.addEventListener('click', tabSwitch);
});

function tabSwitch(e) {
  // クリックされた要素のデータ属性を取得
  const tabTargetData = e.currentTarget.dataset.tab;
  // クリックされた要素の親要素と、その子要素を取得
  const tabList = e.currentTarget.closest('.tab__menu');
  const tabItems = tabList.querySelectorAll('.tab__menu-item');
  // クリックされた要素の親要素の兄弟要素の子要素を取得
  const tabPanelItems =
    tabList.nextElementSibling.querySelectorAll('.tab__panel-box');

  // クリックされたtabの同階層のmenuとpanelのクラスを削除
  tabItems.forEach((tabItem) => {
    tabItem.classList.remove('is-active');
  });
  // クリックされたmenu要素にis-activeクラスを付加
  e.currentTarget.classList.add('is-active');

  // クリックしたmenuのデータ属性と等しい値を持つパネルにis-showクラスを付加
  tabPanelItems.forEach((tabPanelItem) => {
    tabPanelItem.classList.remove('is-show');
    if (tabPanelItem.dataset.panel === tabTargetData) {
      tabPanelItem.classList.add('is-show');
    }
  });
}
