const bcryptjs = require('bcryptjs')

bcryptjs.compare('secret154','$2a$10$LHVCin0qts9ojzwnvmKuFO/RFejjhE9.SNUUnNm6wo/xSSdZcgFIa')
    .then((result)=>{
        console.log(result)
    })

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc3Y2EyNWZkNDFjNTE4MjBiOTg2ZTIiLCJ1c2VybmFtZSI6InVzZXIxNTA0MjE0IiwiY3JlYXRlZEF0IjoxNjE4NDYzNTM1NDM2LCJpYXQiOjE2MTg0NjM1MzV9.9V6l0MEJJmLuo7aNqMPlCMczTB0ZKrv3LQO_W5_v17Q