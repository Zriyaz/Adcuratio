const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('DB Connceted');
  } catch (err) {
    console.error(err.message);
    // Exit prossess with failure
    process.exit(1);
  }
};

module.exports = connectDB;
