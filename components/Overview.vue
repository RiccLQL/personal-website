<template>
    <div class="overview" id="overview">
        <div class="overview-content" id="overview-content">
            <h2 class="section-title">
                Overview
            </h2>
            <p class="description">
                My name is Ricky Liu, and I study software engineering at McGill University. I am passionate about product design, business, urban planning and tech operations, and I study software as a tool to solve important problems in all these fields.
                <br><br>
                Currently, I am leading an early-stage drone startup, and I'm really excited for all the work that's coming up. If you're interested in talking about drones or software engineering opportunities, I'd love to chat and learn!
            </p>
            <h3 class="section-subtitle">
                Skills
            </h3>
            <div class="skills">
                <font-awesome-icon class="arrow" icon="arrow-left" @click="rotate('left')" />
                    <StatsTab class="statstab" v-bind:stats="stats.languages" v-bind:carousel="carousel" v-bind:carouselPhoto="carouselPhotos[0]" v-if="carousel === 'Languages'" :key="carouselCounter" />
                    <StatsTab class="statstab" v-bind:stats="stats.webDev" v-bind:carousel="carousel" v-bind:carouselPhoto="carouselPhotos[1]" v-if="carousel === 'Web Development'" :key="carouselCounter" />
                    <StatsTab class="statstab" v-bind:stats="stats.embedded" v-bind:carousel="carousel" v-bind:carouselPhoto="carouselPhotos[2]" v-if="carousel === 'Embedded Systems'" :key="carouselCounter"/>
                    <StatsTab class="statstab" v-bind:stats="stats.otherSkills" v-bind:carousel="carousel" v-bind:carouselPhoto="carouselPhotos[3]" v-if="carousel === 'Other Skills'" :key="carouselCounter"/>
                    
                <font-awesome-icon class="arrow" icon="arrow-right" @click="rotate('right')" />
            </div>
        </div>
    </div>
</template>

<script>
import StatsTab from './StatsTab';

export default {
    name: "Overview",
    components: { StatsTab },
    data () {
        return {
            stats: {
                webDev: {
                    VueNuxt: { score: 95, title: "Vue & Nuxt" },
                    React: { score: 80, title: "React" },
                    Express: { score: 90, title: "Express" },
                    JavaSpring: { score: 88, title: "Java Spring" },
                    NetlifyHeroku: { score: 85, title: "Netlify & Heroku" },
                    Linux: { score: 75, title: "Linux & Bash" },
                    git: { score: 90, title: "Git"},
                },
                embedded: {
                    rpi: { score: 85, title: "Raspberry Pi"},
                    arduino: { score: 85, title: "Arduino"},
                },
                languages: {
                    JavaScript: { score: 91, title: "JavaScript" },
                    Java: { score: 90, title: "Java" },
                    HTML: { score: 90, title: "HTML" },
                    SCSS: { score: 87, title: "CSS/SCSS/SASS" },
                    python: { score: 84, title: "Python" },
                    c: { score: 78, title: "C" },
                    armassembly: { score: 75, title: "ARM Assembly" },
                    SQL: { score: 75, title: "SQL" },
                    cpp: { score: 66, title: "C++" }
                },
                otherSkills: {
                    publicSpeaking: { score: 88, title: "Public Speaking" },
                    photoshop: { score: 80, title: "Adobe Photoshop" },
                    illustrator: { score: 80, title: "Adobe Illustrator" },
                    figma: { score: 95, title: "Figma" },
                    notion: { score: 95, title: "Notion/Coda"}
                }
            },
            carousel: "Languages",
            carouselList: ["Languages", "Web Development", "Embedded Systems", "Other Skills"],
            carouselCounter: 0,
            carouselPhotos: ["softeng.jpg", "webdev.jpg", "embed.png", "softskills.jpg"]
        }
    },
    methods: {
        rotate: function (direction) {
            if (direction === "left") {
                if (this.carouselCounter === 0) {
                    this.carouselCounter = 4;
                }
                this.carousel = this.carouselList[this.carouselCounter - 1];
                this.carouselCounter--;
            } else {
                if (this.carouselCounter === 3) {
                    this.carouselCounter = -1;
                }
                this.carousel = this.carouselList[this.carouselCounter + 1];
                this.carouselCounter++;
            }
        }
    }
}
</script>

<style lang="scss">

    .overview {
        height: 100vh;
        width: 100vw;
        overflow: hidden;    
        display: flex;
        flex-direction: column;    
        position: relative;
        justify-content:flex-start;
        align-items: center;
        transition: background-color 1s;
        background-color: rgb(245, 248, 255);
    }

    .overview-content {
        margin-top: 3.5em;
        margin-left: 0;
        margin-right: 0;
        color: rgb(31, 26, 119);
        transition: all 1s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .skills {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 60vw;
        height: 20em;
    }

    .arrow {
        width: 2em;
    }

    .statstab {
        transition: all 1s ease;
        animation-fill-mode: both;
	    animation-duration: 0.3s;
        animation-name: fade-in;
    }

    @keyframes fade-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
</style>