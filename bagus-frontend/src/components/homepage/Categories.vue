<script setup>
import CategoryCard from '@/components/CategoryCard.vue'
import { ref } from 'vue'

const categories = ref([
    { id: 1, title: 'Mobile UI Kit', count: 731, image: 'categories-1.jpg' },
    { id: 2, title: 'Fonts', count: 657, image: 'categories-2.jpg' },
    { id: 3, title: 'Icon Set', count: 83559, image: 'categories-3.jpg' },
    { id: 4, title: 'Website UI Kit', count: 4500, image: 'categories-4.jpg' }
])
</script>

<template>
    <div class="container px-4 mx-auto my-16 md:px-12" id="categories">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Categories</h2>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <!-- <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                <div class="overflow-hidden border border-gray-200 rounded-xl">
                    <RouterLink to="details.html">
                        <div class="m-4 overflow-hidden rounded-xl">
                            <img alt="Placeholder"
                                class="block w-full h-auto"
                                src="@/assets/img/categories-1.jpg" />
                        </div>
                    </RouterLink>

                    <header class="px-4 mb-4 leading-tight">
                        <h1 class="text-lg">
                            <RouterLink class="font-semibold text-black no-underline hover:underline"
                                to="#">
                                Mobile UI Kit
                            </RouterLink>
                        </h1>
                        <span class="block text-sm font-light text-gray-500 no-underline">
                            731 items
                        </span>
                    </header>
                </div>
            </div>
            <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                <div class="overflow-hidden border border-gray-200 rounded-xl">
                    <RouterLink to="details.html">
                        <div class="m-4 overflow-hidden rounded-xl">
                            <img alt="Placeholder"
                                class="block w-full h-auto"
                                src="@/assets/img/categories-2.jpg" />
                        </div>
                    </RouterLink>

                    <header class="px-4 mb-4 leading-tight">
                        <h1 class="text-lg">
                            <RouterLink class="font-semibold text-black no-underline hover:underline"
                                to="#">
                                Fonts
                            </RouterLink>
                        </h1>
                        <span class="block text-sm font-light text-gray-500 no-underline">
                            657 items
                        </span>
                    </header>
                </div>
            </div>
            <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                <div class="overflow-hidden border border-gray-200 rounded-xl">
                    <RouterLink to="details.html">
                        <div class="m-4 overflow-hidden rounded-xl">
                            <img alt="Placeholder"
                                class="block w-full h-auto"
                                src="@/assets/img/categories-3.jpg" />
                        </div>
                    </RouterLink>

                    <header class="px-4 mb-4 leading-tight">
                        <h1 class="text-lg">
                            <RouterLink class="font-semibold text-black no-underline hover:underline"
                                to="#">
                                Icon Set
                            </RouterLink>
                        </h1>
                        <span class="block text-sm font-light text-gray-500 no-underline">
                            83,559 items
                        </span>
                    </header>
                </div>
            </div>
            <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                <div class="overflow-hidden border border-gray-200 rounded-xl">
                    <RouterLink to="details.html">
                        <div class="m-4 overflow-hidden rounded-xl">
                            <img alt="Placeholder"
                                class="block w-full h-auto"
                                src="@/assets/img/categories-4.jpg" />
                        </div>
                    </RouterLink>

                    <header class="px-4 mb-4 leading-tight">
                        <h1 class="text-lg">
                            <RouterLink class="font-semibold text-black no-underline hover:underline"
                                to="#">
                                Website UI Kit
                            </RouterLink>
                        </h1>
                        <span class="block text-sm font-light text-gray-500 no-underline">
                            4,500 items
                        </span>
                    </header>
                </div>
            </div> -->

            <!-- CategoriesCard -->
            <CategoryCard v-for="category in categories"
                :key="category.id"
                :title="category.title"
                :count="category.count"
                :image="category.image" />
            <!-- <CategoriesCard title="Mobile UI Kit" :count="731" image="categories-1.jpg"/>
            <CategoriesCard title="Fonts" :count="657" image="categories-2.jpg"/>
            <CategoriesCard title="Icon Set" :count="83559" image="categories-3.jpg"/>
            <CategoriesCard title="Website UI Kit" :count="4500" image="categories-4.jpg"/> -->
        </div>
    </div>
</template>