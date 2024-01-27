<template>
    <div class="start">
        <header>
            <div class="logo"><img src='/캡처.PNG'/><p class="intro">story</p></div>
            <form>
                <input class="input_id" tpye="text"/>
                <select v-model="UserTime" class="select_day">
                    <option>day</option>
                    <option>week</option>
                    <option>month</option>
                    <option>year</option>
                    <option>all</option>
                </select>
                <select v-model="UserNet" class="select_net">
                    <option>mainnet</option>
                    <option>testnet</option>
                </select>
            </form>
            <div class="account">
                <p>account</p>
            </div>
        </header>
        <main>
            <div class="block">
            </div>
            <div class="charactor">
                <div class="charactor_bar"><img class="charactor_img" src="/pngwing.com.png"/><p>{{ UserId }}</p></div>
                <div class="level">레벨 : 0</div>
                <div class="coin">돈 : 0</div>
            </div>
            <div class="side">
                <ul>
                    <li>OverView</li>
                    <li>Stats</li>
                    <li>Transactions</li>
                    <li>Quests</li>
                    <li>Contract</li>
                    <li>Leaderboards</li>
                </ul>
            </div>
            <div class="Score_Level">
                <div class="intro_board">

                </div>
            </div>
        </main>
    </div>
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
    },
    methods:{
        testAxios(){
        }
    }
}
</script>

<style>
@import "../style/userpage.css";
</style>