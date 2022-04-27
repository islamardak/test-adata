<template>
    <div class="item__title">
        <p class="item__title__name"></p>
        <p class="item__title__total-quantity">Общий количество</p>
        <p class="item__title__actual-quantity">Фактическое количество</p>
        <p class="item__title__actions">Действия</p>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.item__title {
    display: flex;
    align-items: center;
    background: #2d3e50;
    &__name {
        flex: 1 0 30%;
        color: #fff;
        padding: 15px;
        margin: 0;
        font-family: Inter-Regular;
        font-style: normal;
        font-weight: 400;
    }
    &__total-quantity {
        flex: 0 0 20%;
        color: #fff;
        padding: 15px;
        margin: 0;
        border-right-style: ridge;
        border-left-style: ridge;
        font-family: Inter-Regular;
        font-style: normal;
        font-weight: 400;
    }
    &__actual-quantity {
        flex: 0 0 20%;
        color: #fff;
        padding: 15px;
        margin: 0;
        border-right-style: ridge;
        font-family: Inter-Regular;
        font-style: normal;
        font-weight: 400;
    }
    &__actions {
        flex: 0 0 15%;
        color: #fff;
        padding: 15px;
        margin: 0;
        font-family: Inter-Regular;
        font-style: normal;
        font-weight: 400;
    }
}
@media screen and (max-width: 768px) {
    .item__title {
        overflow-x: auto;
        white-space: nowrap;
    }
}
</style>