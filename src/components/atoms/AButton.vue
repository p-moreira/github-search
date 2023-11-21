<script setup lang="ts">
import { computed } from 'vue'

withDefaults(
    defineProps<{
        label?: string
        disabled?: boolean
    }>(),
    { label: 'Button', disabled: false }
)

const emit = defineEmits<{
    (event: 'click'): void
}>()

const stateClasses = computed(() => ({
    default: 'cursor-pointer bg-ds-color-primary text-ds-color-on-primary',
    disabled: 'cursor-not-allowed bg-ds-color-disabled text-ds-color-on-disabled',
}))

const stateOverlayClasses = computed(() => ({
    default: 'hover:opacity-ds-opacity-overlay-hover',
    disabled: 'hover:opacity-0',
}))

const handleClick = () => {
    emit('click')
}
</script>

<template>
    <button
        class="relative flex justify-center rounded-ds-radii-xs border-0 px-ds-spacing-md py-ds-spacing-sm font-ds-font-label-large-font-family text-ds-font-label-large-font-size font-ds-font-label-large-font-weight transition-all duration-300"
        :class="[disabled ? stateClasses.disabled : stateClasses.default]"
        :disabled="disabled"
        @click="handleClick"
    >
        <div
            class="absolute left-0 top-0 h-full w-full rounded-ds-radii-xs bg-ds-color-on-surface opacity-0 transition-opacity duration-300"
            :class="[disabled ? stateOverlayClasses.disabled : stateOverlayClasses.default]"
        />
        {{ label }}
    </button>
</template>
