<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'
import OHeaderMain from '../organisms/OHeaderMain/OHeaderMain.vue'
import OCard from '../organisms/OCard/OCard.vue'
import MSkeletonCard from '../molecules/MSkeletonCard/MSkeletonCard.vue'
import type { User } from '@/stores/user'
import AButton from '../atoms/AButton/AButton.vue'

const userStore = useUserStore()
const users = computed<Array<User>>(() => userStore.users)
const fetchState = computed<string>(() => userStore.fetchState)
const totalCount = computed<number>(() => userStore.totalCount)
const totalPages = computed<number>(() => (totalCount.value ? Math.ceil(totalCount.value / 20) : 0))
const currentPage = computed<number>(() => userStore.currentPage)
const searchTerm = computed<string>(() => userStore.searchTerm)
const canGoBack = computed<boolean>(() => currentPage.value > 1)
const canAdvance = computed<boolean>(() => currentPage.value < totalPages.value)

const handlePreviousButtonClick = () => {
    if (!canGoBack.value) return

    userStore.fetchUsers(searchTerm.value, currentPage.value - 1)
}

const handleNextButtonClick = () => {
    if (!canAdvance.value) return

    userStore.fetchUsers(searchTerm.value, currentPage.value + 1)
}
</script>

<template>
    <OHeaderMain />
    <main class="pt-ds-spacing-5xl">
        <section class="p-ds-spacing-md sm:p-ds-spacing-xl md:p-ds-spacing-5xl lg:p-ds-spacing-9xl">
            <div
                v-if="fetchState === 'done' && users.length"
                class="flex flex-col gap-ds-spacing-lg"
            >
                <ul
                    class="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-ds-spacing-md"
                >
                    <li v-for="user in users" :key="user.id">
                        <OCard :link="user.html_url" :login="user.login" :image="user.avatar_url" />
                    </li>
                </ul>

                <div class="flex gap-ds-spacing-md">
                    <AButton
                        :disabled="!canGoBack"
                        label="Anterior"
                        @click="handlePreviousButtonClick"
                    />
                    <AButton
                        :disabled="!canAdvance"
                        label="Próxima"
                        @click="handleNextButtonClick"
                    />
                </div>
            </div>

            <MSkeletonCard v-if="fetchState === 'pending'" />

            <p
                v-if="fetchState === 'done' && !users.length"
                class="text-ds-font-title-large-font-size"
            >
                Nenhum usuário encontrado!
            </p>

            <p
                v-if="fetchState === 'idle' && !users.length"
                class="text-ds-font-title-large-font-size"
            >
                Busque por um usuário!
            </p>

            <p v-if="fetchState === 'error'" class="text-ds-font-title-large-font-size">
                Ocorreu um erro ao buscar os usuários!
            </p>
        </section>
    </main>
</template>
