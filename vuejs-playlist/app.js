new Vue({
    el: '#vue-app',
    data: {
        appTitle: 'I am a Developer Learning Vue',

    },
    methods:{
        lessonTitle: function(lessonName){
            return "Lesson name: " + lessonName
        }
    }
});