<template>
  <div class="container">
    <div>
      <Home @toggleMood="toggleMood"/>      
      <Overview />
      <Work />

    </div>
  </div>
</template>

<script>
import Home from '../components/Home';
import Work from '../components/Work';
import Overview from '../components/Overview';

export default {

  components: {
    Home, Work, Overview
  },
  methods: {
    toggleMood: function (switches) {
      //switches[0] is light, switches[1] is weather, switches[2] is sunset
      if (switches[2] === false) {
        if (switches[0] === true && switches[1] === true) {
            document.getElementById("work").style.backgroundColor = 'rgb(103, 101, 117)';
            document.getElementById("work-content").style.color = 'white';
            document.getElementById("overview").style.backgroundColor = 'rgb(103, 101, 117)';
            document.getElementById("overview-content").style.color = 'white';
            let workEntityWrappers = document.getElementsByClassName("work-entity-wrapper");
            for (let i = 0; i < workEntityWrappers.length; i++) {
              workEntityWrappers[i].style.backgroundColor = "rgb(89, 87, 102)";
            }
        } else if (switches[0] === false && switches[1] === true) {
            document.getElementById("work").style.backgroundColor = 'rgb(245, 248, 255)';
            document.getElementById("work-content").style.color = 'rgb(31, 26, 119)';
            document.getElementById("overview").style.backgroundColor = 'rgb(245, 248, 255)';
            document.getElementById("overview-content").style.color = 'rgb(31, 26, 119)';
            let workEntityWrappers = document.getElementsByClassName("work-entity-wrapper");
            for (let i = 0; i < workEntityWrappers.length; i++) {
              workEntityWrappers[i].style.backgroundColor = "white";
            }
        } else if (switches[0] === true && switches[1] === false) {
            document.getElementById("work").style.backgroundColor = 'rgb(65, 59, 99)';
            document.getElementById("work-content").style.color = 'white';
            document.getElementById("overview").style.backgroundColor = 'rgb(65, 59, 99)';
            document.getElementById("overview-content").style.color = 'white';
            let workEntityWrappers = document.getElementsByClassName("work-entity-wrapper");
            for (let i = 0; i < workEntityWrappers.length; i++) {
              workEntityWrappers[i].style.backgroundColor = "rgb(80, 74, 117)";
            }
        } else {
            document.getElementById("work").style.backgroundColor = 'rgb(245, 248, 255)';
            document.getElementById("work-content").style.color = 'rgb(31, 26, 119)';
            document.getElementById("overview").style.backgroundColor = 'rgb(245, 248, 255)';
            document.getElementById("overview-content").style.color = 'rgb(31, 26, 119)';
            let workEntityWrappers = document.getElementsByClassName("work-entity-wrapper");
            for (let i = 0; i < workEntityWrappers.length; i++) {
              workEntityWrappers[i].style.backgroundColor = "white";
            }
        }
      } else {
        document.getElementById("work").style.backgroundColor = 'rgb(93, 83, 184)';
        document.getElementById("work-content").style.color = 'white';
        document.getElementById("overview").style.backgroundColor = 'rgb(93, 83, 184)';
        document.getElementById("overview-content").style.color = 'white';
        let workEntityWrappers = document.getElementsByClassName("work-entity-wrapper");
        for (let i = 0; i < workEntityWrappers.length; i++) {
          workEntityWrappers[i].style.backgroundColor = "rgb(110, 99, 207)";
        }
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body::-webkit-scrollbar {
  display: none;
}

html {
  scroll-behavior: smooth;
}

body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

a {
  text-align: center;
}

a:visited { 
  text-decoration: none; 
  color: inherit;
  }

h2 {
  font-size: 350%;
  font-weight: 500;
  font-family: 'Poppins';
}

h3 {
  font-size: 200%;
  font-weight: 500;
  font-family: 'Poppins';
}

h5 {
  font-size: 100%;
  font-weight: 600;
  font-family: 'Poppins';
  color: rgb(31, 26, 119);
}

h6 {
  font-size: 90%;
  font-weight: 500;
  font-family: 'Poppins';
}

p {
  font-size: 100%;
  font-weight: 500;
  font-family: 'Poppins';
  line-height: 200%;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 55px;
  color: #35495e;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 25px 0;
}

.subtitle a {
  font-weight: 500;
  color: inherit;
}

.links {
  padding-top: 15px;
  margin-bottom: 20px;
}

.content-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 500px;
}

.plus {
  font-size: 2.5rem;
  margin: 15px;
  color: #35495e;
}

.h3 {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-weight: 400;
  margin: 10px;
}

.description {
  padding: 2.5em;
  padding-left: 3em;
  padding-right: 3em;
  border-radius: 0.8em;
  width: 60vw;
  text-align: left;
}

.section-subtitle {
  margin-bottom: 1.5em;
  user-select: none;
}

@media only screen and (max-width: 1050px) {
  h2 {
    font-size: 20px !important;
  }

  h6 {
    font-size: 12px !important;
  }

  .home {
    height: unset !important;
  }

  .home-bg {
    height: unset !important;
  }

  .sun {
    display: none !important;
  }

  .mood-toggle {
    display: none !important;
  }

  .contact {
    flex-direction: column !important;
    background-color: unset !important;
    height: 20vh !important;
    position: sticky !important;
    margin-bottom: 4em !important;
    margin-top: 4em !important;
  }

  .wave {
    fill: rgb(93, 83, 184) !important;
  }

  .contact-button {
    margin-top: 1.5% !important;
    margin-bottom: 1.5% !important;
  }

  #github-button {
    background-color: rgb(21, 21, 21) !important;
    color: whitesmoke !important;
  }

  p {
    font-size: 12px !important;
  }

  .description {
    width: 90vw !important;
  }

  .stats-tab-wrapper {
    width: 70% !important;
    flex-direction: column !important;
  }

  p {
    line-height: 1.5 !important;
  }

  .stats-list {
    margin-left: 0 !important;
    width: 100% !important;
    margin-top: 10% !important;
  }

  .stat {
    flex-direction: column !important;
    width: unset !important;
    width: 100% !important;
    margin-bottom: 5% !important;
  }

  .stat-title {
    width: 100% !important;
  }

  progress {
    margin-left: 0 !important;
    width: 100% !important;
  }

  h3 {
    font-size: 20px !important;
  }

  .description {
    text-align: center !important;
  }

  .exp-title-dates {
    flex-direction: column !important;
    text-align: center !important;
    justify-content: left !important;
  }

  .exp-text {
    font-size: 12px !important;
  }
}

@media only screen and (max-height: 700px) {

    .home {
    height: unset !important;
  }

  .home-bg {
    height: unset !important;
  }
  
  .home-gradient {
    height: 100% !important;
  }

    .sun {
    display: none !important;
  }

  .mood-toggle {
    display: none !important;
  }

  .contact {
    flex-direction: column !important;
    background-color: unset !important;
    height: 20vh !important;
    position: sticky !important;
    margin-bottom: 4em !important;
    margin-top: 4em !important;
  }

    .contact-button {
    margin-top: 1.5% !important;
    margin-bottom: 1.5% !important;
  }

    #github-button {
    background-color: rgb(21, 21, 21) !important;
    color: whitesmoke !important;
  }
}
</style>
