<script setup lang="ts">
import { ref } from 'vue'

const theme = ref('light')
const handleInputThemeChange = (event: Event) => {
    theme.value = (event.target as HTMLInputElement).checked ? 'dark' : 'light'
    document.body.setAttribute('data-theme', theme.value)
}
</script>

<template>
    <main class="m-ds-spacing-3xl">
        <h1 class="text-ds-font-headline-large-font-size text-ds-color-primary">Main content</h1>

        <p class="mt-ds-spacing-md text-ds-font-body-large-font-size leading-ds-ref-line-height-4">
            This content is using the custom Design System classes!
        </p>

        <form class="mt-ds-spacing-md flex gap-ds-spacing-sm">
            <input
                id="theme"
                type="checkbox"
                name="theme"
                :value="theme"
                @change="handleInputThemeChange"
            />
            <label for="theme">Dark Mode</label>
        </form>
    </main>
</template>
