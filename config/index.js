var configValues = require("./config");

module.exports = {
  getDbConnectionString: function () {
    return (
      "mongodb+srv://" +
      configValues.uname +
      ":" +
      configValues.pwd +
      "@cluster0.id9uqmf.mongodb.net/?retryWrites=true&w=majority"
    );
  },
};

// {
//   /* mongodb+srv://test:<passwordformongo>@cluster0.id9uqmf.mongodb.net/?retryWrites=true&w=majority" */
// }
