module.exports = function(grunt) {
    grunt.initConfig({
        copyto: {
            build: {
                files: [
                    { cwd: 'assets', src: ['**/*'], dest: 'angularapp/public/assets/' },
                    { cwd: 'assets', src: ['**/*'], dest: 'backboneapp/public/assets/' },
                    { cwd: 'assets', src: ['**/*'], dest: 'spineapp/public/assets/' },
                    { cwd: 'assets', src: ['**/*'], dest: 'jqueryapp/public/assets/' }
                ],
                options: {
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-copy-to');
    grunt.registerTask('default', ['copyto']);

};