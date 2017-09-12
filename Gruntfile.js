// This file is used to configure or define tasks and load Grunt plugins.

module.exports = function(grunt) {

  // Do grunt-related things in here
  grunt.log.write("Running GRUNT tasks defined in Gruntfile.js\n");

  grunt.loadNpmTasks('grunt-docco');

  grunt.loadNpmTasks('grunt-typedoc');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    docco: {
      debug: {
        src: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.md'],
        options: {
          output: '../docs/docco'
        }
      }
    },

    typedoc: {
      build: {
        options: {
          module: 'commonjs',
          out: '../docs/api',
          name: 'my-journal',
          target: 'es5',
          ignoreCompilerErrors: true
        },
        src: ['./src/**/*.ts', 'node_modules/@types/node/index.d.ts']
      }
    }
  });


  // Default task(s).
  grunt.registerTask('default', ['docco', 'typedoc']);
};
