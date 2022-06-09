<template>
  <h1 class="text-center">Create new Case</h1>

  <div class="container w-50 border border-radius p-4">
    <form @submit="postData">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          v-model="name"
          id="country"
        />
      </div>
      <div class="form-group">
        <label for="lName">Last Name</label>
        <input type="text" class="form-control" v-model="lName" id="month" />
      </div>
      <div class="form-group">
        <label for="deaths">Deaths</label>
        <input type="text" class="form-control" v-model="deaths" id="deaths" />
      </div>
      <div class="form-group">
        <label for="recovered">Recovered</label>
        <input
          type="text"
          class="form-control"
          v-model="recovered"
          id="recovered"
        />
      </div>
      <div class="form-group">
        <label for="month">Month</label>
        <input
          type="text"
          class="form-control"
          v-model="month"
          id="active_case"
        />
      </div>

      <button type="submit" class="btn btn-primary mt-4">Create</button>
    </form>
  </div>

  <form></form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      lName: "",
      deaths: null,
      recovered: null,
      month: null,
    };
  },
  methods: {
    postData(e) {
      e.preventDefault();

      const postData = {
        name: this.name,
        lName: this.lName,
        deaths: this.deaths,
        recovered: this.recovered,
        month: this.month,
      };
      console.log(postData);

      fetch("http://127.0.0.1:8000/api/dengue-info/store", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      })
        .then((response) => {
          if (response.status === 200) {
            this.$router.push({ path: "/dengue-info" });
          }
        })
        .catch((err) => console.log(err));
    },
    mounted() {
      this.postData();
    },
  },
};
</script>

<style></style>
