import axios from "axios"// fixme 
new Vue({
    
    el: '#app',
    data() {

        return {
            product: 'helow',
            modal: false,
            modal_1: false,
            modal_2: false,
            edit: false,
            info: null,
        }
    },
    mounted() {
        axios.get('http://localhost:9000/task').then(response => (this.info = response))
    }
})