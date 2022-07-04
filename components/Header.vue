<template>
  <div>
    <nav class="wrapper py-6 dark:bg-gray-900">
      <div class="px-10 flex justify-between items-center">
        <div class="logo">
          <nuxt-link to="/">
            <h1
              class="ml-5 font-normal text-center text-4xl text-gray-700 dark:text-gray-200 dark:hover:text-primary hover:text-primary m-auto caiofernando">
              Caio Fernando</h1>
          </nuxt-link>
        </div>

        <div class="flex flex-row">
          <ColorSwitcher />
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  }
}
</script>

<style>
.mobile-link {
  @apply block px-3 py-2 text-lg text-gray-900 rounded-md text-white font-medium text-center;
}

.caiofernando{
  font-family: "Caveat";
}

</style>
