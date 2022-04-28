<template>
    <div class="modal-box">
        <div class="overlay"></div>
        <form class="my-form text-center" @submit.prevent="onSave">
            <h2>Them nhan vat</h2>
            <input v-model="card.name" type="text" placeholder="Name" />
            <input v-model="card.level" type="text" placeholder="Level" />
            <textarea v-model="card.description" placeholder="description"></textarea>
            
            <input v-model="card.image" type="text" placeholder="image" />

            <div class="power">
                <input v-model="card.training" type="text" placeholder="Training" />
                <input v-model="card.speed" type="text" placeholder="Speed" />
                <input v-model="card.cost" type="text" placeholder="Cost" />
            </div>

            <button type="submit" @submit.prevent="onSave">Add</button>
        </form>
    </div>
</template>

<script>

export default {
    name:"AddCharacter",
    data() {
        return {
            card: {
                name:"",
                level:"",
                description:"",
                training:"",
                speed:"",
                cost:"",
                image:"",
            }
        }
    },
    methods:{
        onSave() {
            this.$emit('submit', this.card)
        }
    }
}
</script>

<style scoped>
    .modal-box {
        position: fixed;
        z-index: 10;
        width: 100vw;
        height: 100vh;

    }

    .modal-box .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 11;
        background-color: #464646;
    }

    .modal-box .my-form {
        background-color: #FFF;
        position: absolute;
        z-index: 12;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 360px;
        padding: 20px;
        border-radius: 20px;
    }

    .my-form input, .my-form textarea {
        width: 100%;
        margin-bottom: 10px;
        padding: 5px 10px;
    }
    
    .my-form button {
        width: 120px;
        border-radius: 8px;
    }
</style>