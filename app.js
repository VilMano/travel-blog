const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(port, () => {
	console.log(`Server started at port ${port}`);
});

