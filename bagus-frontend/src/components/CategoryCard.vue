<script setup>
import { RouterLink } from 'vue-router'

defineProps({
    id: Number,
    title: String,
    image: String,
    count: Number
})

// tidak perlu seperti ini lgi
// :src="'/src/assets/img/' + image" />

</script>

<template>
    <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
        <div class="overflow-hidden border border-gray-200 rounded-xl">
            <RouterLink to="#">
                <div class="m-4 overflow-hidden rounded-xl">
                    <img alt="Placeholder"
                        class="block w-full h-auto"
                        :src="image" />
                </div>
            </RouterLink>

            <header class="px-4 mb-4 leading-tight">
                <h1 class="text-lg">
                    <RouterLink class="font-semibold text-black no-underline hover:underline"
                        :to="{name: 'category-items', params: {id: id}}">
                        {{title}}
                    </RouterLink>
                </h1>
                <span class="block text-sm font-light text-gray-500 no-underline">
                    {{count}}
                </span>
            </header>
        </div>
    </div>
</template>