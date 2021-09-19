<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">19</span>
      <span class="mx-1 fs-3">Septiembre</span>
      <span class="mx-2 fs-4 fw-light">2021, Domingo</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        Borrar <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary">
        Subir foto <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="Que sucedio hoy?"></textarea>
  </div>
  <Fab iconName="fa-save" />
  <img
    src="https://images.unsplash.com/photo-1632060503164-790178d036b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    alt="entry-picture"
    class="img-tumbnail"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}

img {
  width: 250px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
