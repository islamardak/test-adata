<template>
    <div>
        <div class="item first-block" @click="blockOne = !blockOne">
            <div class="item__name first-line">
                <img
                    class="item__name-icon"
                    src="@/assets/icons/arrow-bottom.svg"
                    alt=""
                    :class="{ active: blockOne }"
                />
                <p class="item__name-text">{{ item.name }}</p>
            </div>
            <div class="item__total-quantity">{{ item.total }}</div>
            <div class="item__actual-quantity">
                {{ item.actual }}
            </div>
            <div class="item__actions">
                <img
                    class="item__actions-icon"
                    src="@/assets/icons/changes.svg"
                    alt=""
                    @click="changeModalOpen()"
                />
                <img
                    src="@/assets/icons/close.svg"
                    alt=""
                    @click="modalOpen()"
                />
            </div>
        </div>

        <transition-group name="slide">
            <div v-for="childrenOne in item.children" :key="childrenOne.id">
                <div>
                    <div class="item second-block" v-if="blockOne">
                        <div
                            class="item__name second-line"
                            @click="blockTwo = !blockTwo"
                        >
                            <img src="@/assets/icons/arrow-bottom.svg" alt="" />
                            <p class="item__name-text">
                                {{ childrenOne.name }}
                            </p>
                        </div>
                        <div class="item__total-quantity">
                            {{ childrenOne.total }}
                        </div>
                        <div class="item__actual-quantity">
                            {{ childrenOne.actual }}
                        </div>
                        <div class="item__actions">
                            <img
                                class="item__actions-icon"
                                src="@/assets/icons/changes.svg"
                                alt=""
                            />
                            <img
                                class="item__actions-icon"
                                src="@/assets/icons/close.svg"
                                alt=""
                                @click="modalOpen()"
                            />
                        </div>
                    </div>

                    <transition-group name="slide">
                        <div
                            v-for="childrenTwo in childrenOne.children"
                            :key="childrenTwo.id"
                        >
                            <div class="item third-block" v-if="blockTwo">
                                <div class="item__name third-line">
                                    <img
                                        src="@/assets/icons/arrow-bottom.svg"
                                        alt=""
                                    />
                                    <p class="item__name-text">
                                        {{ childrenTwo.name }}
                                    </p>
                                </div>
                                <div class="item__total-quantity">
                                    {{ childrenTwo.total }}
                                </div>
                                <div class="item__actual-quantity">
                                    {{ childrenTwo.actual }}
                                </div>
                                <div class="item__actions">
                                    <img
                                        @click="changeModalOpen()"
                                        class="item__actions-icon"
                                        src="@/assets/icons/changes.svg"
                                        alt=""
                                    />
                                    <img
                                        class="item__actions-icon"
                                        src="@/assets/icons/close.svg"
                                        alt=""
                                        @click="modalOpen()"
                                    />
                                </div>
                            </div>
                        </div>
                    </transition-group>
                </div>
            </div>
        </transition-group>

        <DeleteModal
            v-show="showModal"
            @close-modal="showModal = false"
            :itemIndex="taskIndex"
        />
        <ChangeModal
            v-show="showModalChange"
            @close-change-modal="showModalChange = false"
            :itemIndex="taskIndex"
        />
    </div>
</template>

<script>
import DeleteModal from "@/components/modal/DeleteModal.vue";
import AddModal from "@/components/modal/AddModal.vue";
import ChangeModal from "@/components/modal/ChangeModal.vue";

import { List } from "@/configs/List";

export default {
    props: {
        item: {
            type: Object,
            default: {},
        },
        taskIndex: {
            type: Number,
            default: 0,
        },
    },
    components: { DeleteModal, AddModal, ChangeModal },
    data() {
        return {
            List,
            itemIndex: null,
            blockOne: false,
            blockTwo: false,
            showModal: false,
            showModalChange: false,
        };
    },

    methods: {
        modalOpen() {
            this.showModal = true;
        },
        changeModalOpen() {
            this.showModalChange = true;
        },
    },
};
</script>

<style lang="scss" scoped>
.item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #adadad;
    cursor: pointer;
    opacity: 0.8;
    &:hover {
        opacity: 1;
    }
    &__name {
        display: flex;
        align-items: center;
        flex: 1 0 30%;
        &-icon {
            transition: all 0.5s ease;
            transform: rotate(-90deg);
            &.active {
                transition: all 0.5s ease;
                transform: rotate(0deg);
            }
        }
        &-text {
            padding: 5px 15px;
            margin: 0;
            font-family: Inter-Regular;
            font-style: normal;
            font-weight: 400;
        }
    }
    &__total-quantity {
        flex: 0 0 20%;
        padding: 5px 15px;
        margin: 0;
        font-family: Inter-Regular;
        font-style: normal;
        font-weight: 400;
    }
    &__actual-quantity {
        flex: 0 0 20%;
        padding: 5px 15px;
        margin: 0;
        font-family: Inter-Regular;
        font-style: normal;
        font-weight: 400;
    }
    &__actions {
        flex: 0 0 15%;
        padding: 5px 15px;
        margin: 0;
        font-family: Inter-Regular;
        font-style: normal;
        font-weight: 400;
        &-icon {
            margin-right: 10px;
            &:last-child {
                margin-right: 0px;
            }
        }
    }
}
.first-block {
    background: #fefefe;
}
.first-line {
    padding: 10px 0 10px 10px;
}
.second-line {
    padding: 10px 0 10px 30px;
}
.second-block {
    background: #e3ecfb;
}

.third-line {
    padding: 10px 0 10px 60px;
}
.third-block {
    background: #c6dafb;
}

.slide-enter-active {
    transition-duration: 0.3s;
    transition-timing-function: ease-in;
}

.slide-leave-active {
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
    max-height: 95px;
    overflow: hidden;
}

.slide-enter,
.slide-leave-to {
    overflow: hidden;
    max-height: 0;
}

@media screen and (max-width: 768px) {
    .item {
        overflow-x: auto;
        white-space: nowrap;
    }
}
</style>

