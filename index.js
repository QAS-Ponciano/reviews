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
const tr = require('timeago-reverse');
//Post request

//Easy Life Helper
app.post("/get_tp_easy", function(req,res){
	var data = req.body;
	main_tp('https://www.trustpilot.com/review/easylifehelper.com').then(function(reviews){
		res.send(reviews);
	});
})

app.post("/get_fb_easy", function(req,res){
	var data = req.body;
	main_fb('https://www.facebook.com/pg/Easy-Life-Helper-113016700077154/reviews/?ref=page_internal').then(function(reviews){
		res.send(reviews);
	});
})

app.post("/get_gr_easy", function(req,res){
	var data = req.body;
	main_gr('https://www.google.com/maps/place/EasyLifeHelper.com/@34.178412,-118.9272813,17z/data=!3m1!4b1!4m5!3m4!1s0x80e83b1dbc6ddc05:0xaa80959e17cc6a78!8m2!3d34.1784076!4d-118.9250926').then(function(reviews){
		res.send(reviews);
	});
})

//My Success.Team
app.post("/get_tp_mysuccess", function(req,res){
	var data = req.body;
	main_tp('https://www.trustpilot.com/review/mysuccess.team').then(function(reviews){
		res.send(reviews);
	});
})

app.post("/get_fb_mysuccess", function(req,res){
	var data = req.body;
	main_fb('https://www.facebook.com/pg/My-Success-Team-101654927853244/reviews/?ref=page_internal').then(function(reviews){
		res.send(reviews);
	});
})

app.post("/get_gr_mysuccess", function(req,res){
	var data = req.body;
	main_gr('https://www.google.com/maps/place/MySuccess.Team/@53.4431571,-2.2684968,17z/data=!3m1!4b1!4m5!3m4!1s0x487bada1e8a6e00f:0xfd6579e13033cac8!8m2!3d53.4431539!4d-2.2663081').then(function(reviews){
		res.send(reviews);
	});
})

//Coaching Business
app.post("/get_tp_coaching", function(req,res){
	var data = req.body;
	main_tp('https://www.trustpilot.com/review/coachingbusiness.org').then(function(reviews){
		res.send(reviews);
	});
})

app.post("/get_fb_coaching", function(req,res){
	var data = req.body;
	main_fb('https://www.facebook.com/pg/Top-Coach-Consulting-110555270308984/reviews/?ref=page_internal').then(function(reviews){
		res.send(reviews);
	});
})

app.post("/get_gr_coaching", function(req,res){
	var data = req.body;
	main_gr('https://www.google.com/maps/place/TopCoachConsulting.com/@34.4567462,-118.6285538,17z/data=!3m1!4b1!4m5!3m4!1s0x80c27fd25aeff271:0x5006c31c5a84598e!8m2!3d34.4567418!4d-118.6263651').then(function(reviews){
		res.send(reviews);
	});
})

//Visionary Site
app.post("/get_tp_visionary", function(req,res){
	var data = req.body;
	main_tp('https://www.trustpilot.com/review/visionarysite.org').then(function(reviews){
		res.send(reviews);
	});
})

app.post("/get_fb_visionary", function(req,res){
	var data = req.body;
	main_fb('https://www.facebook.com/pg/Visionary-Site-105289664168613/reviews/?ref=page_internal').then(function(reviews){
		res.send(reviews);
	});
})

app.post("/get_gr_visionary", function(req,res){
	var data = req.body;
	main_gr('https://www.google.com/maps/place/Go+Time+Genius+LLC/@33.8680137,-118.1880927,17z/data=!3m1!4b1!4m5!3m4!1s0x80dd33e4024254ab:0x252518ad7369e1c9!8m2!3d33.8680137!4d-118.185904').then(function(reviews){
		res.send(reviews);
	});
})

//OnlineSuccess
app.post("/get_tp_onlinesuccess", function(req,res){
	var data = req.body;
	main_tp('https://www.trustpilot.com/review/onlinesuccess.site').then(function(reviews){
		res.send(reviews);
	});
})

