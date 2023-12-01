const displayDates = document.querySelector('#dates-of-week');
const DATE = new Date();
const CURRENTDATE = DATE.toLocaleString('en-us', {month: 'short', day: '2-digit'});

DATE.setDate(DATE.getDate()+6)
const WEEKDATE = (DATE).toLocaleString('en-us', {month: 'short', day: '2-digit'});

console.log(CURRENTDATE, WEEKDATE);

displayDates.textContent = `${CURRENTDATE} - ${WEEKDATE}`;

const revenue = document.querySelector('#revenue');
revenue.textContent = "$ " + (Math.round(Math.random()*1000000)/100).toLocaleString();