<template>
    <div class="home" id="home" >
        <div class="home-gradient" id="home-gradient">
        </div>
        <div class="home-bg" id="home-bg">
        </div>
        <vue-wavify class="wave" :points="pathRandomizer.points" :speed="pathRandomizer.speed" :amplitude="pathRandomizer.amplitude" :fill="`rgb(${pathRandomizer.fillR}, ${pathRandomizer.fillG}, ${pathRandomizer.fillB})`"/>
        <svg class="sun" height="500" width="500" id="sun" >
            <circle cx="0" cy="0" r="200" :fill="`rgb(${sun.R}, ${sun.G}, ${sun.B})`" />
        </svg>
        <div class="mood-toggle">
            <h5 class="mood-toggle-title">
                Mood Toggle
            </h5>
            <div class="switches">
                <vs-switch dark v-model="lightSwitch" @change="toggleMood()">
                    <template #on>
                        Night
                    </template>
                    <template #off>
                        Day
                    </template>
                </vs-switch>
                <br>
                <vs-switch color="rgb(129, 140, 163)" v-model="weatherSwitch" @change="toggleMood()">
                    <template #on>
                        Cloudy
                    </template>
                    <template #off>
                        Sunny
                    </template>
                </vs-switch>
                <br>
                <button class="subtitle sunset-button" id="sunset-button" @click="toggleSunset()">
                    <h6>Sunset Mode</h6>
                </button>
            </div>
        </div>
        <HomeContent />
    </div>
</template>

<script>
import VueWavify from 'vue-wavify';
import HomeContent from './HomeContent';
import Work from './Work';

export default {
    name: "Home",
    components: { VueWavify, HomeContent, Work },
    data () {
        return {
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
            weatherSwitch: false,
            sunsetSwitch: false,
            lastScrollTop: 0,
            section: 0
        }
    },
    methods: {
        toggleMood: function () {
            this.$emit('toggleMood', [this.lightSwitch, this.weatherSwitch, this.sunsetSwitch]);
            if (this.sunsetSwitch === false) {
                document.getElementById("home-bg").style.backgroundImage = 'none';
                document.getElementById("sun").style.opacity = '1';
                document.getElementById("home-bg").style.opacity = '1';
                document.getElementById("sunset-button").style.backgroundColor = 'rgb(209, 222, 248)';
                document.getElementById("sunset-button").style.color = 'rgb(31, 26, 119)';
                if (this.lightSwitch === true && this.weatherSwitch === true) {
                    document.getElementById("home-content").style.color = 'white';
                    document.getElementById("home-bg").style.backgroundColor = 'rgb(46, 46, 46)';
                    document.getElementById("subtitle1").style.backgroundColor = 'rgb(78, 87, 85)';
                    document.getElementById("subtitle2").style.backgroundColor = 'rgb(78, 87, 85)';
                    document.getElementById("subtitle3").style.backgroundColor = 'rgb(78, 87, 85)';
                    document.getElementById("work").style.backgroundColor = 'rgb(103, 101, 117)';
                    this.sun.R = 46;
                    this.sun.G = 46;
                    this.sun.B = 46;
                    this.pathRandomizer.fillR = 103;
                    this.pathRandomizer.fillG = 101;
                    this.pathRandomizer.fillB = 117;
                } else if (this.lightSwitch === false && this.weatherSwitch === true) {
                    document.getElementById("home-content").style.color = 'rgb(31, 26, 119)';
                    document.getElementById("home-bg").style.backgroundColor = 'rgb(222, 222, 222)';
                    document.getElementById("subtitle1").style.backgroundColor = 'white';
                    document.getElementById("subtitle2").style.backgroundColor = 'white';
                    document.getElementById("subtitle3").style.backgroundColor = 'white';
                    document.getElementById("work").style.backgroundColor = 'rgb(176, 197, 235)';
                    this.sun.R = 247;
                    this.sun.G = 246;
                    this.sun.B = 235;
                    this.pathRandomizer.fillR = 176;
                    this.pathRandomizer.fillG = 197;
                    this.pathRandomizer.fillB = 235;
                } else if (this.lightSwitch === true && this.weatherSwitch === false) {
                    document.getElementById("home-content").style.color = 'white';
                    document.getElementById("home-bg").style.backgroundColor = 'rgb(38, 34, 46)';
                    document.getElementById("subtitle1").style.backgroundColor = 'rgb(71, 61, 92)';
                    document.getElementById("subtitle2").style.backgroundColor = 'rgb(71, 61, 92)';
                    document.getElementById("subtitle3").style.backgroundColor = 'rgb(71, 61, 92)';
                    document.getElementById("work").style.backgroundColor = 'rgb(65, 59, 99)';
                    this.sun.R = 227;
                    this.sun.G = 224;
                    this.sun.B = 217;
                    this.pathRandomizer.fillR = 65;
                    this.pathRandomizer.fillG = 59;
                    this.pathRandomizer.fillB = 99;
                } else {
                    document.getElementById("home-content").style.color = 'rgb(31, 26, 119)';
                    document.getElementById("home-bg").style.backgroundColor = 'rgb(209, 222, 248)';
                    document.getElementById("subtitle1").style.backgroundColor = 'white';
                    document.getElementById("subtitle2").style.backgroundColor = 'white';
                    document.getElementById("subtitle3").style.backgroundColor = 'white';
                    document.getElementById("work").style.backgroundColor = 'rgb(181, 199, 237)';
                    this.sun.R = 255;
                    this.sun.G = 255;
                    this.sun.B = 224;
                    this.pathRandomizer.fillR = 181;
                    this.pathRandomizer.fillG = 199;
                    this.pathRandomizer.fillB = 237;
                }
            } else {
                    document.getElementById("home-content").style.color = 'rgb(31, 26, 119)';
                    document.getElementById("sun").style.opacity = '0';
                    document.getElementById("home-bg").style.opacity = '0';
                    document.getElementById("subtitle1").style.backgroundColor = 'rgb(93, 83, 184)';
                    document.getElementById("subtitle2").style.backgroundColor = 'rgb(93, 83, 184)';
                    document.getElementById("subtitle3").style.backgroundColor = 'rgb(93, 83, 184)';
                    document.getElementById("home-content").style.color = 'white';
                    document.getElementById("sunset-button").style.backgroundColor = 'rgb(238,93,108)';
                    document.getElementById("sunset-button").style.color = 'white';
                    document.getElementById("work").style.backgroundColor = 'rgb(93, 83, 184)';
                    this.sun.R = 255;
                    this.sun.G = 255;
                    this.sun.B = 224;
                    this.pathRandomizer.fillR = 93;
                    this.pathRandomizer.fillG = 83;
                    this.pathRandomizer.fillB = 184;
            }
        },
        toggleSunset: function () {
            this.sunsetSwitch = !this.sunsetSwitch;
            this.toggleMood();
        },
    },
    mounted () {
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
    transition: background-color 1s;
}

.home-gradient {
    z-index: -2;
    background-image: linear-gradient(rgb(206,73,147), rgb(238,175,97));
    height: 100vh;
    width: 100vw;
    position: absolute;
}

.home-bg {
    background-color: rgb(209, 222, 248);
    height: 100vh;
    width: 100vw;
    position: absolute;
    transition: background-color 1s, opacity 1s;
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
    transition: opacity 1s;
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

.sunset-button {
    background-color: rgb(209, 222, 248);
    color: rgb(31, 26, 119);
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