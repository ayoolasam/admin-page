<template>
  <div class="dashboard flex ">
<SideBar/>
<MainPage/>
  </div>
</template>

<script setup>
import SideBar from '@/components/SideBar.vue';
import MainPage from '@/components/Main.vue';

</script>

<style scoped>
@media (max-width: 794px) {
  .dashboard{
    display: flex;
    flex-direction: column;
  }
}
</style>