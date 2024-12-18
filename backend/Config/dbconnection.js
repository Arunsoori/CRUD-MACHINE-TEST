const mongoose = require("mongoose")
mongoose.set('strictQuery', true)

module.exports = {

    dbConnect: async () => {
        const uri = process.env.MONGO_URI || "mongodb+srv://arunsoorics:TDJb2IOh8DGNBcMe@cluster0.5tqzb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        try {
            await mongoose.connect(uri).then(() => {
                console.log("db connected succefully")
            })
        } catch (err) {
            console.log(err)
        }
    },


}