<template>
  <div class="sideBar w-[18%] p-8 border-[2px] border-bColor">
    <div class="logo font-bold text-2xl w-full">
      <i
        @click="toggler"
        class="cursor-pointer fa-solid fa-bars text-[30px] font-bold bars invisible"
      ></i>
      <span>Logo</span>
    </div>

    <Transition name="fade">
      <ul
        v-if="toggle"
        class="lists items-center ease-in text-primary mt-[50px] p-[10px] flex flex-col gap-[5px]"
      >
        <li
          class="w-full justify-start py-[5px] rounded-lg flex gap-[10px] items-center text-[13px] hover:bg-hover hover:text-white px-4"
        >
          <i class="fa-solid fa-grip text-xl"></i> DashBoard
        </li>
        <li
          class="w-full justify-start py-[5px] rounded-lg flex gap-[10px] items-center text-[13px] hover:bg-hover hover:text-white px-4"
        >
          <i class="fa-solid fa-school text-xl"></i>Schools
        </li>
        <li
          class="w-full justify-start py-[5px] rounded-lg flex gap-[10px] items-center text-[13px] hover:bg-hover hover:text-white px-4"
        >
          <i class="fa-solid fa-user-group text-xl"></i>Students
        </li>
        <li
          class="w-full justify-start py-[5px] rounded-lg flex gap-[10px] items-center text-[13px] hover:bg-hover hover:text-white px-4"
        >
          <i class="fa-solid fa-people-group text-xl"></i>School Staff
        </li>
        <li
          class="w-full justify-start py-[5px] rounded-lg flex gap-[10px] items-center text-[13px] hover:bg-hover hover:text-white px-4"
        >
          <i class="fa-solid fa-file-invoice text-xl"></i>Payments
        </li>
        <li
          class="w-full justify-start py-[5px] rounded-lg flex gap-[10px] items-center text-[13px] hover:bg-hover hover:text-white px-4"
        >
          <i class="fa-solid fa-chart-line text-xl"></i>Analytics & Reports
        </li>
        <li
          class="w-full justify-start py-[5px] rounded-lg flex gap-[10px] items-center text-[13px] hover:bg-hover hover:text-white px-4"
        >
          <i class="fa-solid fa-user-tie text-xl"></i>Admins
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const toggle = ref(false);

const toggler = () => {
  toggle.value = !toggle.value;
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s ease; /* Adjust timing and easing as needed */
}

/* Start state when the sidebar is entering */
.fade-enter {
  opacity: 0;
}

/* End state when the sidebar is leaving */
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1078px) {
  .lists{
    /* background-color: red;  */
    align-items: center;
    justify-content: center;
    width:100%;
  }
  .sideBar{
    padding:0;
  }
}
@media (max-width: 794px) {
 .sideBar{
  width: 100%;
 }
 .lists{
  width: 100%;

 }
 li{
  display: flex;
  justify-content: start;
 }
}
.logo{
  display: flex;
  justify-content: space-between;
  padding:10px;
}
ul{
  margin-top: 10px;
}
@media (max-width: 794px) {
  .bars{
visibility: visible;
  }
}
</style>
