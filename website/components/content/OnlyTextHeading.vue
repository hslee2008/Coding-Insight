<template>
  <div>
    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h2>{{ heading }}</h2>
        <template v-for="item in contents">
          {{ item }}

          <br /><br />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['heading', 'contents'],
};
</script>
