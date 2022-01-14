const app = require("./app.js");
const dotenv = require("dotenv");

// Config

dotenv.config({path:"./config/config.env"});


// Connect Mongodb
mongoose.connect(process.env.DB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then((data) => {
    console.log(`Mongodb is connected with server successfully ${data.connection.host}`);
}).catch((err) => {
    console.log(err);
})


app.listen(process.env.PORT, ()=> {
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
} );