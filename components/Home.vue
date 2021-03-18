<template>
    <div class="home">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="wave"><path fill-opacity="1" d="M0,32L48,53.3C96,75,192,117,288,122.7C384,128,480,96,576,117.3C672,139,768,213,864,208C960,203,1056,117,1152,106.7C1248,96,1344,160,1392,192L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <div class="home-content">
            <transition name="slide-fade" mode="out-in">
            <h2 class="main-page-name" :key="category">
                <b>Ricky Liu</b> | {{category}}
            </h2>
            </transition>
            <div class="subtitles">
                <h4 class="subtitle">
                    My Work
                </h4>
                <h4 class="subtitle">
                    About
                </h4>
                <h4 class="subtitle">
                    Contact
                </h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data () {
        return {
            category: "Software developer",
            categories: ["Software developer", "Entrepreneur", "Artist", "Community leader", "Map enjoyer"],
            iterator: 1,
        }
    },
    methods: {

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


.home {
    height: 100vh;
    width: 100vw;
    overflow: hidden;    
    display: flex;
    flex-direction: column;    
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: rgb(209, 222, 248);
}

.home-background-img {
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: -1;
}

.home-content {
    color: rgb(31, 26, 119);
    font-family: 'Poppins';
}

.main-page-name {
    animation-name: fade-in;
    transition: all 1s;
	animation-fill-mode: both;
	animation-duration: 0.8s;
}

.main-page-title {
    animation-name: fade-in;
    transition: all 1s;
	animation-fill-mode: both;
	animation-duration: 0.8s;
}

.wave {
    fill: rgb(181, 199, 237);
    position: absolute;
    bottom: 0;
}

.subtitles {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 2em;
}

.subtitle {
    margin-left: 2em;
    margin-right: 2em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    padding-left: 1em;
    padding-right: 1em;
    border-radius: 2.2em;
    background-color: rgb(181, 199, 237);
}

.subtitles .subtitle {
    animation-name: fade-in;
	animation-fill-mode: both;
	animation-duration: 0.8s;
}

@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

$animationDelay: 1;
@for $i from 1 through 7 {
	.subtitles .subtitle:nth-of-type(#{$i}) {
		animation-delay: #{0.3+($i)/10}s;
  }
}

.slide-fade-enter-active {
  transition: all 1.1s ease;
}
.slide-fade-leave-active {
  transition: all 1.1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

</style>