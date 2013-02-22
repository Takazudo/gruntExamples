/**
 * grunt
 * copy example
 */
module.exports = function(grunt){

  grunt.initConfig({
    copy: {
      // Exampl1: one to one
      dist1: {
        from: 'foobar.txt',
        to: 'wascopied.txt'
      },
      // Exampl2: one to one
      dist2: {
        from: 'dir1/foobar.txt',
        to: 'dir2/wascopied.txt'
      },
      // Exampl3: one to one - another dir
      dist3: {
        from: 'dir1/foobar.txt',
        to: 'dir3/'
      },
      // Exampl4: multi - wildcard
      dist4: {
        from: 'dir1/*.txt',
        to: 'dir4/'
      },
      // Exampl5: multi - manually
      dist5: {
        from: [ 'dir1/foobar.txt', 'dir1/mewmew.txt' ],
        to: 'dir5/'
      },
      // Exampl6: multi - directive
      dist6: {
        from: '<config:foo.bar.files>',
        to: 'dir6/'
      }
    },
    foo: { // for directive test
      bar: {
        files: [ 'dir1/foobar.txt', 'dir1/mewmew.txt' ]
      }
    },
    watch: {
      dist1: {
        files: '<config:copy.dist1.from>',
        tasks: 'copy:dist1 ok'
      },
      dist2: {
        files: '<config:copy.dist2.from>',
        tasks: 'copy:dist2 ok'
      },
      dist3: {
        files: '<config:copy.dist3.from>',
        tasks: 'copy:dist3 ok'
      },
      dist4: {
        files: '<config:copy.dist4.from>',
        tasks: 'copy:dist4 ok'
      },
      dist5: {
        files: '<config:copy.dist5.from>',
        tasks: 'copy:dist5 ok'
      },
      dist6: {
        files: '<config:foo.bar.files>',
        tasks: 'copy:dist6 ok'
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', 'copy ok');

};
