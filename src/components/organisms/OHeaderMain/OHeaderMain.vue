<script setup lang="ts">
import ALogoGithub from '@/components/atoms/ALogoGithub/ALogoGithub.vue'
import MInputSearch from '@/components/molecules/MInputSeacrh/MInputSearch.vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const handleInputSearchSubmit = async (searchTerm: string) => {
    if (!searchTerm) return

    userStore.fetchUsers(searchTerm)
}
</script>

<template>
    <header
        class="fixed left-0 right-0 top-0 z-50 grid grid-cols-[40px_1fr] items-center gap-ds-spacing-sm border-b border-ds-color-on-surface px-ds-spacing-md py-ds-spacing-sm"
    >
        <div class="absolute left-0 top-0 -z-10 h-full w-full bg-ds-color-surface opacity-[0.95]" />

        <ALogoGithub />

        <MInputSearch @submit="handleInputSearchSubmit" />
    </header>
</template>
