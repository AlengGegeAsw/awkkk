"use strict";
const pm2 = require('pm2')
const cron = require('node-cron');
const fs = require('fs');
let setting = JSON.parse(fs.readFileSync('./config.json'))
let _claim = JSON.parse(fs.readFileSync('./database/claim.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));

pm2.connect((error) => {
    if (error) {
      console.error(error)
    }

    pm2.start({ script: 'main.js' }, (error, apps) => {
      pm2.disconnect()
      if (error) {
        console.error(error)
      }
    })
    
        // Reset Database
        cron.schedule('0 0 * * *', () => {
            let reset = []
            _claim = reset
            glimit = reset
            limit = reset
            console.log('Hang tight, it\'s time to reset')
            fs.writeFileSync('./database/claim.json', JSON.stringify(_claim))
            fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
            fs.writeFileSync('./database/glimit.json', JSON.stringify(glimit))
			setting.bc = true
			fs.writeFileSync('./config.json',JSON.stringify(setting, null, 2))
            pm2.restart('main', (error) => {
             if (error) {
                console.error(error)
             }
            })

        },{ timezone: "Asia/Jakarta" })
})
