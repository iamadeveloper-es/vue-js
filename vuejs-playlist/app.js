new Vue({
    el: '#vue-app',
    data: {
        appTitle: 'I am a Developer Learning Vue',
        website: 'http://iamadeveloper.es',
        printSpan: '<span>This is an example of how to <strong>output an "html tag"</strong> using data binding.</span>',
        cantidad: 50,
        x: 0,
        y: 0,
        name: '',
        edad: 35,
        color: false

    },
    methods:{
        lessonTitle: function(lessonName){
            return "Lesson name: " + lessonName
        },
        add: function(inc){
            //this.cantidad++;
            this.cantidad += inc
        },
        subtract: function(dec){
            //this.cantidad--;
            this.cantidad -= dec
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
            //console.log(event.offsetX);
        },
        showAlert: function(){
            alert('Has hecho "click", al cerrar está ventana NO te redirigirá al link');
        },
        updateName: function(){
            alert('your name has been saved');
        }
    },
    computed:{
        updateEdad: function(){
           
           this.edad + 20
           console.log(this.edad);
        },
        changeClass: function(){
            return{
                color: this.color
            }
        }
    }
});