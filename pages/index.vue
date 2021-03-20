<template>
  <div class="container">
    <div>
      <Home @toggleMood="toggleMood"/>
      <Work />
    </div>
  </div>
</template>

<script>
import Home from '../components/Home';
import Work from '../components/Work';

export default {

  components: {
    Home, Work
  },
  methods: {
    toggleMood: function (switches) {
      //switches[0] is light, switches[1] is weather, switches[2] is sunset
      if (switches[2] === false) {
        if (switches[0] === true && switches[1] === true) {
            document.getElementById("work").style.backgroundColor = 'rgb(103, 101, 117)';
            document.getElementById("work-content").style.color = 'white';
        } else if (switches[0] === false && switches[1] === true) {
            document.getElementById("work").style.backgroundColor = 'rgb(176, 197, 235)';
            document.getElementById("work-content").style.color = 'rgb(31, 26, 119)';
        } else if (switches[0] === true && switches[1] === false) {
            document.getElementById("work").style.backgroundColor = 'rgb(65, 59, 99)';
            document.getElementById("work-content").style.color = 'white';
        } else {
            document.getElementById("work").style.backgroundColor = 'rgb(181, 199, 237)';
            document.getElementById("work-content").style.color = 'rgb(31, 26, 119)';
        }
      } else {
        document.getElementById("work").style.backgroundColor = 'rgb(31, 26, 119)';
        document.getElementById("work-content").style.color = 'white';
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

body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

h2 {
  font-size: 350%;
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
</style>
