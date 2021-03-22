<template>
    <div class="work-entity-wrapper" id="work-entity-wrapper">
        <div class="exp-title-dates">
            <h4>{{title}}</h4>
            <h6>{{dates}}</h6>
        </div>
        <h6>{{position}}</h6>
        <br>
        <div v-for="entry in desc" :key="entry">
            <p class="exp-text">- {{entry}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "WorkEntity",
    props: [ 'title', 'desc', 'position', 'dates' ],
    methods: {
    }
}
</script>

<style lang="scss">
    .work-entity-wrapper {
        background-color: white;
        border-radius: 0.8em;
        width: 70%;
        text-align: left;
        padding: 20px;
        padding-bottom: 18px;
        transition: all 0.3s ease;
    }

    .work-entity-wrapper:hover {
        transform: scale(1.06);
    }

    .exp-title-dates {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .exp-text {
        font-size: 14px;
        line-height: 1.4;
        padding-bottom: 0.8em;
    }
</style>