<template>
  <div class="modal" @click="$emit('close-modal')">
    <div class="modal__item">
      <div class="modal__item__block">
        <div class="modal__item__block__top">
          <p class="modal__item__block__top-title">
            Вы действительно хотите удалить?
          </p>
          <img
            class="modal__item__block__top-close"
            @click="$emit('close-modal')"
            src="@/assets/icons/close.svg"
            alt=""
          />
        </div>
        <div class="modal__item__block__buttom">
          <button
            v-on:click="deleteItem"
            class="modal__item__block__buttom-button"
          >
            Удалить
          </button>
          <button
            class="modal__item__block__buttom-close"
            @click="$emit('close-modal')"
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemIndex: {
      type: Number,
      default: null,
    },
  },
  methods: {
    deleteItem() {
      console.log(this.itemIndex);
      this.$store.commit("REMOVE_TASK", this.itemIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  &__item {
    position: relative;
    z-index: 1;
    background: #ffffff;
    border-radius: 12px;
    width: 514px;
    &__block {
      padding: 24px;
      &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &-title {
          font-family: Inter-Medium;
          font-style: normal;
          font-weight: 500;
          font-size: 22px;
          line-height: 27px;
          color: #111111;
          margin: 0;
        }
        &-close {
          cursor: pointer;
        }
      }

      &__buttom {
        display: flex;
        align-items: center;
        margin-top: 40px;
        &-button {
          font-family: Inter-Medium;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          padding: 18px;
          background: #2d3e50;
          border-radius: 12px;
          color: #ffffff;
          border: none;
          width: 100%;
          text-align: center;
          cursor: pointer;
          margin: 10px;
          opacity: 0.9;
          &:hover {
            opacity: 1;
          }
        }
        &-close {
          font-family: Inter-Medium;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          padding: 18px;
          background: #adadad;
          border-radius: 12px;
          color: #ffffff;
          border: none;
          width: 100%;
          opacity: 0.7;
          text-align: center;
          cursor: pointer;
          margin: 10px;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .modal {
    padding: 0;
    &__item {
      max-width: 514px;
      width: 100%;
      margin: 0 16px;
      &__block {
        &-text {
          margin: 16px 0;
        }
      }
    }
  }
}
</style>
