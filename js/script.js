flatpickr('#flatpickr', {
  locale: 'ja',
  minDate: 'today',
  mode: 'range',
  dateFormat: 'Y/m/d(D)',
});
const flatpc = document.getElementById('flatpickr');
flatpc.addEventListener('change', function () {
  flatpc.value = flatpc.value.replace('から', ' 〜 ');
  console.log(flatpc.value);
});
