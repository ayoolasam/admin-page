<template>
  <div class="sideBar w-[18%] p-8 border-[2px] border-bColor ">
<div class="logo font-bold text-2xl">Logo</div>
<ul class="lists items-center  text-primary  mt-[50px] p-[10px]  flex flex-col gap-[5px]">
  <li class="w-full justify-start py-[5px] rounded-lg flex gap-[10px] items-center text-[13px] hover:bg-hover hover:text-white px-4 "> <i class="fa-solid fa-grip text-xl"></i> DashBoard</li>
  <li class="w-full justify-start py-[5px] rounded-lg flex gap-[10px] items-center text-[13px] hover:bg-hover hover:text-white px-4 "> <i class="fa-solid fa-school text-xl"></i>Schools</li>
  <li class="w-full justify-start py-[5px] rounded-lg flex gap-[10px] items-center text-[13px]  hover:bg-hover hover:text-white px-4"> <i class="fa-solid fa-user-group text-xl"></i>Students</li>
  <li class="w-full justify-start py-[5px] rounded-lg flex gap-[10px] items-center text-[13px]  hover:bg-hover hover:text-white px-4"> <i class="fa-solid fa-people-group text-xl"></i>School Staff</li>
  <li class="w-full justify-start py-[5px] rounded-lg flex gap-[10px] items-center text-[13px]  hover:bg-hover hover:text-white px-4"> <i class="fa-solid fa-file-invoice text-xl"></i>Payments</li>
  <li class="w-full justify-start py-[5px]  rounded-lg flex gap-[10px] items-center text-[13px]  hover:bg-hover hover:text-white px-4 "> <i class="fa-solid fa-chart-line text-xl"></i>Analytics & Reports</li>
  <li class="w-full justify-start py-[5px] rounded-lg flex gap-[10px] items-center text-[13px]  hover:bg-hover hover:text-white px-4"><i class="fa-solid fa-user-tie text-xl"></i>Admins</li>
</ul>
  </div>
</template>

<script setup>

</script>

<style scoped>
@media (max-width: 1078px) {
  .lists{
    /* background-color: red; */
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
  justify-content: center;
}
ul{
  margin-top: 10px;
}

</style>