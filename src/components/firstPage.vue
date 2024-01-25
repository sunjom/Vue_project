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
.HeaderStyle{
    height:10%;
    background-color:red;
}
.MainStyle{
    height:60%;
    background-color:green;
    padding:20px 0;
}
.MainFlex{
    display:flex;
    width:100%;
    height:100%;
    align-items:center;
    flex-direction: column;
}
form > div{
    height:40%;
}
div > input,select,button{
    width:212px;
    height:28px;
    padding:12px;
    border: none;
    box-sizing:content-box;
    margin-left: 10px;
}
.SubmitStyle{
    display:flex;
    width: 90%;
    flex-direction: row;
    justify-content: center;
}
div > p{
    text-align: center;
}
.intro_font{
    color:red;
    font-size: 40px;
}
 @media all and (max-width: 1023px) {
    .SubmitStyle{
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    form > div{
        height:20%
    }
} 
</style>
