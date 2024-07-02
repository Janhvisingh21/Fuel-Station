import mongoose from "mongoose";

export const dbconnect=async()=>{
    mongoose.connect("mongodb+srv://janhvisinghshrinet:Twinkle123@cluster0.epnczpn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true })
        .then(() => console.log("Mongodb started")) 
        .catch((err) => console.log(err))

}

