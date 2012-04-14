/**
 * grunt
 * This grunt file is to manage gruntExample repository.
 *
 * grunt: https://github.com/cowboy/grunt
 */
module.exports = function(grunt){

  grunt.initConfig({
    copy: {
      copyfile: {
        from: [
          'tasks_js/copyfile.js',
          'tasks_js/misc.js'
        ],
        to: 'copyfile/tasks/'
      },
      sass_concat_cssmin: {
        from: [
          'tasks_js/sass.js',
          'tasks_js/cssmin.js',
          'tasks_js/misc.js'
        ],
        to: 'sass-concat-cssmin/tasks/'
      },
      compass_concat_cssmin: {
        from: [
          'tasks_js/compass.js',
          'tasks_js/cssmin.js',
          'tasks_js/misc.js'
        ],
        to: 'compass-concat-cssmin/tasks/'
      },
      bourbon_concat_cssmin: {
        from: [
          'tasks_js/bourbon.js',
          'tasks_js/cssmin.js',
          'tasks_js/misc.js'
        ],
        to: 'bourbon-concat-cssmin/tasks/'
      },
      coffee_all_in_one: {
        from: [
          'tasks_js/coffee.js',
          'tasks_js/misc.js'
        ],
        to: 'coffee-all-in-one/tasks/'
      },
      uglify: {
        from: [
          'tasks_js/uglify.js',
          'tasks_js/misc.js'
        ],
        to: 'uglify/tasks/'
      }
    },
    watch: {
      files: 'tasks_js/*.js',
      tasks: 'copy ok'
    }
  });

  grunt.loadTasks('tasks_js');
  grunt.registerTask('default', 'copy ok');

};
