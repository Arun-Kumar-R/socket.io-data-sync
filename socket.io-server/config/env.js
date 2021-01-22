const env = {
    apiPort: process.env.PORT || 4001,
    dbCon: 'mongodb+srv://arun:austino@resortdb.2smpc.mongodb.net/ResortDB?retryWrites=true&w=majority',
    Secret: "SUPERSECRET"
}

module.exports = env;
