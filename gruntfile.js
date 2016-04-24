module.exports = function(grunt) {
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-prettysass');


grunt.initConfig({
	compass: {
		dev: {
			options: {
				config: 'config.rb'
			} //options
		} //dev
	}, //compass
	prettysass: {
    	options: {
      		// Task-specific options go here. 
      		alphabetize: true
    	},
    	your_target: {
      		// Target-specific file lists and/or options go here. 
      		src: ['sass/**/*.scss']
    	},
  	},
	watch: {
		options: { livereload: true},
		sass: {
			files: ['sass/**/*.scss'],
			tasks: ['compass:dev']
		},
		handlebars: {
			files: ['views/**/*.handlebars']
		}
	}
}); //initConfig
grunt.registerTask('default','watch');
} //exports