var gulp = require('gulp');
var del = require('del');
var log = require('fancy-log');
var fs = require('fs');
var os = require('os');
var path = require('path');
var configFile = path.join(os.homedir(), '.designersitalia_site.json');

var config = {};
if (fs.existsSync(configFile)) {
  log('Reading local config from [' + configFile + ']');
  config = require(configFile);
} else {
  log('No local config found at [' + configFile + ']');
}

var shell = require('gulp-shell');
var imagemin = require('gulp-imagemin');
var minifyHTML = require('gulp-htmlmin');
var rsync = require('gulp-rsync');

gulp.task('jekyll', function () {
  return gulp.src('README.md', {
    read: false
  })
    .pipe(shell([
      'JEKYLL_ENV=production bundle exec jekyll build'
    ]));
});

gulp.task('optimize-images', function () {
  return gulp.src([
    '_site/**/*.jpg',
    '_site/**/*.jpeg',
    '_site/**/*.gif',
    '_site/**/*.png'
  ]).pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.mozjpeg({progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
      plugins: [
        {removeViewBox: false},
        {cleanupIDs: false}
      ]
    })
  ])).pipe(gulp.dest('_site/'));
});

gulp.task('optimize-html', function () {
  return gulp.src('_site/**/*.html')
    .pipe(minifyHTML({
      quotes: true
    }))
    .pipe(gulp.dest('_site/'));
});

gulp.task('clean', function () {
  return del(['_site']);
});


gulp.task('optimize', gulp.parallel('optimize-html', 'optimize-images', function optimize(done) {
  done();
}));

gulp.task('build', gulp.series('clean', 'jekyll', 'optimize', function build(done) {
  done();
}));

if (config.staging || process.env.DESIGNERSITALIA_SITE_STAGING_SERVER) {
  gulp.task('publish-staging', function () {
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
  log('No config for staging publish, task will be disabled');
}

if (config.production || process.env.DESIGNERSITALIA_SITE_PRODUCTION_SERVER) {
  gulp.task('publish-production', function () {
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
  log('No config for production publish, task will be disabled');
}
