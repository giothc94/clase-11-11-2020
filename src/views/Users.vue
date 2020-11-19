<template>
  <div class="about">
    <h1>Lista de usuarios</h1>
  </div>
</template>

<script>
import UsersService from "@/services/users";
export default {
  mounted(){
    this.getData()
  },
  methods: {
    getData(){
      UsersService.getUsers()
        .then((results)=>{
          console.log(results)
        })
        .catch((error)=>{
          console.error(error)
        })
    }
  }
  }
</script>