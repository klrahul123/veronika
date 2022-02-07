const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/tchanel", { useNewUrlParser : true , useUnifiedTopology:true }).then ( ()=> console.log("connection successfull...")
).catch((err)=> console.log("error"));

const playlistSchema = new mongoose.Schema({
    name:{
        type:String
    },
    ctype: String,
    videos:Number,
    author: String,
    active: Boolean,
    Date:{
        type:Date,
        default:Date.now
    }
})

const Playlist =new mongoose.model("playlist", playlistSchema);

const reactPlaylist = new Playlist({
    name: "React Js",
    ctype:"Front-End",
    videos:80,
    author:"thapa technical",
    active:true
})
reactPlaylist.save();