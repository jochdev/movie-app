new Vue({
  el: "#app",
  data: {
    title: "Api movies MODb",
    post:5,
    movieData:{},
    movieTitle:"Spider Man"
  },
  created() {
    this.getMovie();
  },
  methods: {
    async getPost() {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${this.post}`
      );
      const {userId} = data;
      const {data:dataUser }= await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      console.log(dataUser);
      this.datos = dataUser;
    },
    async getMovie(){
      const search = this.movieTitle.toLowerCase().replace(/ /g,"+");

      const data = await fetch(`http://www.omdbapi.com/?apikey=d7cdf2bb&t=${search}`);
      const jsonData = await data.json();
      console.log(jsonData);
      this.movieData = jsonData;
    },
  },
});
