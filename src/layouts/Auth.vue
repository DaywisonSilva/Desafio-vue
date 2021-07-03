<template>
  <router-view v-slot="{ Component }">
    <transition enter-active-class="animated flipInY slower">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  name: "Auth"
};
</script>
