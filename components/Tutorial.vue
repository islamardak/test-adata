<template>
    <div class="list">
        <p class="list-title">Организационная Структура</p>
        <AddButton />
        <div class="list__item">
            <ItemTitle />
            <TaskItems />
        </div>
    </div>
</template>

<script>
import AddButton from "@/components/AddButton.vue";
import ItemTitle from "@/components/task/ItemTitle";
import TaskItems from "@/components/task/taskItems";
export default {
    components: {
        AddButton,
        ItemTitle,
        TaskItems,
    },
    data() {
        return {
            showModal: false,
        };
    },
};
</script>

<style lang="scss" scoped>
.list {
    &-title {
        background: #2d3e50;
        margin: 0;
        font-family: Inter-Regular;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #fff;
        padding: 10px 0 10px 10px;
    }
}
</style>