app.post("/get_fb_onlinesuccess", function(req,res){
	var data = req.body;
	main_fb('https://www.facebook.com/pg/Online-Success-Site-103448594339357/reviews/?ref=page_internal').then(function(reviews){
		res.send(reviews);
	});
})

app.post("/get_gr_onlinesuccess", function(req,res){
	var data = req.body;
	main_gr('https://www.google.com/maps/place/OnlineSuccess.site/@51.3715665,-0.4189158,17z/data=!3m1!4b1!4m5!3m4!1s0x487675246f2058eb:0x420a215be5410943!8m2!3d51.3715632!4d-0.4167271').then(function(reviews){
		res.send(reviews);
	});
})


//Support Service Pro
app.post("/get_tp_supportservice", function(req,res){
	var data = req.body;
	main_tp('https://www.trustpilot.com/review/supportservicepro.com').then(function(reviews){
		res.send(reviews);
	});
})

app.post("/get_fb_supportservice", function(req,res){
	var data = req.body;
	main_fb('https://www.facebook.com/pg/Support-Service-Pro-100722517968856/reviews/?ref=page_internal').then(function(reviews){
		res.send(reviews);
	});
})

app.post("/get_gr_supportservice", function(req,res){
	var data = req.body;
	main_gr('https://www.google.com/maps/place/SupportServicePro.com/@34.1560463,-118.7914989,17z/data=!3m1!4b1!4m5!3m4!1s0x80e825f0849b02a9:0xcb7cb8aaa3f5c886!8m2!3d34.1560419!4d-118.7893102').then(function(reviews){
		res.send(reviews);
	});
})

//Drive for Success
app.post("/get_tp_driveforsuccess", function(req,res){
	var data = req.body;
	main_tp('https://www.trustpilot.com/review/driveforsuccess.org').then(function(reviews){
		res.send(reviews);
	});
})

app.post("/get_fb_driveforsuccess", function(req,res){
	var data = req.body;
	main_fb('https://www.facebook.com/pg/Drive-For-Success-108670570493496/reviews/?ref=page_internal').then(function(reviews){
		res.send(reviews);
	});
})

app.post("/get_gr_driveforsuccess", function(req,res){
	var data = req.body;
	main_gr('https://www.google.com/maps/place/DriveForSuccess.org/@34.4587923,-118.541016,17z/data=!3m1!4b1!4m5!3m4!1s0x80c27d9d2d8df345:0xb09591c622bb521b!8m2!3d34.4587879!4d-118.5388273?hl=en-PH').then(function(reviews){
		res.send(reviews);
	});
})

//Top Coach Consulting
app.post("/get_tp_topcoach", function(req,res){
	var data = req.body;
	main_tp('https://www.trustpilot.com/review/topcoachconsulting.com').then(function(reviews){
		res.send(reviews);
	});
})

app.post("/get_fb_topcoach", function(req,res){
	var data = req.body;
	main_fb('https://www.facebook.com/pg/Top-Coach-Consulting-110555270308984/reviews/?ref=page_internal').then(function(reviews){
		res.send(reviews);
	});
})

app.post("/get_gr_topcoach", function(req,res){
	var data = req.body;
	main_gr('https://www.google.com/maps/place/TopCoachConsulting.com/@34.4567462,-118.6285538,17z/data=!3m1!4b1!4m5!3m4!1s0x80c27fd25aeff271:0x5006c31c5a84598e!8m2!3d34.4567418!4d-118.6263651').then(function(reviews){
		res.send(reviews);
	});
})

//Up Service Site
app.post("/get_tp_upservice", function(req,res){
	var data = req.body;
	main_tp('https://www.trustpilot.com/review/upservice.site').then(function(reviews){
		res.send(reviews);
	});
})

app.post("/get_fb_upservice", function(req,res){
	var data = req.body;
	main_fb('https://www.facebook.com/pg/Up-Service-Site-101023397970285/reviews/?ref=page_internal').then(function(reviews){
		res.send(reviews);
	});
})

