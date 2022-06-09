<template>
  <h1 class="text-center mt-4">Dengue Fever Record</h1>
  <h2>
    ID: <span class="text-danger">{{ id }}</span>
  </h2>

  <table class="table table-striped">
    <thead class="bg-primary text-white">
      <tr>
        <th>Name</th>
        <th>Last Name</th>
        <th>Deaths</th>
        <th>Recovered</th>
        <th>Month</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover-list">
        <td>
          {{ dengueInfoApplication.name }}
        </td>
        <td>
          {{ dengueInfoApplication.lName }}
        </td>
        <td>
          {{ dengueInfoApplication.deaths }}
        </td>
        <td>
          {{ dengueInfoApplication.recovered }}
        </td>
        <td>
          {{ dengueInfoApplication.month }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      dengueInfoApplication: [],
    };
  },

  methods: {
    convertToLowerCase() {},
  },
  mounted() {
    fetch("http://127.0.0.1:8000/api/dengue-info/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.dengueInfoApplication = data))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
.width {
  width: 30px;
  height: 30px;
}
.hover-list:hover {
  background: rgb(226, 222, 222);
}
</style>
