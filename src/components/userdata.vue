<template>
  <div >
		<div class="container">
  	  <div class="input-group">
    	  <input type="text" class="form-control" placeholder="Search for..." v-model="search">
      	<span class="input-group-btn">
        <button class="btn btn-search" type="button"><i class="fa fa-search fa-fw"></i> Search</button>
      	</span>
    	</div>
  	</div>
		<table class="table table-striped">
			<thead >
 			<tr >
  				<th>Name</th>
 				 <th>Adhar No</th>
 			</tr>
		</thead>
			<tbody  v-for="(user,key) in searchUsers" v-bind:key="key" v-on:click="clickList(user)">  
    	<tr data-href='http://127.0.0.1:8080/#/useradd' >
				<td >{{user.Name}}</td> 
        <td>{{user.AdharNo}}</td>       
    	</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
 import axios from 'axios';
export default {
    name: 'userdata',
  props: {
		
  },
  data(){
      return{fields: {
          Name: {
            label: 'User name',
          },
          AdharNo: {
            label: 'Adhar no',
					}
				},
				alluser:[],
				search:'',
				tempuser:[]
      }
	},
	mounted () {
	axios
      .get('http://127.0.0.1:3000/user')
      .then(response => {(this.alluser = response.data)}).catch(function(){
		alert("Error - some thing went wrong");
	})
	},
	computed:{
		searchUsers:function(){
			return this.alluser.filter((user)=>{
				return user.Name.match(this.search);
			})
		}
	},
	methods:{
		clickList: function (user) {
		this.$store.dispatch('getuser',user);
		this.$store.dispatch('adduser');
		window.location.href = 'http://127.0.0.1:8080/#/UserUpdate';
		}	
	}

}
</script>


<style>

</style>