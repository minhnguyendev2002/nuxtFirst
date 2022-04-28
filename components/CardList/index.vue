<template>
    <div class="container mt-5">
        <div class="row">
            <Card 
                v-for="item in data" :key="item.key"
                :cardData="item"
            />
        </div>
    </div>
</template>

<script>
import axios from "axios";

import CardItem from "../Card/index.vue"
export default {
    name:"CardList",
    component: {
        CardItem
    },
    data() {
        return {
            data: []
        }
    },
    created(){
        axios.get("https://class-clan-base-default-rtdb.firebaseio.com/character.json")
            .then(res => {
                for(const key in res.data) {
                    this.data.push({...res.data[key], id: key})
                }
            })
            .catch(err => console.log(err))
    }
}
</script>