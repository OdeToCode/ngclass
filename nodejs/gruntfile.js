module.exports = function(grunt) {

    grunt.initConfig({

        express: {
            dev: {
                options: {
                    script: "app.js"
                }
            }
        },

        jshint: {
            files:
                ["gruntfile.js",
                "./controllers/*.js",
                "./data/*.js", "./models/*.js", "./routes/*.js",
                "./apps/**/*.js"]
        },

        watch: {

            options: {
                livereload: true
            },

            jshint: {
                files:  ["gruntfile.js", "./controllers/*.js", "./data/*.js", "./models/*.js", "./routes/*.js", "./apps/**/*.js"],
                tasks: ["jshint"]
            },

            express: {
                files: ["gruntfile.js", "./controllers/*.js", "./data/*.js", "./models/*.js", "./routes/*.js"],
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

    grunt.registerTask("default",
        ["express:dev", "jshint", "open", "watch"]);
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-express-server");
    grunt.loadNpmTasks("grunt-open");
};
