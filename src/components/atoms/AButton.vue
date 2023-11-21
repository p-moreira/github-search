<script setup lang="ts">
withDefaults(
    defineProps<{
        label?: string
        disabled?: boolean
    }>(),
    { label: 'Button', disabled: false }
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
        <div
            class="absolute left-0 top-0 h-full w-full rounded-ds-radii-xs bg-ds-color-on-surface opacity-0 transition-opacity duration-300 hover:opacity-ds-opacity-overlay-hover"
        />
        {{ label }}
    </button>
</template>
