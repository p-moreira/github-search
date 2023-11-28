<script setup lang="ts">
import { computed } from 'vue'
import OHeaderMain from '../organisms/OHeaderMain/OHeaderMain.vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const users = computed(() => userStore.users)
</script>

<template>
    <OHeaderMain />
    <main class="pt-ds-spacing-5xl">{{ users }}</main>
</template>
