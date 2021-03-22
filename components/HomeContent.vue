<template>
    <div id="home-content" class="home-content">
        <vs-avatar size="150" class="avatar">
            <img src="../assets/ricky.jpg" alt="">
        </vs-avatar>
        <h1 class="main-page-name">
            <b>Ricky Liu</b>
        </h1>
        <transition name="slide-fade" mode="out-in">
            <h2 class="main-page-name" :key="category">
                {{category}}
            </h2>
        </transition>
        <div class="subtitles">
            <a class="subtitle" id="subtitle1" href="#overview">
                <h4>Overview</h4>
            </a>
            <a class="subtitle" id="subtitle2" href="#work">
                <h4>Portfolio</h4>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeContent",
    data () {
        return {
            category: "Software developer",
            categories: ["Software developer", "Map enjoyer", "Self-proclaimed funny guy"],
            iterator: 1,
        }
    },
    mounted () {

        setInterval(() => {
            if (this.iterator >= this.categories.length) {
                this.iterator = 0;
            }
            this.category = this.categories[this.iterator];
            this.iterator++;
        }, 3000)
    }
}
</script>

<style lang="scss">

</style>