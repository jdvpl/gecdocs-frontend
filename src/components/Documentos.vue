<template>
  <div class="container mt-5">
    <div class="float-right">

     <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
   <b-icon-plus-square></b-icon-plus-square>
</button>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-center" id="staticBackdropLabel">Agrega un documento</h5>
        <button type="button" class="btn-close bg-danger text-white" data-bs-dismiss="modal" aria-label="Close">X</button>
      </div>
      <div class="modal-body">

        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Nombre Documento</label
            >
            <input
              type="email"
              class="form-control"
              id="text"
              placeholder="Nombre Documento"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Fecha Renovacion</label
            >
            <input type="date" class="form-control" id="ferev" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Fecha Vencimiento</label
            >
            <input type="date" class="form-control" id="feven" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Fecha Vencimiento</label
            >
            <input type="date" class="form-control" id="feven" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Fecha Alarma</label
            >
            <input type="date" class="form-control" id="feven" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Hora Alarma</label
            >
            <input type="time" class="form-control" id="feven" />
          </div>

          <button type="submit" class="btn btn-dark btn-block">Guardar</button>

        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
       
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="card text-white bg-danger mb-3">
          <div class="card-header">Documentos a Vencer en 7 dias</div>
          <div class="card-body">
            <div class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action"
                aria-current="true"
              >
                Soat-25-03-2020
              </a>
              <a href="#" class="list-group-item list-group-item-action"
                >Dapibus ac facilisis in</a
              >
              <a href="#" class="list-group-item list-group-item-action"
                >Morbi leo risus</a
              >
            </div>
          </div>
        </div>
      </div>
         <div class="col-md-4">
        <div class="card text-white naranja mb-3">
          <div class="card-header">Documentos a Vencer en 15 dias</div>
          <div class="card-body">
            <div class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action"
                aria-current="true"
              >
                Cras justo odio
              </a>
              <a href="#" class="list-group-item list-group-item-action"
                >Dapibus ac facilisis in</a
              >
              <a href="#" class="list-group-item list-group-item-action"
                >Morbi leo risus</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-white bg-success mb-3">
          <div class="card-header">Documentos a Vencer en 30 dias</div>
          <div class="card-body">
            <div class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action"
                aria-current="true"
              >
                Cras justo odio
              </a>
              <a href="#" class="list-group-item list-group-item-action"
                >Dapibus ac facilisis in</a
              >
              <a href="#" class="list-group-item list-group-item-action"
                >Morbi leo risus</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="tabla">
      <tabla></tabla>
    </div>
  </div>
</template>
<script>
import Tabla from './Tabla.vue';
export default {
  components: { Tabla },
  name: "Documento",
};
</script>

<style>
.naranja{
  background-color: orange !important;
}
</style>
