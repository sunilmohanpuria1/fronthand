<template>
	<div>
		<div>
			<headerfile></headerfile>
		</div>
		<div>
			<h1>User details</h1>
			<a>User Name = {{newuser.Name}}</a><br>
			<a>User ID = {{newuser.user_id}}</a><br>
			<a>User Adhar No= {{newuser.AdharNo}}</a><br>
			<form> 
				<div v-for="(data,key) in newuser.contacts" v-bind:key="key" >
					Contact ID
					<input type="text" class="form-control" v-model="data.contact_id">
					Contact No
					<input type="text" class="form-control" v-model="data.contactNo">
					Address 
					<input type="text" class="form-control" v-model="data.address">
					<button type="button" v-on:click='updatefun(data)'>Update</button>
					<button type="button" v-on:click='deletefun(data)'>Delete</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import headerfile from './headerfile.vue'
import axios from 'axios';

export default {
	name:"UserUpdate",
	components:{
		headerfile
	},
	computed:{
    newuser(){
		return this.$store.state.newuser;
      },
    users(){
      return this.$store.state.users;
    }
	},
	methods:{
		updatefun:function(data){
			axios
      .put('http://127.0.0.1:3000/user/'+data.contact_id,{
        contactNo:data.contactNo,
        address:data.address
      })
      .then(function(response){
        alert(response.data);
        //window.location.href = 'http://127.0.0.1:8080/#/';
        return 
      }).catch(function(){
		alert("Error - some thing went wrong");
	})
		},
		deletefun:function(data){
			axios
      .delete('http://127.0.0.1:3000/user/'+data.contact_id,{
			})
		.then(function(response){
        alert(response.data);
        //window.location.href = 'http://127.0.0.1:8080/#/';
        return 
      }).catch(function(){
		alert("Error - some thing went wrong");
	})
		}
	}
}
</script>

