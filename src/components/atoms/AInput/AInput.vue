<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        modelValue?: string
    }>(),
    {
        modelValue: '',
    }
)

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'keyup', event: KeyboardEvent): void
}>()

const stateClasses = computed(() => ({
    default: 'bg-ds-color-surface text-ds-color-on-surface border-ds-color-outline',
    disabled:
        'cursor-not-allowed bg-ds-color-disabled text-ds-color-on-disabled border-ds-color-on-disabled',
}))

const handleInput = (event: Event): void => {
    emit('update:modelValue', (event.target as HTMLInputElement).value)
}

const handleKeyup = (event: KeyboardEvent): void => {
    emit('keyup', event)
}
</script>

<template>
    <div>
        <input
            class="rounded-ds-radii-xs border px-ds-ref-spacing-3 py-ds-ref-spacing-3 text-ds-font-label-large-font-size font-ds-font-label-large-font-weight leading-ds-font-label-large-line-height tracking-ds-font-label-large-letter-spacing placeholder-ds-color-on-surface placeholder-opacity-ds-opacity-color-medium transition-all duration-300 focus-visible:outline-ds-color-on-surface"
            :class="[$attrs.disabled ? stateClasses.disabled : stateClasses.default]"
            type="text"
            :value="modelValue"
            v-bind="$attrs"
            @input="handleInput($event)"
            @keyup="handleKeyup($event)"
        />
    </div>
</template>
