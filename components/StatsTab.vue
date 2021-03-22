<template>
    <div class="stats-tab-wrapper">
        <div class="stats-left">
            <vs-avatar size="150" class="avatar-skill">
                <img :src="require(`../assets/${carouselPhoto}`)" alt="">
            </vs-avatar>
            <h4>
                {{carousel}}
            </h4>
        </div>
        <div class="stats-list" >
            <div class="stat" v-for="stat in stats" :key="stat.title">
                <p class="stat-title">{{stat.title}}</p>
                <progress :value="stat.score" max="100"></progress>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StatsTab",
    props: [ 'stats', 'carousel', 'carouselPhoto' ]
}
</script>

<style lang="scss">
    .stats-tab-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        user-select: none;
        width: 80%;
    }

    .stats-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 4%;
        width: 70%;
        float: right;
    }

    .stat {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .stat-title {
        width: 50%;
        text-align: left;
    }

    .stats-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 30%;
        float: left;
    }

    .avatar-skill {
        margin-bottom: 3%;
    }

    progress {
        -webkit-appearance: none;
        appearance: none;
        width: 50%;
        height: 8px;
        margin-left: 3%;
    }

    progress::-webkit-progress-bar {
        background-color: white;
        border: 1px solid rgb(31, 26, 119);
        border-radius: 0.8em;
    }

    progress::-webkit-progress-value {
        background-color: rgb(31, 26, 119);
        border-radius: 0.8em;
    }
</style>