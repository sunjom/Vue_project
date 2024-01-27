<template>
    <header class="HeaderStyle"></header>
    <main class="MainStyle">
        <form class="MainFlex" @submit.prevent="onSubmit">
            <div class="intro">
                <p class="intro_font">dsadsadasdas</p>
            </div>
            <div class="SubmitStyle">
                <div>
                    <input name="Id" v-model="Id" type="text" >
                    <p>Enter account name</p>
                </div>
                <div>
                    <select v-model="Time">
                        <option>day</option>
                        <option>week</option>
                        <option>month</option>
                        <option>year</option>
                        <option>all</option>
                    </select>
                    <p>Select range</p>
                </div>
                <div>
                    <select v-model="Net">
                        <option selected>mainnet</option>
                        <option>testnet</option>
                    </select>
                    <p>Select network</p>
                </div>
                <div>
                    <button :style="inline" @click.stop.prevent="submit()" type="submit">제출</button>
                    <p></p>
                </div>
            </div>
        </form>
    </main>
    <footer></footer>
</template>

<script>
export default{
    data: function(){
        return {
            Id:'',
            Time:'day',
            Net:'mainnet',
        }
    },
    methods:{
        submit(){
            this.$router.push({path:`/user/${this.Id}/${this.Net}/${this.Time}`});
        }
    }
    
}

</script>
<style>
@import '../style/firstpage.css';
</style>
