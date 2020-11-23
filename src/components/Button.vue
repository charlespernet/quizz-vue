<template>
  <div :class="classObject" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium md:py-4 md:text-lg md:px-10 transition ease-in-out">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: String, type: String
  },
  computed: {
    classObject: function () {
      return {
        "text-white bg-green-400 hover:bg-green-500": this.type === 'full',
        "text-green-400 hover:text-green-500 border-2 border-green-400 hover:border-green-500": this.type === 'outline',
      };
    },
  },
};
</script>

<style lang='scss' scoped>
</style>
