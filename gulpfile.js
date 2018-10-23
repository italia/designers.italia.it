var gulp = require('gulp');
var gutil = require('gulp-util');
var fs = require('fs');
var os = require('os');
var path = require('path');
var configFile = path.join(os.homedir(), ".designersitalia_site.json");

var config = {};
if (fs.existsSync(configFile)) {
  gutil.log("Reading local config from [" + configFile + "]");
  config = require(configFile);
} else {
  gutil.log("No local config found at [" + configFile + "]");
}

var runSequence = require('run-sequence');
var clean = require('gulp-clean');
var shell = require('gulp-shell');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var jpegtran = require('imagemin-jpegtran');
var gifsicle = require('imagemin-gifsicle');
var minifyHTML = require('gulp-htmlmin');
var autoprefixer = require('gulp-autoprefixer');
var uncss = require('gulp-uncss');
var cleanCss = require('gulp-clean-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var rsync = require('gulp-rsync');

gulp.task('jekyll', function() {
  return gulp.src('README.md', {
      read: false
    })
    .pipe(shell([
      'JEKYLL_ENV=production bundle exec jekyll build'
    ]));
});

gulp.task('optimize-images', function() {
  return gulp.src(['_site/**/*.jpg', '_site/**/*.jpeg', '_site/**/*.gif',
      '_site/**/*.png'
    ])
    .pipe(imagemin({
      progressive: false,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant(), jpegtran(), gifsicle()]
    }))
    .pipe(gulp.dest('_site/'));
});

gulp.task('optimize-html', function() {
  return gulp.src('_site/**/*.html')
    .pipe(minifyHTML({
      quotes: true
    }))
    .pipe(gulp.dest('_site/'));
});

gulp.task('optimize-css', function() {
  return gulp.src('styles/*.css')
    // .pipe(autoprefixer())
    // .pipe(uncss({
    //   html: ['_site/**/*.html'],
    //   ignore: []
    // }))
    .pipe(cleanCss({
      keepBreaks: false
    }))
    .pipe(gulp.dest('_site/styles'));
});

gulp.task('optimize-js', function() {
  return gulp.src("js/*.js")
    .pipe(concat('scripts.js'))
    // .pipe(gulp.dest("_site/js"))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest("_site/js"));
});

gulp.task('clean', function() {
  return gulp.src('_site', {
      read: false
    })
    .pipe(clean());
});

gulp.task('build', function(cb) {
  runSequence(
    'clean',
    'jekyll', [
      // 'optimize-js',
      // 'optimize-css',
      'optimize-html'
      //'optimize-images'
    ], cb);
});

if (config.staging || process.env.DESIGNERSITALIA_SITE_STAGING_SERVER) {
  gulp.task('publish-staging', function() {
    var publish_server = process.env.DESIGNERSITALIA_SITE_STAGING_SERVER || config.staging.server;
    var publish_destination = process.env.DESIGNERSITALIA_SITE_STAGING_PATH || config.staging.path;
    var publish_port = process.env.DESIGNERSITALIA_SITE_STAGING_PORT || config.staging.port;

    return gulp.src('_site/**')
      .pipe(rsync({
        root: '_site',
        hostname: publish_server,
        destination: publish_destination,
        port: publish_port,
        recursive: true,
        compress: true,
        chmod: 'g+rwx',
        chown: 'www-data:www-data',
        perms: true,
        owner: true,
        group: true,
      }));
  });
} else {
  gutil.log("No config for staging publish, task will be disabled");
}

if (config.production || process.env.DESIGNERSITALIA_SITE_PRODUCTION_SERVER) {
  gulp.task('publish-production', function() {
    var publish_server = process.env.DESIGNERSITALIA_SITE_PRODUCTION_SERVER || config.production.server;
    var publish_destination = process.env.DESIGNERSITALIA_SITE_PRODUCTION_PATH || config.production.path;
    var publish_port = process.env.DESIGNERSITALIA_SITE_PRODUCTION_PORT || config.production.port;

    return gulp.src('_site/**')
      .pipe(rsync({
        root: '_site',
        hostname: publish_server,
        destination: publish_destination,
        port: publish_port,
        recursive: true,
        compress: false,
        progress: true,
        command: true
      }));
  });
} else {
  gutil.log("No config for production publish, task will be disabled");
}
