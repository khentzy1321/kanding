<template>
  <div>
    <hr />
    <div class="container">
      <div class="text-center m-4">
        <h4>Dengue Info Application</h4>
      </div>
      <div class="container">
        <table class="table table-striped">
          <thead class="bg-primary text-white">
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Deaths</th>
              <th>Recovered</th>
              <th>Month</th>
              <th class="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="fever in dengueInfoApplication"
              :key="fever.id"
              class="hover-list"
            >
              <td>{{ fever.name }}</td>
              <td>{{ fever.lName }}</td>
              <td>{{ fever.deaths }}</td>
              <td>{{ fever.recovered }}</td>
              <td>{{ fever.month }}</td>
              <td>
                <router-link
                  :to="{ name: 'view-dengue-tracker', params: { id: fever.id } }"
                  class="btn btn-sm btn-success"
                  >open</router-link
                >
                <router-link
                  :to="{
                    name: 'view-dengue-tracker-edit',
                    params: { id: fever.id },
                  }"
                  class="btn btn-sm btn-secondary"
                  >Update</router-link
                >
                <router-link
                  :to="{
                    name: 'view-dengue-tracker-delete',
                    params: { id: fever.id },
                  }"
                  class="btn btn-sm btn-danger"
                  >Delete</router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dengueInfoApplication: [],
    };
  },
  methods: {
    getData() {
      fetch("http://127.0.0.1:8000/api/dengue-info/")
        .then((res) => res.json())
        .then((data) => {
          this.dengueInfoApplication = data;
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
.hover-list:hover {
  background: rgb(226, 222, 222);
}
</style>
