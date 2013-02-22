/**
 * grunt
 * https://github.com/cowboy/grunt
 */
module.exports = function(grunt){
  
  grunt.loadNpmTasks('grunt-contrib'); // https://github.com/gruntjs/grunt-contrib

  grunt.initConfig({
    copy: {
      htdocs: {
        files: {
          'compresstemp' : 'htdocs/**'
        }
      }
    },
    clean: {
      withoutCommon: [
        'compresstemp/htdocs/IDontNeedThisDir1',
        'compresstemp/htdocs/IDontNeedThisDir2',
        'compresstemp/htdocs/index.html'
      ],
      compresstemp: [
        'compresstemp'
      ]
    },
    compress: {
      withoutCommon: {
        options: {
          mode: 'zip',
          basePath: './compresstemp' // need this for make dirname 'htdocs' after unzip
        },
        files: {
          'htdocs.zip': './compresstemp/htdocs/**'
        }
      }
    }
  });

  grunt.registerTask('default', 'copy clean:withoutCommon compress clean:compresstemp');

};
