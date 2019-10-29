var mixin = {
    methods: {
        async ADD_FIREBASE (base, dados){
            await this.$firebase.database().ref(base+'/').push(dados).then( (data) => {
                console.log(data);
            })
        }
    }
}

export default mixin