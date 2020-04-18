new Vue({
    el: '#vue-app',
    data: {
        appTitle: 'I am a Developer Learning Vue',
        website: 'http://iamadeveloper.es',
        printSpan: '<span>This is an example of how to <strong>output an "html tag"</strong> using data binding.</span>'

    },
    methods:{
        lessonTitle: function(lessonName){
            return "Lesson name: " + lessonName
        }
    }
});