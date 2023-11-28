<script setup lang="ts">
import { ref } from 'vue'
import AButton from '@/components/atoms/AButton/AButton.vue'
import AInput from '@/components/atoms/AInput/AInput.vue'

const emit = defineEmits<{
    (e: 'submit', searchTerm: string): void
}>()

const searchTerm = ref('')

const handleButtonClick = () => {
    emit('submit', searchTerm.value)
}
</script>

<template>
    <div class="flex w-full max-w-[600px] items-center gap-ds-spacing-sm">
        <AInput
            v-model="searchTerm"
            class="w-full max-w-[600px]"
            placeholder="Usuário"
            @keyup.enter="handleButtonClick"
        ></AInput>
        <AButton label="Buscar" @click="handleButtonClick"></AButton>
    </div>
</template>
