<template>
  <div class="about">
    <h1>Lista de usuarios</h1>
    <div>
      <table>
        <thead>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
        </thead>
        <tr v-for="user in users" :key="user.id_users">
          <td>{{ user.id_users }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.lastname }}</td>
          <td>{{ user.age }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import UsersService from "@/services/users";
export default {
  data(){
    return {
      users: []
    }
  },
  mounted(){
    this.getData()
  },
  methods: {
    getData(){
      UsersService.getUsers()
        .then((results)=>{
          this.users = results.data
          console.log(this.users)
        })
        .catch((error)=>{
          console.error(error)
        })
    }
  }
  }
</script>