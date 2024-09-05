<template>
  <div class="main bg-tertiary w-full">
    <nav class="py-[8px] bg-secondary px-4 flex justify-end shadow-sm">
     
      <div
        class="user flex items-center gap-[10px] border-2 bg-tertiary rounded-2xl px-[10px]"
      >
        <div class="image h-[60px] bg-tertiary w-[50px]">
          <img src="../assets/default_avatar.jpg" class=" " alt="User Avatar" />
        </div>
        <div class="usernamee">
          <p class="font-bold text-[13px]">Obayomi Ayoola</p>
          <p class="text-[12px]">Super Admin</p>
        </div>
        <i class="fa-solid fa-chevron-down"></i>
      </div>
    </nav>

    <div class="section p-4 flex flex-col gap-[5px]">
      <div class="addmin flex gap-[10px] items-center">
        <span class="font-semibold">Admins</span>
        <span class="font-semibold"> - </span>
        <div
          class="number font-semibold bg-secondary flex h-[30px] w-[30px] rounded-full items-center justify-center"
        >
          10
        </div>
      </div>
      <div class="home py-[10px] flex justify-between items-center">
        <div class="flex gap-[8px] items-center">
          <span class="text-[15px]">Home</span>
          <i class="fa-solid fa-chevron-right text-[15px]"></i>
          <span class="text-[15px] font-semibold">Admins</span>
        </div>

        <div
          class="button px-[10px] py-[10px] text-white rounded-lg text-[13px] gap-[10px] flex items-center bg-primary"
        >
          <i class="fa-solid fa-plus"></i>
          <span>Add an admin</span>
        </div>
      </div>

      <div class="list border-[2px] border-bColor text-[15px]">
        <div class="header flex bg-tertiary border-[2px] py-[10px]">
          <span
            class="font-semibold flex w-1/6 items-center justify-start px-[10px]"
            >Name</span
          >
          <span class="font-semibold flex w-1/6">Gender</span>
          <span class="font-semibold flex w-1/6">role</span>
          <span class="font-semibold w-1/6">State</span>
          <span class="font-semibold w-1/6">Date Assigned</span>
          <span class="font-semibold w-1/6">Action</span>
        </div>
        <ul class="bod">
          <li
            class="flex item items-center w-full py-[10px] text-[13px] border-[2px] border-bColor"
          >
            <div class="flex username items-center gap-[2px] w-1/6">
              <img
                src="../assets/default_avatar.jpg"
                class="h-[55px] w-[55px] image"
                alt=""
              />

              <div class="">
                <p class="font-bold">Name Here</p>
                <p>#000000000</p>
              </div>
            </div>
            <div class="w-1/6 spans">
              <span class="">Gender Here</span>
            </div>

            <span class="w-1/6 spans">Role Here</span>
            <span class="4 w-1/6 spans">State Here</span>
            <span class="5 w-1/6 spans">dd-mm-yy</span>

            <div
              class="butt bg-primary py-[4px] gap-[5px] text-white px-[24px] flex items-center justify-center rounded-xl"
            >
              <i class="fa-regular fa-eye"></i>
              <span>View</span>
            </div>
          </li>

          <li
            class="flex item items-center w-full py-[10px] text-[13px] border-[2px] border-bColor"
          >
            <div class="flex username items-center gap-[2px] w-1/6">
              <img
                src="../assets/default_avatar.jpg"
                class="h-[55px] w-[60px] image"
                alt=""
              />

              <div class="">
                <p class="font-bold">Name Here</p>
                <p>#000000000</p>
              </div>
            </div>

            <div class="w-1/6 spans">
              <span class="">Gender Here</span>
            </div>

            <span class="cont w-1/6 spans">Role Here</span>
            <span class="cont 4 w-1/6 spans">State Here</span>
            <span class="cont 5 w-1/6 spans">dd-mm-yy</span>
            <div
              class="6 butt bg-primary py-[4px] gap-[5px] text-white px-[24px] flex items-center justify-center rounded-xl"
            >
              <i class="fa-regular fa-eye"></i>
              <span>View</span>
            </div>
          </li>

          <li
            class="flex item items-center w-full py-[10px] text-[13px] border-[2px] border-bColor"
          >
            <div class="flex username items-center gap-[2px] w-1/6">
              <img
                src="../assets/default_avatar.jpg"
                class="h-[55px] w-[60px] image"
                alt=""
              />

              <div class="">
                <p class="font-bold">Name Here</p>
                <p>#000000000</p>
              </div>
            </div>
            <div class="w-1/6 spans">
              <span class="">Gender Here</span>
            </div>

            <span class="w-1/6 spans">Role Here</span>
            <span class="4 w-1/6 spans">State Here</span>
            <span class="5 w-1/6 spans">dd-mm-yy</span>
            <div
              class="6 butt bg-primary py-[4px] gap-[5px] text-white px-[24px] flex items-center justify-center rounded-xl"
            >
              <i class="fa-regular fa-eye"></i>
              <span>View</span>
            </div>
          </li>

          <li
            class="flex item items-center w-full py-[10px] text-[13px] border-[2px] border-bColor"
          >
            <div class="flex username items-center gap-[2px] w-1/6">
              <img
                src="../assets/default_avatar.jpg"
                class="h-[55px] w-[60px] image"
                alt=""
              />

              <div class="">
                <p class="font-bold">Name Here</p>
                <p>#000000000</p>
              </div>
            </div>
            <div class="w-1/6 spans">
              <span class="">Gender Here</span>
            </div>

            <span class="w-1/6 spans">Role Here</span>
            <span class="4 w-1/6 spans">State Here</span>
            <span class="5 w-1/6 spans">dd-mm-yy</span>
            <div
              class="6 butt bg-primary py-[4px] gap-[5px] text-white px-[24px] flex items-center justify-center rounded-xl"
            >
              <i class="fa-regular fa-eye"></i>
              <span>View</span>
            </div>
          </li>

          <li
            class="flex item items-center w-full py-[10px] text-[13px] border-[2px] border-bColor"
          >
            <div class="flex username items-center gap-[2px] w-1/6">
              <img
                src="../assets/default_avatar.jpg"
                class="h-[55px] w-[60px] image"
                alt=""
              />

              <div class="">
                <p class="font-bold">Name Here</p>
                <p>#000000000</p>
              </div>
            </div>
            <div class="w-1/6 spans">
              <span class="">Gender Here</span>
            </div>

            <span class="w-1/6 spans">Role Here</span>
            <span class="4 w-1/6 spans">State Here</span>
            <span class="5 w-1/6 spans">dd-mm-yy</span>
            <div
              class="6 butt bg-primary py-[4px] gap-[5px] text-white px-[24px] flex items-center justify-center rounded-xl"
            >
              <i class="fa-regular fa-eye"></i>
              <span>View</span>
            </div>
          </li>

          <li
            class="flex item items-center w-full py-[10px] text-[13px] border-[2px] border-bColor"
          >
            <div class="flex items-center username gap-[2px] w-1/6">
              <img
                src="../assets/default_avatar.jpg"
                class="h-[55px] w-[60px] image"
                alt=""
              />

              <div class="">
                <p class="font-bold">Name Here</p>
                <p>#000000000</p>
              </div>
            </div>
            <div class="w-1/6 spans">
              <span class="">Gender Here</span>
            </div>

            <span class="w-1/6 spans">Role Here</span>
            <span class="4 w-1/6 spans">State Here</span>
            <span class="5 w-1/6 spans">dd-mm-yy</span>
            <div
              class="6 butt bg-primary py-[4px] gap-[5px] text-white px-[24px] flex items-center justify-center rounded-xl"
            >
              <i class="fa-regular fa-eye"></i>
              <span>View</span>
            </div>
          </li>

          <li
            class="flex item items-center w-full py-[10px] text-[13px] border-[2px] border-bColor"
          >
            <div class="flex username items-center gap-[2px] w-1/6">
              <img
                src="../assets/default_avatar.jpg"
                class="h-[55px] w-[60px] image"
                alt=""
              />

              <div class="">
                <p class="font-bold">Name Here</p>
                <p>#000000000</p>
              </div>
            </div>
            <div class="w-1/6 spans" >
              <span class="">Gender Here</span>
            </div>

            <span class="w-1/6 spans">Role Here</span>
            <span class="4 w-1/6 spans">State Here</span>
            <span class="5 w-1/6 spans">dd-mm-yy</span>
            <div
              class="6 butt bg-primary py-[4px] gap-[5px] text-white px-[24px] flex items-center justify-center rounded-xl"
            >
              <i class="fa-regular fa-eye"></i>
              <span>View</span>
            </div>
          </li>

          <li
            class="flex item items-center w-full py-[10px] text-[13px] border-[2px] border-bColor"
          >
            <div class="flex username items-center gap-[2px] w-1/6">
              <img
                src="../assets/default_avatar.jpg"
                class="h-[55px] w-[60px] image"
                alt=""
              />

              <div class="">
                <p class="font-bold">Name Here</p>
                <p>#000000000</p>
              </div>
            </div>
            <div class="w-1/6 spans">
              <span class="">Gender Here</span>
            </div>

            <span class="w-1/6 spans">Role Here</span>
            <span class="4 w-1/6 spans">State Here</span>
            <span class="5 w-1/6 spans">dd-mm-yy</span>
            <div
              class="6 butt bg-primary py-[4px] gap-[5px] text-white px-[24px] flex items-center justify-center rounded-xl"
            >
              <i class="fa-regular fa-eye"></i>
              <span>View</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@media (max-width: 794px) {
  nav {
    display: flex;
    justify-content: center;
  }
}
@media (max-width: 1080px) {
  .username {
  }
  .image {
    width: 35px;
    height: 35px;
  }
}
@media (max-width: 994px) {
  .item {
    font-size: 11px;
  }
}
@media (max-width: 910px) {
  .item {
    font-size: 9px;
  }
}

@media (max-width: 955px) {
  .header {
    font-size: 14px;
  }
}
@media (max-width: 670px) {
  .header {
    font-size: 12px;
  }
}
@media (max-width: 664px) {
  .butt {
    font-size: 7px;
  }
}
@media (max-width: 632px) {
  .list {
    width: 100%;
  }
  .section {
    padding: 0;
  }
}
@media (max-width: 624px) {
  .item {
    font-size: 9px;
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    padding:10px
  }
  .header{
    display: none;
  }
  .spans{
    display: none;
  }
  .username{
    font-size: 14px;
    display: flex;
  }
  .butt{
    font-size: 12px;
  }
  .addmin{
    justify-content: center;
    padding: 10px;
  }
  .home{
    display: flex;
    flex-direction: column;
    gap:20px;
  }
  nav{
padding: 30px;
  }
  .user{
    gap:15px;
    padding:10px;
  }
}

@media (max-width: 794px) {

}


</style>
