const express = require('express');
const router = express.Router();
const axios = require('axios');
const getFile = require('../utils/getFile');

const TEST_DATE = '03-21-2020';
// date must be in MM-DD-YYYY format
const getUrl = date => (
  `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${date}.csv`
);

const URL = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-31-2020.csv';

getFile(URL);

const getData = date => {
};


/* GET corona virus data. */
router.get('/', function(req, res, next) {
  res.render('covid', { title: 'Covid19 Data', data: { name: 'Foo' } });
});

module.exports = router;
