<template>
  <div class="modal">
    <div class="modal__item">
      <div class="modal__item__block">
        <div class="modal__item__block__top">
          <p class="modal__item__block__top-title">Изменить</p>
          <img
            class="modal__item__block__top-close"
            @click="$emit('close-modal')"
            src="@/assets/icons/close.svg"
            alt=""
          />
        </div>
        <form class="modal__item__block__content">
          <input
            class="modal__item__block__content-input"
            type="text"
            placeholder="Имя"
            v-model="form.name"
          />
          <input
            class="modal__item__block__content-input"
            type="number"
            placeholder="Общий количество"
            v-model="form.total"
          />
          <input
            class="modal__item__block__content-input"
            type="number"
            placeholder="Фактическое количество"
            v-model="form.actual"
          />

          <button
            class="modal__item__block-button"
            @click.prevent="saveModalData"
          >
            Сохранить
          </button>
        </form>
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
  data() {
    return {
      form: {
        name: "",
        total: "",
        actual: "",
      },
    };
  },
  methods: {
    saveModalData() {
      this.$store.commit("CHANGE_TASK_DATA", {index: this.itemIndex, data: this.form});
      this.$emit("close-change-modal")
      this.form.name = "";
      this.form.total = "";
      this.form.actual = "";
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
      &__content {
        margin: 8px 0 20px 0;
        &-input {
          background: #f1f3f7;
          border-radius: 12px;
          height: 64px;
          border: none;
          width: 100%;
          font-family: Inter-Regular;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: #111;
          box-sizing: border-box;
          outline: none;
          padding: 22px 20px;
          transition: 0.3s all;
          margin-top: 16px;
          cursor: pointer;

          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }
      }
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
        margin-top: 20px;
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
