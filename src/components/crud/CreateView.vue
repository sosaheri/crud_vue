<template lang="">
<div class="container">
        <div class="card" >
            <div class="card-header">
                Create
            </div>

            <form v-on:submit.prevent="createEmployee">

                <div class="row">
                    <div class="col">
                        <input v-model="employee.name" type="text" name="name" class="form-control" placeholder="Name" aria-label="Name">
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <input v-model="employee.email" type="text" name="email" class="form-control" placeholder="Email" aria-label="Email">
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Create</button>
                    <router-link class="btn btn-danger ms-1" to="/list">Cancel</router-link>

                </div>

            </form>
            

        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            employee:{}
        }
    },
    created:function(){

    },
    methods:{
        createEmployee(){
            console.log(this.employee);

            let dataEnviada = {
                name:this.employee.name,
                email: this.employee.email
            };

            console.log("form" + JSON.stringify(dataEnviada));

            const options = {
                method: "POST",
                headers: new Headers({ 'content-type': 'application/json' }),
               
            };

            options.body = JSON.stringify(dataEnviada);

            fetch('http://localhost:3004/employees', options)
            .then(resp => resp.json())
            .then((dataEnviada=>{
                console.log("antes de reenviar" + JSON.stringify(dataEnviada));
                window.location.href='/'
                }))
            .catch(console.log)

        }
    }
    
}
</script>
<style lang="">
    
</style>