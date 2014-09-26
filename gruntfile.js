module.exports = function(grunt) {

    grunt.initConfig({

        express: {
            dev: {
                options: {
                    script: "servers/node/app.js"
                }
            }
        },

        jshint: {
            files: ["gruntfile.js", "/client/**/*.js", "/servers/node/**/*.js"]
        },

        watch: {

            options: {
                livereload: true
            },

            jshint: {
                files:  ["gruntfile.js", "/client/**/*.js", "/servers/node/**/*.js"],
                tasks: ["jshint"]
            },

            express: {
                files: "servers/node/**/*.js",
                tasks: ["express:dev"],
                options: {
                    spawn: false
                }
            }
        },

        open: {
            all: {
                path: "http://localhost:8080/default.html"
            }
        }
    });

    grunt.registerTask("default", ["express:dev", "jshint", "open", "watch"]);
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-express-server");
    grunt.loadNpmTasks("grunt-open");
};