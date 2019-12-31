<template>
    <img v-bind="$attrs" :src="fallbackSrc" :srcset="srcset" />
</template>

<script>
    export default {
        name: "responsive-img",
        props: ["alt", "src"],
        data() {
            return {
                fallbackSrc: "",
                srcset: ""
            }
        },
        created() {
            // eslint-disable-next-line no-console
            console.log(this.src);
            this.fallbackSrc = this.src.x1.src;
            this.srcset = buildSrcset(this.src);
        }
    }

    function buildSrcset(src) {
        const webp = [
            src.x1 && src.x1.webp ? src.x1.webp + " 1x" : "",
            src.x2 && src.x2.webp ? src.x2.webp + " 2x" : "",
            src.x3 && src.x3.webp ? src.x3.webp + " 3x" : ""
        ];

        const srcset = [
            src.x1 && src.x1.src ? src.x1.src + " 1x" : "",
            src.x2 && src.x2.src ? src.x2.src + " 2x" : "",
            src.x3 && src.x3.src ? src.x3.src + " 3x" : ""
        ];

        return [
            ...webp,
            ...srcset
        ].filter(value => value !== "").join(", ");
    }
</script>

<style scoped>

</style>
