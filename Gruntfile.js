module.exports = function (grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          //hostname:'10.190.83.194',
          hostname:'0.0.0.0',
          port: 8000,
          base: 'public/'
        }
      }
    },
    watch: {
      project: {
        files: ['public/**/*.js', 'public/**/*.html', 'public/**/*.json', 'public/**/*.css', 'public/*.html'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect', 'watch']);

};