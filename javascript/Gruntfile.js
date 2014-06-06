module.exports = function(grunt) {
    grunt.initConfig({
        copyto: {
            build: {
                files: [
                    { cwd: 'assets', src: ['**/*'], dest: 'angularapp/public/assets/' }
                ],
                options: {
                    ignore: [
                        'public/css/**/*',
                        'public/js/**/*',
                        'public/templates/**/*'
                    ]
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-copy-to');
    grunt.registerTask('default', ['copyto']);

};