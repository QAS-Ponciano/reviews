var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./data.db');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const puppeteer = require('puppeteer');

//Main function to run on async
//main_tp();

//database of trustpilot reviews

//Post request
app.post("/get_tp_easy", function(req,res){
	var data = req.body;
	main_tp('https://www.trustpilot.com/review/coachingbusiness.org').then(function(reviews){
		res.send(reviews);
	});
})

app.post("/get_tp_mysuccess", function(req,res){
	var data = req.body;
	main_tp('https://www.trustpilot.com/review/mysuccess.team').then(function(reviews){
		res.send(reviews);
	});
})

app.post("/get_tp_coaching", function(req,res){
	var data = req.body;
	main_tp('https://www.trustpilot.com/review/coachingbusiness.org').then(function(reviews){
		res.send(reviews);
	});
})


app.post("/get_tp_visionary", function(req,res){
	var data = req.body;
	main_tp('https://www.trustpilot.com/review/visionarysite.org').then(function(reviews){
		res.send(reviews);
	});
})

app.post("/get_tp_onlinesuccess", function(req,res){
	var data = req.body;
	main_tp('https://www.trustpilot.com/review/onlinesuccess.site').then(function(reviews){
		res.send(reviews);
	});
})

app.post("/get_tp_supportservice", function(req,res){
	var data = req.body;
	main_tp('https://www.trustpilot.com/review/supportservicepro.com').then(function(reviews){
		res.send(reviews);
	});
})

app.post("/get_tp_driveforsuccess", function(req,res){
	var data = req.body;
	main_tp('https://www.trustpilot.com/review/driveforsuccess.org').then(function(reviews){
		res.send(reviews);
	});
})

app.post("/get_tp_topcoach", function(req,res){
	var data = req.body;
	main_tp('https://www.trustpilot.com/review/topcoachconsulting.com').then(function(reviews){
		res.send(reviews);
	});
})


app.post("/get_tp_upservice", function(req,res){
	var data = req.body;
	main_tp('https://www.trustpilot.com/review/upservice.site').then(function(reviews){
		res.send(reviews);
	});
})


async function main_tp(url) {
	console.log("Fetching: " + url)
	var data = [];
	try {
			const browser = await puppeteer.launch({ headless : true });
			const page = await browser.newPage();
			page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36');
			await page.goto(url,{ waitUntil: 'networkidle0',timeout: 3000000 });
			await page.waitForSelector('.review-list');
			const sections = await page.$$('.review-card');
			for(i = 0; i < sections.length; i++){
				//get date
				const d = await page.$$('.review-content-header__dates script');
				const d_text = await (await d[i].getProperty('innerText')).jsonValue();
				const d_array = JSON.parse(d_text);

				//get account name
				const a = await page.$$('.consumer-information__name');
				const a_text = await (await a[i].getProperty('innerText')).jsonValue();

				//get url
				const selector = '.review-content__body a'
				await page.waitForSelector(selector);
				const u_text = await page.$$eval(selector, am => am.filter(e => e.href).map(e => e.href))
	
				//get article text
				const p = await page.$$('.review-content__body p');
				const p_text = await (await p[i].getProperty('innerText')).jsonValue();

				data.push({
					date : d_array.publishedDate,
					account_name : a_text,
					url : u_text[i],
					article : p_text
				});			
			}
			return data;			
	}
	catch (e){
		console.log('error ', e);
	}
}

async function main_gr() {
	try {

		const browser = await puppeteer.launch({ headless : false });
		const page = await browser.newPage();
		page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36');
		//needs to click on the see all reviews
		await page.goto('https://www.google.com/maps/place/Mimosa+Golf+Course/@15.1679212,120.4901189,13z/data=!4m8!1m2!2m1!1shbo!3m4!1s0x339692aff557c85f:0x2962212e971ab509!8m2!3d15.1855533!4d120.5173588',{ waitUntil: 'networkidle0',timeout: 3000000 });
		await page.waitForSelector('.section-layout');
		const sections = await page.$$('.section-review');
		console.log(sections.length)
		/*		
		for(i = 0; i < sections.length; i++){
			const value = await (await sections[i].getProperty('innerText')).jsonValue();
			var x = i + 1;
			console.log(x + " " + value);				
		}
		*/
	}
	catch (e){
		console.log('error ', e);
	}
}

async function main_fb() {
	try {

		const browser = await puppeteer.launch({ headless : false });
		const page = await browser.newPage();
		page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36');
		//needs to click on the see all reviews
		await page.goto('https://www.facebook.com/pg/Support-Service-Pro-100722517968856/reviews/?ref=page_internal',{ waitUntil: 'networkidle0',timeout: 3000000 });
		await page.waitForSelector('#recommendations_tab_main_feed');
		const sections = await page.$$('#own_review_container');
		console.log(sections.length)
		/*		
		for(i = 0; i < sections.length; i++){
			const value = await (await sections[i].getProperty('innerText')).jsonValue();
			var x = i + 1;
			console.log(x + " " + value);				
		}
		*/
	}
	catch (e){
		console.log('error ', e);
	}
}


server.listen(80, function() {
  console.log(" [200] " + "Node Status - running");
});

async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 200);
        });
    });
}