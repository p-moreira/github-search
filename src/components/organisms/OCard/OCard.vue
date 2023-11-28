<script setup lang="ts">
import APlaceholderAvatar from '@/components/atoms/APlaceholderAvatar/APlaceholderAvatar.vue'

const props = withDefaults(
    defineProps<{
        image: string
        login: string
        link: string
    }>(),
    {}
)
</script>

<template>
    <article
        class="grid h-full grid-cols-[auto_1fr] items-center gap-ds-spacing-sm rounded-ds-radii-xs border border-ds-color-outline bg-ds-color-surface p-ds-spacing-sm"
    >
        <header class="w-16">
            <picture>
                <img
                    v-if="props.image"
                    :src="props.image"
                    :alt="props.login"
                    class="h-auto w-full max-w-full rounded-ds-radii-xs"
                />
                <APlaceholderAvatar
                    v-else
                    class="h-16 w-16 rounded-ds-radii-xs bg-ds-color-disabled"
                />
            </picture>
        </header>

        <section>
            <a
                :href="props.link"
                target="_blank"
                rel="noopener nofollow"
                class="hover:text-ds-color-primary"
            >
                <h3 class="a-card__description">{{ props.login }}</h3>
            </a>
        </section>
    </article>
</template>
