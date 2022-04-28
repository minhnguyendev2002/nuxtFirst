<template>
    <div class="position-relative">
        <FormAdd @submit="onSubmit"/>
    </div>
</template>

<script>
import axios from "axios";

import FormAdd from "../../components/Form";
export default {
    name:"HomeView",
    components: {
        FormAdd
    },
    methods: {
        onSubmit(data) {
            axios.post("https://class-clan-base-default-rtdb.firebaseio.com/character.json", data)
            .then(data => data)
            .catch(e => console.log(e))
        }
    }
}
</script>
