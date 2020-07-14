<template>

    <div class="base-spinner fa-4x"  v-if="Loading">
        <i class="fas fa-circle-notch fa-spin"></i>
    </div>
        
    
</template>

<script>

export default {
    data() {
        return {
            Loading: false
        }
    },
    computed: {
    },
    methods: {
        AlterarSpinner(payload){
            this.Loading = payload
        }
    },
    created (){
        this.$root.$on('Spinner::show', () => { this.AlterarSpinner(true) })
        this.$root.$on('Spinner::hide', () => { this.AlterarSpinner(false) })
    }
}
</script>

<style lang="sass" scoped>


.base-spinner
    top: 0
    bottom: 0
    right: 0
    left: 0
    position: absolute
    width: 100vw
    height: 100vh
    display: flex
    align-items: center
    justify-content: center
    background-color: #003b59
    color: #fff
    z-index: 10000
</style>