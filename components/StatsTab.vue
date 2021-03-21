<template>
    <div class="stats-tab-wrapper">
        <div class="stats-left">
            <vs-avatar size="200" class="avatar-skill">
                <img :src="require(`../assets/${carouselPhoto}`)" alt="">
            </vs-avatar>
            <h4>
                {{carousel}}
            </h4>
        </div>
        <div class="stats-list" >
            <div class="stat" v-for="stat in stats" :key="stat.title">
                <p>{{stat.title}}</p>
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
        padding-left: 2em;
        padding-right: 2em;
        align-items: center;
        justify-content: center;
        user-select: none;
    }

    .stats-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 4em;
    }

    .stat {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 30em;
    }

    .stats-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .avatar-skill {
        margin-bottom: 3em;
    }

    progress {
        -webkit-appearance: none;
        appearance: none;
        width: 15em;
        height: 8px;
        margin-left: 3em;
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