app.post("/get_gr_upservice", function(req,res){
	var data = req.body;
	main_gr('https://www.google.com/maps/place/UpService.site/@34.639597,-118.2494832,17z/data=!4m8!1m2!2m1!1shttps:%2F%2Fupservice.site%2F!3m4!1s0x80c25d75fd613a1d:0x30c31b38693dbc4f!8m2!3d34.639597!4d-118.2472945?hl=en').then(function(reviews){
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

				//push all data to data array
				data.push({
					date : d_array.publishedDate,
					account_name : a_text,
					url : u_text[i],
					article : p_text
				});			
			}
			return data;	
			await browser.close();			
	}
	catch (e){
		console.log('error ', e);
	}
}

async function main_gr(url) {
	console.log("Fetching: " + url)
	var data = [];	
	try {
		const browser = await puppeteer.launch({ headless : true });
		const page = await browser.newPage();
		page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36');
		//needs to click on the see all reviews
		await page.goto(url,{ waitUntil: 'networkidle0',timeout: 3000000 });
		await Promise.all([
			page.click('.jqnFjrOWMVU__button'),
			page.waitForNavigation({ waitUntil: 'networkidle0' }),
		]);		
		await page.waitForSelector('.section-layout');
		const sections = await page.$$('.section-review');
		for(i = 0; i < sections.length; i++){
			//get date
			const d = await page.$$('.section-review-publish-date');
			var d_ = await (await d[i].getProperty('innerText')).jsonValue();
			const d_text = tr.parse(d_.toString());
			//get account name
			const a = await page.$$('.section-review-titles a .section-review-title');
			const a_text = await (await a[i].getProperty('innerText')).jsonValue();

			//get url
			const selector = '.section-review-titles > a'
			await page.waitForSelector(selector);
			const u_text = await page.$$eval(selector, am => am.filter(e => e.href).map(e => e.href))
			
			//get article text
			const p = await page.$$('.section-review-review-content');		
			const p_text = await (await p[i].getProperty('innerText')).jsonValue();

			//push all data to data array
			data.push({
				date : d_text,
				account_name : a_text,
				url : u_text[i],
				article : p_text
			});			
		}
		return data;
		await browser.close();			
	}
	catch (e){
		console.log('error ', e);
	}
}

//main_fb('https://www.facebook.com/Easy-Life-Helper-113016700077154/reviews/?ref=page_internal');

async function main_fb(url) {
	console.log("Fetching: " + url)
	var data = [];
	try {
		const browser = await puppeteer.launch({ headless : true });
		const page = await browser.newPage();
		page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36');
		//needs to click on the see all reviews
		await page.goto(url,{ waitUntil: 'networkidle0',timeout: 3000000 });
		await autoScroll(page);
		await page.waitForSelector('#recommendations_tab_main_feed');
		const sections = await page.$$('.userContentWrapper');
		for(i = 0; i < sections.length; i++){

			//get date
			const d = await page.$$eval(".fsm > ._5pcq > abbr", el => el.map(x => x.getAttribute("data-utime")));
			const d_text = parseInt(d[i]) * 1000;
			//get account name
			const a = await page.$$('.fwb');
			const a_text = await (await a[i].getProperty('textContent')).jsonValue();

			//get url
			const selector = '.fsm > a'
			await page.waitForSelector(selector);
			const u_text = await page.$$eval(selector, am => am.filter(e => e.href).map(e => e.href))

			//get article text
			const p = await page.$$('.userContent');		
			const p_text = await (await p[i].getProperty('textContent')).jsonValue();		
			//push all data to data array
			data.push({
				date : d_text,
				account_name : a_text,
				url : u_text[i],
				article : p_text
			});			
		}
		return data;
		await browser.close();				
	}
	catch (e){
		console.log('error ', e);
	}
}


server.listen(3000, function() {
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


