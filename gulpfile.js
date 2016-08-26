var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var vinylSourceStream = require('vinyl-source-stream');
var vinylBuffer = require('vinyl-buffer');
var flatten = require('gulp-flatten');

// Load all gulp plugins into the plugins object.
var plugins = require('gulp-load-plugins')();

var src = {
	html: 'src/**/*.html',
	html2: 'src/scripts/components/**/*.html',
	libs: 'src/libs/**',
	json: 'src/json/**',
	img: 'src/img/**',
	scripts: {
		all: 'src/scripts/**/*.js',
		app: 'src/scripts/app.js'
	}
};

var build = 'build/';
var out = {
	libs: build + 'libs/',
	src: build + 'src/',
	img: build + 'src/img/',
	html2: build + 'src/templates',
	json: build + 'src/json/',
	scripts: {
		file: 'app.min.js',
		folder: build + 'scripts/'
	}
};

gulp.task('html', function() {
	return gulp.src(src.html)
		.pipe(gulp.dest(build))
		.pipe(plugins.connect.reload());
});
gulp.task('css', function() {
	return gulp.src('bower_components/**/*.{min.css,min.css.map,min.map}')
		.pipe(flatten())
		.pipe(gulp.dest(build+'css'))
		.pipe(plugins.connect.reload());
});

gulp.task('html-templates', function() {
	return gulp.src(src.html2)
		.pipe(flatten())
		.pipe(gulp.dest(out.html2))
		.pipe(plugins.connect.reload());
});

/* The jshint task runs jshint with ES6 support. */
gulp.task('jshint', function() {
	return gulp.src(src.scripts.all)
		.pipe(plugins.jshint({
			esnext: true // Enable ES6 support
		}))
		.pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('images', function() {
	/* In a real project you of course would use npm or bower to manage libraries. */
	return gulp.src(src.img)
		.pipe(gulp.dest(out.img))
		.pipe(plugins.connect.reload());
});

gulp.task('json', function() {
	/* In a real project you of course would use npm or bower to manage libraries. */
	return gulp.src(src.json)
		.pipe(gulp.dest(out.json))
		.pipe(plugins.connect.reload());
});

gulp.task('libs', function() {
	/* In a real project you of course would use npm or bower to manage libraries. */
	return gulp.src('bower_components/**/*.{min.js,min.js.map}')
		.pipe(flatten())
		.pipe(gulp.dest(out.libs))
		.pipe(plugins.connect.reload());
});

/* Compile all script files into one output minified JS file. */
gulp.task('scripts', ['jshint'], function() {

	var sources = browserify({
		entries: src.scripts.app,
		debug: true // Build source maps
	})
	.transform(babelify.configure({
		// You can configure babel here!
		// https://babeljs.io/docs/usage/options/
		presets: ["es2015"]
	}));

	return sources.bundle()
		.pipe(vinylSourceStream(out.scripts.file))
		.pipe(vinylBuffer())
		.pipe(plugins.sourcemaps.init({
			loadMaps: true // Load the sourcemaps browserify already generated
		}))
		.pipe(plugins.ngAnnotate())
		.pipe(plugins.uglify())
		.pipe(plugins.sourcemaps.write('./', {
			includeContent: true
		}))
		.pipe(gulp.dest(out.scripts.folder))
		.pipe(plugins.connect.reload());

});

gulp.task('serve', ['build', 'watch'], function() {
	plugins.connect.server({
		root: build,
		port: 4242,
		livereload: true,
		fallback: build + 'index.html'
	});
});

gulp.task('watch', function() {
	gulp.watch(src.libs, ['libs']);
	gulp.watch(src.html, ['html']);
	gulp.watch(src.html2, ['html-templates']);
	gulp.watch(src.scripts.all, ['scripts']);
});

gulp.task('build', ['scripts', 'html','css', 'html-templates', 'libs', 'json', 'images']);
gulp.task('default', ['serve']);
