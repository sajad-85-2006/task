const app = new Vue({
    el: '#app',
    data() {

        return {
            product: 'helow',
            modal: false,
            modal_1: false,
            modal_2: false,
            edit: false,
            info: null,
            url:window.location.href,
            id:null,
            name:null,
            caption:null,
            number:null,
            name_1:null,
            caption_1:null,
            time:null,
            item:null,
            form:false,
            edit_1:false
        }
    },
    async mounted() {
       const api = axios.get('http://localhost:9000/task').then(response => (this.info = response.data));
       this.info = JSON.parse(this.info)
       const apiItem = axios.get('http://localhost:9000/item').then(response => (this.item = response.data));
       this.item = JSON.parse(this.item)
    },
    methods: {
        Deelete(text,task) {
            if(task=='task'){
            const api = axios.get('http://localhost:9000/task/delete?id='+text).then(response => (this.info = response.data));

            }if(task=='form'){
                const api_form = axios.get('http://localhost:9000/item/delete?id='+text).then(response => (this.item = response.data));

            }
        },
        Create(name,caption,number,task) {
            if(task=='task'){
                const api = axios.get('http://localhost:9000/task/create?name='+name+'&caption='+ caption +'&number='+number).then(response => (this.info = response.data));
                this.name=null
                this.caption=null
                this.number=null
                this.modal_1=false
            }if(task=='form'){
                const api_form = axios.get('http://localhost:9000/item/create?name='+name+'&caption='+caption+'&time='+number).then(response => (this.item = response.data));
                this.name_1=null
                this.caption_1=null
                this.time=null
                this.form=false
            }
        },
        Update(name,number,caption,id,task){
            if(task == 'task'){
                const api = axios.get('http://localhost:9000/task/update?id='+id+'&name='+name+'&caption='+ caption +'&number='+number).then(response => (this.info = response.data));
                this.edit=false
            }if(task == 'form'){
                const api = axios.get('http://localhost:9000/item/update?id='+id+'&name='+name+'&caption='+ caption +'&time='+number).then(response => (this.item = response.data));
                this.edit_1=false
                
            }
            console.log(number)
        }
    }
})
// new Vue({
//     el: '#app',
//     data () {
//       return {
//         info: null
//       }
//     },
//     mounted () {
//       axios
//         .get('http://localhost:9000/task')
//         .then(response => (this.info = response))
//     }
//   })