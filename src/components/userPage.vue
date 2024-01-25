<template>
<p>성공</p>
<p>{{ UserId }}</p>
<p>{{UserTime}}</p>
<p>{{UserNet}}</p>
</template>

<script>
export default{
    name:'userPage',
    props:{
        Id:String,
        Time:String,
        Net:String,
    },
    data(){
        return{
            UserId: this.$route.params.Id,
            UserTime:this.$route.params.Time,
            UserNet:this.$route.params.Net,
        }
    }
}
</script>

<style>

</style>