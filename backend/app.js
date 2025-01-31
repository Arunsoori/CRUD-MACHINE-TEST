const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const databaseconnetion = require('./config/dbconnection')
const cors = require("cors")

const authRoute = require('./routes/authRoute');
const adminRoute = require('./routes/AdminRoute')

const app = express();
app.use(cookieParser());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE"],
    credentials: true
  })
)

databaseconnetion.dbConnect()
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', authRoute);
app.use('/admin', adminRoute)


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });


app.listen(4000, () => {
  console.log("server starts on port 4000");

})
module.exports = app;
