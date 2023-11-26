<script setup lang="ts">
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
}>()

const handleInput = () => {
    emit('update:modelValue', props.modelValue)
}
</script>

<template>
    <div>
        <input
            class="focus-visible:border-ds- rounded-ds-radii-xs border border-ds-color-outline bg-ds-color-surface px-ds-ref-spacing-4 py-ds-ref-spacing-3 text-ds-font-body-large-font-size font-ds-font-body-large-font-weight leading-ds-font-body-large-line-height tracking-ds-font-body-large-letter-spacing text-ds-color-on-surface placeholder-ds-color-on-surface placeholder-opacity-ds-opacity-color-medium transition-all duration-300 focus-visible:outline-ds-color-on-surface"
            :value="modelValue"
            @input="handleInput"
        />
    </div>
</template>
