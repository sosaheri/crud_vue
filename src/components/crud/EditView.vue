<template lang="">
    <div class="container">
        <div class="card" >
            <div class="card-header">
                Edit
            </div>

            <form v-on:submit.prevent="editEmployee">

                <div class="row">
                    <div class="col">
                        <input v-model="employee.name" type="text" name="name" id="name" class="form-control"  aria-label="Name">
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <input v-model="employee.email" type="text" name="email" id="email" class="form-control"  aria-label="Email">
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Save</button>
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
            employee: {}
        }
    },
    created: function () {
        this.getEmployeeById();
    },
    methods: {
        getEmployeeById() {

            const dataId = this.$route.params.id;

            console.log("get employee" + dataId );

            fetch('http://localhost:3004/employees/'+dataId)
                .then(resp => resp.json())
                .then((dataResp) => {
                    console.log("get employee" + JSON.stringify(dataResp));

                    this.employee = dataResp;

                    console.log("resp " + this.employe);

                })
                .catch(console.log)
        },
        editEmployee() {
            console.log("editemployee" + JSON.stringify(this.employee));

            let id = this.employee.id;
            let dataEnviada = {
                name: this.employee.name,
                email: this.employee.email
            };

            console.log("form" + JSON.stringify(dataEnviada));

            const options = {
                method: "PUT",
                headers: new Headers({ 'content-type': 'application/json' }),

            };

            options.body = JSON.stringify(dataEnviada);

            fetch('http://localhost:3004/employees/' + id, options)
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