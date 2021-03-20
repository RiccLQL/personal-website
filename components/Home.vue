<template>
    <div class="home" id="home" >
        <vue-wavify class="wave" :points="pathRandomizer.points" :speed="pathRandomizer.speed" :amplitude="pathRandomizer.amplitude" :fill="`rgb(${pathRandomizer.fillR}, ${pathRandomizer.fillG}, ${pathRandomizer.fillB})`"/>
        <svg class="sun" height="500" width="500">
            <circle cx="0" cy="0" r="200" :fill="`rgb(${sun.R}, ${sun.G}, ${sun.B})`" />
        </svg>
        <div class="mood-toggle">
            <h5 class="mood-toggle-title">
                Mood Toggle
            </h5>
            <div class="switches">
                <vs-switch dark v-model="lightSwitch" @change="toggleMood(lightSwitch, weatherSwitch)">
                    <template #on>
                        Night
                    </template>
                    <template #off>
                        Day
                    </template>
                </vs-switch>
                <br>
                <vs-switch color="rgb(129, 140, 163)" v-model="weatherSwitch" @change="toggleMood(lightSwitch, weatherSwitch)">
                    <template #on>
                        Cloudy
                    </template>
                    <template #off>
                        Sunny
                    </template>
                </vs-switch>
            </div>
        </div>
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
    </div>
</template>

<script>
import VueWavify from 'vue-wavify';

export default {
    name: "Home",
    components: { VueWavify },
    data () {
        return {
            category: "Software developer",
            categories: ["Software developer", "Entrepreneur", "Artist", "Community leader", "Map enjoyer"],
            iterator: 1,
            pathRandomizer: {
                points: 4,
                speed: 0.30,
                height: 10,
                amplitude: 30,
                fillR: 181,
                fillG: 199,
                fillB: 237
            },
            sun: {
                R: 255,
                G: 255,
                B: 224
            },
            lightSwitch: false,
            weatherSwitch: false
        }
    },
    methods: {
        toggleMood: async function (lightSwitch, weatherSwitch) {
            if (this.lightSwitch === true && this.weatherSwitch === true) {
                document.getElementById("home-content").style.color = 'white';
                document.getElementById("home").style.backgroundColor = 'rgb(46, 46, 46)';
                document.getElementById("subtitle1").style.backgroundColor = 'rgb(78, 87, 85)';
                document.getElementById("subtitle2").style.backgroundColor = 'rgb(78, 87, 85)';
                document.getElementById("subtitle3").style.backgroundColor = 'rgb(78, 87, 85)';
                this.sun.R = 46;
                this.sun.G = 46;
                this.sun.B = 46;
                this.pathRandomizer.fillR = 103;
                this.pathRandomizer.fillG = 101;
                this.pathRandomizer.fillB = 117;
            } else if (this.lightSwitch === false && this.weatherSwitch === true) {
                document.getElementById("home-content").style.color = 'rgb(31, 26, 119)';
                document.getElementById("home").style.backgroundColor = 'rgb(222, 222, 222)';
                document.getElementById("subtitle1").style.backgroundColor = 'white';
                document.getElementById("subtitle2").style.backgroundColor = 'white';
                document.getElementById("subtitle3").style.backgroundColor = 'white';
                this.sun.R = 247;
                this.sun.G = 246;
                this.sun.B = 235;
                this.pathRandomizer.fillR = 176;
                this.pathRandomizer.fillG = 197;
                this.pathRandomizer.fillB = 235;
            } else if (this.lightSwitch === true && this.weatherSwitch === false) {
                document.getElementById("home-content").style.color = 'white';
                document.getElementById("home").style.backgroundColor = 'rgb(38, 34, 46)';
                document.getElementById("subtitle1").style.backgroundColor = 'rgb(71, 61, 92)';
                document.getElementById("subtitle2").style.backgroundColor = 'rgb(71, 61, 92)';
                document.getElementById("subtitle3").style.backgroundColor = 'rgb(71, 61, 92)';
                this.sun.R = 227;
                this.sun.G = 224;
                this.sun.B = 217;
                this.pathRandomizer.fillR = 65;
                this.pathRandomizer.fillG = 59;
                this.pathRandomizer.fillB = 99;
            } else {
                document.getElementById("home-content").style.color = 'rgb(31, 26, 119)';
                document.getElementById("home").style.backgroundColor = 'rgb(209, 222, 248)';
                document.getElementById("subtitle1").style.backgroundColor = 'white';
                document.getElementById("subtitle2").style.backgroundColor = 'white';
                document.getElementById("subtitle3").style.backgroundColor = 'white';
                this.sun.R = 255;
                this.sun.G = 255;
                this.sun.B = 224;
                this.pathRandomizer.fillR = 181;
                this.pathRandomizer.fillG = 199;
                this.pathRandomizer.fillB = 237;
            }
        }
    },
    mounted () {

        setInterval(() => {
            console.log(this.iterator)
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
    justify-content:flex-start;
    align-items: center;
    background-color: rgb(209, 222, 248);
    transition: background-color 1s;
}

i {
    background-color: black;
}

.avatar {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2em;
    animation-name: fade-in;
	animation-fill-mode: both;
	animation-duration: 0.8s;

}

.home-content {
    color: rgb(31, 26, 119);
    font-family: 'Poppins';
    margin-top: 16vh;
    user-select: none;
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
    display: flex !important;
    bottom: 0;
    transition: ease;
    height: 12em;
}

.sun {
    position: absolute;
    left: 0;
    top: 0;
}

circle {
    transition: fill 1s;
}

 path { 
     transition: fill 1s; 
     }

.subtitles {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 2em;
}

.subtitle {
    all: unset;
    margin-left: 2em;
    margin-right: 2em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    padding-left: 1em;
    padding-right: 1em;
    border-radius: 0.8em;
    background-color: rgb(255, 255, 255);
        transition: color 1s;
        transition: background-color 1s;
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
  transition: all 2s ease;
  transition: color 1s;
}
.slide-fade-leave-active {
  transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    transition: color 1s;
}

.mood-toggle {
    position: absolute;
    right: 0;
    margin-right: 10em;
    margin-top: 5em;
    background-color: white;
    border-radius: 0.8em;
}

.mood-toggle-title {
    margin: 1em;
    margin-left: 1.3em;
    margin-right: 1.3em;
}

.switches {    
    margin: 1em;
    margin-left: 1.5em;
    margin-right: 1.5em;

}
</style>