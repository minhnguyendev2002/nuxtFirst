<template>
    <div class="d-flex justify-content-center align-items-center">
        <div class="card-box col-12 col-md-6 col-lg-3 my-5">
            <div class="card-inner d-flex flex-column">
                <div class="card-background"><img :src="cardD.image" alt="/" /></div>
                <div class="card-infor text-center">
                    <span>Level {{cardD.level}}</span>
                    <nuxt-link :to="`/${cardD.id}`"><h3>{{cardD.name}}</h3></nuxt-link>
                    <p>{{cardD.description}}</p>
                </div>
                <div class="card-power">
                    <ul class="d-flex justify-content-between p-0 m-0">
                        <li><span>{{cardD.training}}</span><span>Training (s)</span></li>
                        <li><span>{{cardD.speed}}</span><span>Speed</span></li>
                        <li><span>{{cardD.cost}}</span><span>Cost</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: "DeatailsCard",
    data() {
        return {
            cardD: Object
        }
    },
    created() {
        axios.get(`https://class-clan-base-default-rtdb.firebaseio.com/character/${this.$route.params.id}.json`)
            .then(res => {
                this.cardD = res.data
                return res.data
            })
    }
}
</script>

<style scoped>
    .card-inner {
        box-shadow: #0000003d 0 3px 8px;
        border-radius: 12px;
    }

    .card-background {
        height: 200px;
        max-height: 200px;
        background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian-bg.jpg") no-repeat center;
        background-size: cover;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }

    .card-background img {
        width: 100%;
        object-fit: cover;
        position: relative;
        z-index: 2;
        top: -35px;
        transform: scale(1);
        max-width: 300px;
    }

    .card-power ul {
        list-style: none;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        overflow: hidden;
    }

    .card-infor {
        padding: 40px 15px 15px;
        position: relative;
        z-index: 3;
    }

    .card-infor a {
        text-decoration: none;
        color: black;
    }

    .card-infor h3 {
        font-weight: 700;
    }

    .card-infor > span {
        font-weight: 600;
        color: #EC9B3B;
    }

    .card-power ul li {
        background-color: #EC9B3B;
        width: 100%;
        height: 100%;
        flex: 1;
        text-align: center;
        border-right: 1px solid #BD7C2F;
        padding: 10px;
    }

    .card-power ul li:last-child {
        border-right: none;
    }

    .card-power ul li span {
        display: block;
        color: #fff;
    }

    .card-power ul li span:first-child {
        font-size: 24px;
        font-weight: 700;
    }

    .card-power ul li span:last-child {
        text-transform: uppercase;
        font-size: 12px;
    }

</style>