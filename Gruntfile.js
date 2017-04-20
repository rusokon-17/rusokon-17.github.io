// This shows a full config file!
module.exports = function(grunt) {
    grunt.initConfig({

        clean: ["css", "build"],

        watch: {
            files: 'scss/**/*.scss',
            tasks: ['sass']
        },
        sass: {
            options: {
                sourceMap: true
            },
            dev: {
                files: {
                    'css/style.css': 'scss/style.scss'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', '> 1%', 'ie 9', 'ie 10', 'ie 11'],
                cascade: true,
                remove: true
            },
            css: {
                src: 'css/style.css'
            },
        },
        copy: {
            fonts: {
                expand: true,
                cwd: 'fonts',
                src: '**',
                dest: 'build/fonts/',
            },
            img: {
                expand: true,
                cwd: 'images',
                src: '**',
                dest: 'build/images/',
            },
            html: {
                src: '*.html',
                dest: 'build/',
            },
        },
        cssmin: {
            options: {
                sourceMap: true
            },
            css: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'build/css/',
                    ext: '.min.css'
                }]
            }
        },
        concat: {
            css_and_js: {
                options: {
                    separator: '\n /************** BLOCK *****************/ \n ',
                },
                files: {

                    'build/js/scripts.js': [
                        'js/vendor/jquery.min.js',
                        'js/scripts.js'

                    ]
                }
            }
        },
        replace: {
            html: {
                src: ['build/*.html'],
                overwrite: true, // overwrite matched source files
                replacements: [{
                    from: 'css/style.css',
                    to: 'css/style.min.css'
                }]
            },
            scriptsRemoveJquery: {
                src: ['build/*.html'],
                overwrite: true, // overwrite matched source files
                replacements: [{
                    from: '<script src="js/vendor/jquery.min.js"></script>',
                    to: ' '
                }]
            },
            scriptsRemoveBxslider: {
                src: ['build/*.html'],
                overwrite: true, // overwrite matched source files
                replacements: [{
                    from: '<script src="js/vendor/jquery.bxslider.min.js"></script>',
                    to: ' '
                }]
            }
           
        },
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    // grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-text-replace');
    // grunt.loadNpmTasks('grunt-combine-media-queries');

    // define default task
    grunt.registerTask('default', ['clean', 'sass', 'browserSync', 'watch']);

    // define build task
    grunt.registerTask('build', ['clean', 'sass', 'copy', 'cssmin', 'concat', 'replace']);
};
