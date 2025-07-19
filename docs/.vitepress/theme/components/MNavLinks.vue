<script setup lang="ts">
import MNavLink from './MNavLink.vue'
import { NavData } from '../untils/types'

defineProps<{ data: NavData[] }>()
</script>

<template>
  <div v-for="item in data" :key="item.title" class="m-nav-links">
    <h2 v-if="item.title" :id="item.title" class="title">
      {{ item.title }}
      <a class="header-anchor" :href="`#${item.title}`">#</a>
    </h2>
    <div class="links">
      <MNavLink
        v-for="link in item.items"
        :key="link.link"
        v-bind="link"
      />
    </div>
  </div>
</template>

<style scoped>
.m-nav-links {
  margin: 0 -8px;
}

.m-nav-links + .m-nav-links {
  margin-top: 24px;
}

@media (min-width: 960px) {
  .m-nav-links {
    margin: 0 -16px;
  }
}

.title {
  padding-left: 8px;
  font-size: 1.25rem;
  font-weight: 600;
}

@media (min-width: 960px) {
  .title {
    padding-left: 16px;
  }
}

.links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  justify-content: flex-start;
  grid-gap: 10px;
  padding: 10px 0;
}

@media (min-width: 768px) {
  .links {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

@media (min-width: 960px) {
  .links {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    grid-gap: 20px;
    padding: 20px 0;
  }
}
</style>

