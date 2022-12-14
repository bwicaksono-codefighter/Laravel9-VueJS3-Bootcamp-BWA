<script setup>
import { onMounted, computed } from 'vue';
import { useUserStore } from '@/stores/user';

import Logo from './Logo.vue'
import NavigationLinks from './NavigationLinks.vue'
import AuthButton from './AuthButton.vue'
import UserInfo from './UserInfo.vue'

// Cara pakai store
const userStore = useUserStore()

const user = computed(() => userStore.getUser)

// const user = computed(() => userStore.getUser)
const isLoggedIn = computed(() => userStore.isLoggedIn)

onMounted(() => {
    userStore.fetchUser()
})

</script>

<template>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <!-- Logo -->
            <Logo />      
            
            <!-- Cek sudah login atau belum -->
            <UserInfo v-if="isLoggedIn" :user="user.data" />

           <!-- User Info -->
           <AuthButton v-else />

           <!-- Navigation Links -->
           <NavigationLinks/>
        </div>
    </nav>
</template>