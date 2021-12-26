const cors = require('cors');
const axios = require('axios');
const puppeteer = require('puppeteer');
const imageToBase64 = require('image-to-base64');
const express = require('express')
const app = express()
app.use(cors())
app.get('/api/weburl' , (req , res) =>{
    let url = req.query.url;
    
    async function scrape(url){
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        try{
            await page.goto(url);
        }
        catch(err){
            res.send(['https://i2.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'])
            return;
        }
        
        const result = await page.evaluate(()=>{
            let imgFromWeb = document.querySelectorAll("img");
            const imgList = [...imgFromWeb]
            return imgList.map(img=>{
                if(img.width > 100){
                    return img.src;
                }
            })
        })
        // console.log(result);
        res.send(result)
        // await page.setViewport({
        //     width: 1024,
        //     height: 768,
        //     deviceScaleFactor: 1,
        //   });

        // await page.screenshot({ path: 'example.png' });
        
        // try{
        //     const img64 = await imageToBase64('example.png');
        //     res.send(img64)
        // }
        // catch(err){
        //     res.send(err)
        // }
        await browser.close();
    }
    if(url !== ''){
        scrape(url);
    }
    
})

app.listen(4000, () => {
    console.log('Start server at port 4000.')
  })