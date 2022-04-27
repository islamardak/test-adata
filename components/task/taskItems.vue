<template>
  <div>
    <TaskItem v-for="(item, index) in $store.state.items" :key="index" :item="item" :taskIndex="index"/>
  </div>
</template>

