const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log(`Database Connected Successfully`);
})
.catch((error)=>{
    console.log(error);
});
