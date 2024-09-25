<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Axios Reguest
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(user, index) in data.slice(0, limit || 1)"
          :key="user.id"
        >
          <div class="bg-white rounded-xl shadow-md relative">
            <div class="p-4">
              <div class="mb-6">
                <div class="text-gray-600 my-2">{{ user.username }}</div>
                <h3 class="text-xl font-bold">{{ user.name }}</h3>
              </div>

              <div class="mb-5">
                {{ user.email }}
              </div>

              <h3 class="text-green-500 mb-2">{{ user.address.city }}</h3>

              <div class="border border-gray-100 mb-5"></div>

              <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-700 mb-3">
                  <i class="fa-solid fa-location-dot text-lg"></i>
                  {{ user.address.street }}
                </div>
                <a
                  href="job.html"
                  class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <section v-if="limit < data.length"
        @click="handleLimitIncrease" class="m-auto max-w-lg my-10 px-6">
          <a class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
            >See One More</a
          >
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
// imports
import axios from "axios";
import { onMounted, ref, defineProps } from "vue";
// data
const data = ref([]);
const showFillDescription = ref(false)
const props = defineProps({
  limit: Number,
});
let limit = ref(props.limit);
//methods
const handleLimitIncrease = () => {
    if (limit.value < data.value.length){
        limit.value += 1;
    }
};

// computed
// const truncatedDescription = computed(()=>{
//     let description = props.data.email
// })

// lifeCycle 
onMounted(async () => {
  try {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    const dataResponse = response.data;
    data.value = dataResponse;
  } catch (error) {
    console.log("error", error);
  }
});
</script>
