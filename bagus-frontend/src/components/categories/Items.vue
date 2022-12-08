<script setup>
import ItemCard from '@/components/ItemCard.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'; 

// route
const route = useRoute();

// Data kosong
const items = ref([]);

// Nama CAtegory
const category = ref({});

// Ambil Data Products - Dengan Asyn Await
async function getItemsData(params) {
    try {
        const response = await axios.get('https://zullkit-backend.buildwithangga.id/api/categories?id='+ route.params.id +'&show_product=1');
        // console.log(response.data);
        // item.value = response.data.data.products

        // category
        items.value = response.data.data.products
        category.value = response.data.data
    } catch (error) {
        console.error(error);
    }
}

onMounted(() => {
    getItemsData();
})

</script>

<template>
    <div class="container px-4 mx-auto my-16 md:px-12">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">{{category.name}}</h2>
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