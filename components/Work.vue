<template>
    <div class="work" id="work">
        <div class="work-content" id="work-content">
        <h2>
            My Work
        </h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "Work",
}
</script>

<style lang="scss">
    .work {
        height: 100vh;
        width: 100vw;
        overflow: hidden;    
        display: flex;
        flex-direction: column;    
        position: relative;
        justify-content:flex-start;
        align-items: center;
        transition: background-color 1s;
        background-color: rgb(181, 199, 237);
    }

    .work-content {
        margin-top: 5em;
        color: rgb(31, 26, 119);
    }
</style>