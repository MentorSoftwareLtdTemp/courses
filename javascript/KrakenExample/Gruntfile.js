'use strict';


module.exports = function (grunt) {

    grunt.initConfig({

        jshint: {
            files: ['controllers/**/*.js', 'lib/**/*.js', 'models/**/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        requirejs: {
            build: {
                options: {
                    baseUrl: 'public/js/',
                    mainConfigFile: 'public/js/main.js',
                    dir: '.build/js',
                    optimize: 'uglify',
                    modules: [{name: 'main'}]
                }
            }
        },
        less: {
            build: {
                options: {
                    yuicompress: true,
                    paths: ['public/css']
                },
                files: {
                    '.build/css/app.css': 'public/css/app.less'
                }
            }
        },
        makara: {
            files: ['public/templates/**/*.dust'],
            options: {
                contentPath: ['locales/**/*.properties']
            }
        },
        dustjs: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: 'tmp/',
                        src: '**/*.dust',
                        dest: '.build/templates',
                        ext: '.js'
                    }

                ],
                options: {
                    fullname: function (filepath) {
                        var path = require('path'),
                            name = path.basename(filepath, '.dust'),
                            parts = filepath.split(path.sep),
                            fullname = parts.slice(3, -1).concat(name);
                        return fullname.join(path.sep);
                    }
                }
            }
        },
        copyto: {
            build: {
                files: [
                    { cwd: 'public', src: ['**/*'], dest: '.build/' }
                ],
                options: {
                    ignore: [
                        'public/css/**/*',
                        'public/js/**/*',
                        'public/templates/**/*'
                    ]
                }
            }
        },
        clean: {
            'tmp': 'tmp',
            'build': '.build/templates'
        },
        mochacli: {
            src: ['test/*.js'],
            options: {
                globals: ['chai'],
                timeout: 6000,
                ignoreLeaks: false,
                ui: 'bdd',
                reporter: 'spec'
            }
        },
        bowercopy: {
            options: {
                //clean: true
            },
            libs: {
                options: {
                    destPrefix: 'public/js/lib'
                },
                files: {
                    'jquery/jquery.js': 'jquery/jquery.js',
                    'requirejs/require.js': 'requirejs/require.js',
                    //'bootstrap/bootstrap.js': 'bootstrap/dist/js/bootstrap.js',
                    'backbone/backbone.js'  : 'backbone/backbone.js',
                    'underscore/underscore.js'  : 'underscore/underscore.js',
                    'dustjs-linkedin/dust-core.js' : 'dustjs-linkedin/dist/dust-core.js',
                    'jquery/jquery.form.js' : 'jquery-validation/lib/jquery.form.js',
                    'jquery/jquery.validate.js' : 'jquery-validation/jquery.validate.js'


                }
            },
            // Entire folders
            css: {
                options: {
                    destPrefix: 'public/components'
                },
                files: {
                    //'bootstrap/css/bootstrap.min.css': 'bootstrap/dist/css/bootstrap.min.css',
                    'bootstrap/css/bootstrap.min.css' : "bootswatch/united/bootstrap.min.css",
                    'bootstrap/css/bootswatch.min.css' : "bootswatch/assets/css/bootswatch.min.css",
                    'bootstrap/fonts': 'bootstrap/dist/fonts',
                    'fuelux' : 'fuelux/dist'



                }
            }

        },


    });
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-requirejs'); 
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-cli');
    grunt.loadNpmTasks('grunt-dustjs');
    grunt.loadNpmTasks('grunt-copy-to');
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-dust-require');
    grunt.loadTasks('./node_modules/makara/tasks/');


    grunt.registerTask('i18n', ['clean', 'makara', 'dustjs', 'clean:tmp']);
    grunt.registerTask('build', ['jshint', 'less', 'requirejs',  'copyto', 'i18n']);
    grunt.registerTask('test', ['jshint', 'mochacli']);
    grunt.registerTask('install', ['bowercopy','build']);

};
