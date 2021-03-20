<template>
    <div id="home-content" class="home-content">
        <vs-avatar size="200" class="avatar">
            <img src="../assets/ricky.jpg" alt="">
        </vs-avatar>
        <h2 class="main-page-name">
            <b>Ricky Liu</b>
        </h2>
        <transition name="slide-fade" mode="out-in">
            <h2 class="main-page-name" :key="category">
                {{category}}
            </h2>
        </transition>
        <div class="subtitles">
            <button class="subtitle" id="subtitle1">
                <h4>My Work</h4>
            </button>
            <button class="subtitle" id="subtitle2">
                <h4>About</h4>
            </button>
            <button class="subtitle" id="subtitle3">
                <h4>Contact</h4>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeContent",
    data () {
        return {
            category: "Software developer",
            categories: ["Software developer", "Entrepreneur", "Map enjoyer", "Self-proclaimed funny guy"],
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