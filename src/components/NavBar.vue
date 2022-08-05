// This library hates TS and Vuesax pls fix
<template>
  <div>
    <vs-navbar shadow-scroll fixed center-collapsed v-model="active">
      <template #left>
        <h3>Hello World</h3>
      </template>
      <vs-navbar-item :active="active == 'home'">
        Home
      </vs-navbar-item>
      <template #right>
        <vs-button flat>Posts</vs-button>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => {
    return {
      active: 'home'
    }
  }
}
</script>
