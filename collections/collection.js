import { Selector } from 'testcafe'

fixture `collection web automation testing using testcafe`
.page(`https://mvp.uangteman.com/`)

//login
test ('Login Collection Web', async t => {
await t
.setTestSpeed(0.3)
.click(Selector('#username'))
.typeText('#username','andrepangestu+col@uangteman.com')
.typeText('#Password', 'UTEmployeeP@ssw0rd')
.click('#root > div > div.css-1y8l2jl > form > div.css-5wh8sj > div:nth-child(1)')

.wait(5000)
})