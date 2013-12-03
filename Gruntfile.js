module.exports = function(grunt){

    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        transport: {
            mytest:{
                files: [{
                    expand:true,
                    cwd: 'src',
                    src: '**/*.js',
                    dest: 'dist'
                }]
            }
        }
    });


    grunt.loadNpmTasks('grunt-cmd-transport');

    // 默认任务
    grunt.registerTask('default', ['transport']);
}