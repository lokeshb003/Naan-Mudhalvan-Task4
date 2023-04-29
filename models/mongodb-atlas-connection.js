const CONNECTED_URL = process.env.CONNECTION_URL;

mongoose.set("strictQuery",false);

mongoose.connect(CONNECTED_URL).then(() =>
  app.listen(PORT, () =>
    console.log("Server is running in localhost:5000");
))
.catch((err) => console.log('Error! Not connected to the database!'));
