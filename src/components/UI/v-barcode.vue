<template>
    <svg ref="barcode"></svg>
</template>

<script>

import JsBarcode from 'jsbarcode'
export default {
    name: 'v-barcode',
    props: {
        barcode: String
    },
    data() {
        return {
            barcodeOptions: this.$store.state.labelModule.barcodeOptions
        }
    },
    methods: {
        GenerateBarcode() {
            if (this.barcode.length > 0)
                JsBarcode(this.$refs.barcode, this.barcode, this.barcodeOptions)
        }
    },
    mounted() {
        this.GenerateBarcode()
    },
    watch: {
        '$store.state.labelModule.barcodeOptions': {
            handler(newValue) {
                this.GenerateBarcode();
            },
            deep: true
        }
    }
}
</script>