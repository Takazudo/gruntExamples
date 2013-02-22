/**
 * grunt
 * CoffeeScript example
 */
module.exports = function(grunt){

  grunt.initConfig({
    coffee: {
      // Example1: compile multiple coffees to one js with "--join".
      dist1: {
        files: [ 'coffee/1.coffee', 'coffee/2.coffee' ],
        dest: 'js/12.js'
      },
      // Example2: compile one coffee to one js.
      dist2: {
        files: [ 'coffee/3.coffee' ],
        dest: 'js/3.js'
      },
      // Example3: compiled files are put in another dir.
      dist3: {
        dir: 'coffee/45/',
        dest: 'js/'
      },
      // Example4: compiled files are put in the same dir.
      dist4: {
        dir: 'insamedir/'
      }
    },
    watch: {
      dist1: {
        files: '<config:coffee.dist1.files>',
        tasks: 'coffee:dist1 ok'
      },
      dist2: {
        files: '<config:coffee.dist2.files>',
        tasks: 'coffee:dist2 ok'
      },
      dist3: {
        files: 'coffee/45/*.coffee',
        tasks: 'coffee:dist3 ok'
      },
      dist4: {
        files: 'insamedir/*.coffee',
        tasks: 'coffee:dist4 ok'
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', 'coffee ok');

};
