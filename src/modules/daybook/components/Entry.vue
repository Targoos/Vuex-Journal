<template>
  <div
    class="pt-3 p-2 pointer entry-container"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <!-- title -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">7</span>
      <span class="mx-1 fs-5">Septiembre</span>
      <span class="mx-1 fw-light">2021, domingo</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi obcaecati
      provident debitis voluptate non, magni, est, nulla beatae eius harum qui
      iusto officia? Nam esse obcaecati adipisci consequuntur nesciunt
      assumenda.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
  .entry-description {
    font-size: 12px;
  }
}
</style>
