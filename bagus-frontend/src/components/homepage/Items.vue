<script setup>
import ItemCard from '@/components/ItemCard.vue'
import { ref, onMounted } from 'vue'

// Data kosong
const items = ref([]);

// Ambil Data Products - Dengan Asyn Await
async function getItemsData(params) {
    try {
        const response = await axios.get('https://zullkit-backend.buildwithangga.id/api/products');
        // console.log(response.data);
        items.value = response.data.data.data
    } catch (error) {
        console.error(error);
    }
}

onMounted(() => {
    getItemsData();
})


// const items = ref([
//     { id: 1, title: 'Mobile UI Kit', description: "Mobile UI Kit", image: 'items-1.jpg' },
//     { id: 2, title: 'Online Doctor Consultation', description: "Website UI Kit", image: 'items-2.jpg' },
//     { id: 3, title: 'Banking Crypto', description: "Mobile UI Kit", image: 'items-3.jpg' },

// ])
</script>

<template>
    <div class="container px-4 mx-auto my-16 md:px-12">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <!-- Items Card -->
            <ItemCard v-for="item in items"
                :id="item.id"
                :key="item.id"
                :name="item.name"
                :subtitle="item.subtitle"
                :image="item.thumbnails" />
        </div>
    </div>
</template>