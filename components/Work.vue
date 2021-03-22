<template>
    <div class="work" id="work">
        <div class="work-content" id="work-content">
            <h2 class="portfolio-title">
                Portfolio
            </h2>
            <div v-for="experience in experiences" :key="experience.title" class="work-exp">
                <WorkEntity v-bind:title="experience.title" v-bind:position="experience.position" v-bind:dates="experience.dates" v-bind:desc="experience.desc"/>
            </div>
        </div>
    </div>
</template>

<script>
import WorkEntity from './WorkEntity';

export default {
    name: "Work",
    components: { WorkEntity },
    data () {
        return {
            experiences: [
                {title: "Vitol: Autonomous Medical Drone Delivery Startup", position: "Co-Founder and Chief Operating Officer", dates: "Jun 2020 -", desc: ["Launched an autonomous delivery drone start-up with 5 fellow students.", "Facilitating the development of a flight controller in C++, and tested over 10 sensors, servos and motors on Raspberry Pis using Python."]},
                {title: "McGill University", position: "Research Intern", dates: "Sep 2020 - Apr 2021", desc: ["Created a TripAdvisor web scraping script using Python to collect spatial data from the top 500 attractions in Washington DC and analyzed thousands of Lyft scooter trip data points in QGIS for a research project evaluating the impact of smart scooter-sharing on the tourism industry."]},
                {title: "Shi Tang: Food Delivery Management Application", position: "Full Stack Developer", dates: "Jun 2020 - Jan 2021", desc: ["Developed a food delivery management platform for my father’s downtown restaurant, which doubled delivery rates during lunchtime, using Vue.js, Express.js, Nginx and Google Cloud services."]},
                {title: "ECSESS - Student Council", position: "VP Communications", dates: "Apr 2020 - Apr 2021", desc: ["Improved the social media channels and the weekly newsletter to support online learning as the selected VP Communications for the McGill Electrical, Computer and Software Engineering (ECSE) department’s student council for 2020-2021.", "Impacted the ECSE department by building the first department website, using Vue.js, Express.js and MySQL, which centralized four social media outlets into one."]},

            ]
        }
    }
}
</script>

<style lang="scss">
    .work {
        min-height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;    
        position: relative;
        justify-content:flex-start;
        align-items: center;
        transition: background-color 1s;
        background-color: rgb(245, 248, 255);
    }

    .work-content {
        margin-top: 2em;
        color: rgb(31, 26, 119);
        transition: all 1s;
    }

    .work-exp {
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items: center;
        margin-bottom: 2%;
    }

    .portfolio-title {
        margin-bottom: 3%;
    }
</style>