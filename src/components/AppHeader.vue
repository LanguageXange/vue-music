<script>
import { mapStores, mapWritableState, mapActions } from 'pinia'
import useModalStore from '@/stores/modal'

export default {
  name: 'AppHeader',
  computed: {
    ...mapStores(useModalStore), // #1
    ...mapWritableState(useModalStore, ['isOpen']), //#2
    ...mapActions(useModalStore, ['toggle']) //#3
  },
  methods: {
    toggleAuthModal() {
      console.log(this)
      // this.modalStore.isOpen = !this.modalStore.isOpen // #1
      this.isOpen = !this.isOpen // #2
      console.log(this.isOpen)
    }
  }
}
</script>

<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <a class="text-white font-bold uppercase text-2xl mr-4" href="#">Zen Music</a>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal"
              >Login / Register</a
            >
          </li>
          <li>
            <a class="px-2 text-white" href="#" @click.prevent="toggle()"
              >Testing Modal Toggle with Actions</a
            >
          </li>
          <li>
            <a class="px-2 text-white" href="#">Manage</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
, mapWritableState
