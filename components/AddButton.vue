<template>
    <div>
        <button class="button" @click="showModal = true">
            <img
                class="button-icon"
                src="@/assets/icons/plus-grey.svg"
                alt=""
            />
            Добавить
        </button>
        <AddModal v-show="showModal" @close-modal="showModal = false" />
    </div>
</template>

<script>
import AddModal from "@/components/modal/AddModal.vue";

export default {
    components: { AddModal },
    data() {
        return {
            showModal: false,
        };
    },
};
</script>

<style lang="scss" scoped>
.button {
    background: #dcdcdc;
    border-radius: 8px;
    margin: 0;
    font-family: Inter-Medium;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    display: flex;
    margin: 20px;
    padding: 6px 12px;
    align-items: center;
    cursor: pointer;
    color: #adadad;
    opacity: 0.8;
    border: none;
    &:active {
        opacity: 1;
    }
    &-icon {
        margin-right: 7px;
    }
}
</style>