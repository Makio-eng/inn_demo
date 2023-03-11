// // gulpプラグインを読み込みます
// const { src, dest, watch } = require('gulp');
// // Sassをコンパイルするプラグインを読み込みます
// const sass = require('gulp-sass')(require('sass'));

// /**
//  * Sassをコンパイルするタスクです
//  */
// const compileSass = () =>
//   // style.scssファイルを取得
//   src('./sass/style.scss')
//     // Sassのコンパイルを実行
//     .pipe(
//       // コンパイル後のCSSを展開
//       sass({
//         outputStyle: 'expanded',
//       })
//     )
//     // cssフォルダー以下に保存
//     .pipe(dest('./css'));

// /**
//  * Sassファイルを監視し、変更があったらSassを変換します
//  */
// const watchSassFiles = () => watch('./sass/style.scss', compileSass);

// // npx gulpというコマンドを実行した時、watchSassFilesが実行されるようにします
// exports.default = watchSassFiles;

import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

// 関数の定義
const ImgImagemin = function () {
  return gulp
    .src('./images/**') //タスクを実行するディレクトリを指定
    .pipe(imagemin())
    .pipe(gulp.dest('./img')); // 出力先ディレクトリを指定
};
// 処理実行
export default (done) => {
  ImgImagemin();
  done();
};
