<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'
import OHeaderMain from '../organisms/OHeaderMain/OHeaderMain.vue'
import OCard from '../organisms/OCard/OCard.vue'
import MSkeletonCard from '../molecules/MSkeletonCard/MSkeletonCard.vue'
import type { User } from '@/stores/user'

const userStore = useUserStore()
const users = computed<Array<User>>(() => userStore.users)
const fetchState = computed<string>(() => userStore.fetchState)
</script>

<template>
    <OHeaderMain />
    <main class="pt-ds-spacing-5xl">
        <section class="p-ds-spacing-md sm:p-ds-spacing-xl md:p-ds-spacing-5xl lg:p-ds-spacing-9xl">
            <ul
                v-if="fetchState === 'done' && users.length"
                class="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-ds-spacing-md"
            >
                <li v-for="user in users" :key="user.id">
                    <OCard :link="user.html_url" :login="user.login" :image="user.avatar_url" />
                </li>
            </ul>

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
        </section>
    </main>
</template>
