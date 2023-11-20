<script setup lang="ts">
withDefaults(
    defineProps<{
        disabled?: boolean
    }>(),
    { disabled: false }
)
</script>

<template>
    <button
        class="relative flex cursor-pointer justify-center rounded-ds-radii-xs border-0 bg-ds-color-primary px-ds-spacing-md py-ds-spacing-sm font-ds-font-label-large-font-family text-ds-font-label-large-font-size font-ds-font-label-large-font-weight text-ds-color-on-primary transition-all duration-300"
        :class="{
            'bg-ds-color-disabled text-ds-color-on-disabled cursor-not-allowed': disabled,
        }"
        :disabled="disabled"
    >
        Button
    </button>
</template>
