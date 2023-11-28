<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'
import OHeaderMain from '../organisms/OHeaderMain/OHeaderMain.vue'
import OCard from '../organisms/OCard/OCard.vue'
import type { User } from '@/stores/user'

const userStore = useUserStore()
const users = computed<Array<User>>(() => userStore.users)
</script>

<template>
    <OHeaderMain />
    <main class="pt-ds-spacing-5xl">
        <section class="p-ds-spacing-md sm:p-ds-spacing-xl md:p-ds-spacing-5xl lg:p-ds-spacing-9xl">
            <div class="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-ds-spacing-md">
                <OCard
                    v-for="user in users"
                    :key="user.id"
                    :link="user.html_url"
                    :login="user.login"
                    :image="user.avatar_url"
                />
            </div>
        </section>
    </main>
</template>
