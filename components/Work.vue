<template>
    <div class="work" id="work">
        <div class="work-content" id="work-content">
        <h2>
            Portfolio
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
        background-color: rgb(245, 248, 255);
    }

    .work-content {
        margin-top: 2em;
        color: rgb(31, 26, 119);
        transition: all 1s;
    }
</style>