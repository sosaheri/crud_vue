<template lang="">
    <div class="container">
        <div class="card" >
            <div class="card-header">
                List
            </div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="employee in employees" :key="employee.id">
                        <th scope="row">{{ employee.id }}</th>
                        <td>{{ employee.name }}</td>
                        <td>{{ employee.email }}</td>
                        <th scope="col">
                            
                            <router-link :to="{name:'edit',params:{id:employee.id}}" class="btn btn-primary">Edit</router-link>
                            <a v-on:click="deleteEmployee(employee.id)" name="" id="" class="btn btn-danger ms-1" href="#" role="button" >Delete</a>

                        </th>
    
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            employees:[]
        }
    },
    created:function(){
        this.getEmployees();
    },
    methods:{
        getEmployees(){

            fetch('http://localhost:3004/employees')
            .then(resp => resp.json())
            .then((dataResp)=>{
                console.log(dataResp);

                this.employees = dataResp;

            })
            .catch(console.log)
        },
        editEmployee(id){
            console.log(id)

            const options = {
                method: "DELETE",
                headers: new Headers({ 'content-type': 'application/json' }),
            };

            fetch('http://localhost:3004/employees/' + id, options)
                .then(resp => resp.json())
                .then((dataEnviada => {
                    console.log("antes de reenviar" + JSON.stringify(dataEnviada));
                    window.location.href = 'list'
                }))
                .catch(console.log)
        },
        deleteEmployee(id){
            console.log(id)

            const options = {
                method: "DELETE",
                headers: new Headers({ 'content-type': 'application/json' }),
            };

            fetch('http://localhost:3004/employees/'+id, options)
                .then(resp => resp.json())
                .then((dataEnviada => {
                    console.log("antes de reenviar" + JSON.stringify(dataEnviada));
                    window.location.href = '/'
                }))
                .catch(console.log)
        }
        
    }
    
}
</script>
<style lang="">
    
</style>