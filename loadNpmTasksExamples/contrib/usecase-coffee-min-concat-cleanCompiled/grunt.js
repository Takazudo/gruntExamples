/**
 * grunt
 * https://github.com/cowboy/grunt
 */
module.exports = function(grunt){
  
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib'); // https://github.com/gruntjs/grunt-contrib

  grunt.initConfig({
    coffee: {
      app: {
        files: {
          './compiled/app.js': [
            './coffee/1.coffee',
            './coffee/2.coffee',
            './coffee/3.coffee'
          ]
        }
      }
    },
    uglify: {
      lib1: {
        src: './jslibs/lib1.js',
        dest: './compiled/lib1.min.js'
      },
      lib2: {
        src: './jslibs/lib2.js',
        dest: './compiled/lib2.min.js'
      },
      app: {
        src: './compiled/app.js',
        dest: './compiled/app.min.js'
      }
    },
    concat: {
      all: {
        src: [
          '<config:uglify.lib1.src>',
          '<config:uglify.lib2.src>',
          '<config:uglify.app.src>'
        ],
        dest: './js/all.js'
      },
      allmin: {
        src: [
          '<config:uglify.lib1.dest>',
          '<config:uglify.lib2.dest>',
          '<config:uglify.app.dest>'
        ],
        dest: './js/all.min.js'
      }
    },
    clean: {
      compiletemp: [
        './compiled/*'
      ]
    }
  });

  grunt.registerTask('default', 'coffee uglify concat clean');

};
