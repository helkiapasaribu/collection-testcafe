import { Selector } from 'testcafe'

fixture `collection web automation testing using testcafe`
.page(`https://mvp.uangteman.com/`)

const selectType = Selector('#root > div.css-1sswp3r > div.css-5wh8sj > div.css-17jkr29 > div > div.css-6wbjhi > div > form > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > div > div > div')
const li = selectType.find('li')

const selectCoordinator = Selector('#root > div.css-1sswp3r > div.css-5wh8sj > div.css-17jkr29 > div > div.css-6wbjhi > div > form > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(1) > div > div > div')
//const li = selectCoordinator.find('li')

const selectBuckets = Selector ('#root > div.css-1sswp3r > div.css-5wh8sj > div.css-17jkr29 > div > div.css-6wbjhi > div > form > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(3) > div > div')

const selectManager = Selector ('#root > div.css-1sswp3r > div.css-5wh8sj > div.css-17jkr29 > div > div.css-6wbjhi > div > form > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(3) > div > div > div')

const selectProvince = Selector('#root > div.css-1sswp3r > div.css-5wh8sj > div.css-17jkr29 > div > div.css-6wbjhi > div > form > div:nth-child(2) > div > div > div > div > div > div')

const selectCity = Selector ('#root > div.css-1sswp3r > div.css-5wh8sj > div.css-17jkr29 > div > div.css-6wbjhi > div > form > div:nth-child(3) > div > div:nth-child(1) > div > div > div > div')

const selectDistrict = Selector ('#root > div.css-1sswp3r > div.css-5wh8sj > div.css-17jkr29 > div > div.css-6wbjhi > div > form > div:nth-child(3) > div > div:nth-child(2) > div > div > div > div')

const selectSubDistrict = Selector ('#root > div.css-1sswp3r > div.css-5wh8sj > div.css-17jkr29 > div > div.css-6wbjhi > div > form > div:nth-child(3) > div > div:nth-child(2) > div.css-1uhw9yh > div > div > div > div > div')

const collectorRow = Selector ('.css-7oakmz').withExactText('Han Ji Sung')
const switchLabel = Selector ('.css-15nvt7e')

test ('Login Collection Web', async t => { 
await t
.setTestSpeed(0.1)
.click(Selector('#username'))
.typeText('#username','andrepangestu+col@uangteman.com')
.typeText('#Password', 'UTEmployeeP@ssw0rd')
.click('#root > div > div.css-1y8l2jl > form > div.css-5wh8sj > div:nth-child(1)')

//menu collector management
.click(Selector('#root > div.css-1qy6pkk > div.css-1n58lj > div:nth-child(6) > div.css-1h5x3dy > div > div'))
.click(Selector('#root > div.css-1qy6pkk > div.css-1n58lj > div:nth-child(6) > div.css-ewph6f > a:nth-child(1)'))

/*
//add collector
.click(Selector('#root > div.css-1sswp3r > div.css-1r4num3 > div.css-1is6fqw > div.css-1n58lj > button'))

//search collector 
.click('.css-8yptme')
//.typeText('.css-8yptme','Lee Know')
//.pressKey("enter")
//.pressKey('ctrl+a delete')
.typeText('.css-8yptme','suho')
.pressKey("enter")
//.click(Selector('#root > div.css-1sswp3r > div.css-5wh8sj > div.css-1s7by5e > div > div > div > div.css-17prsgz > div.css-srl1vj > div > input'))
.click('.css-wp6ets')

//type collector
.click(selectType)
.click('#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > div > div > div > div > input')
.typeText('#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > div > div > div > div > input','External Collector')
.click('#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(4)')
//.expect(selectType.value).eql('External Collector')

//Coordinator
.click(selectCoordinator)
.click('#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(4)')
//.expect(selectCoordinator.value).eql('Ninik Nur')

//bucket
.click(selectBuckets)
.click('#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(3)')

//Manager
.click(selectManager)
.click('#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(5)')

//Description
.typeText('#root > div.css-1sswp3r > div.css-5wh8sj > div.css-17jkr29 > div > div.css-6wbjhi > div > form > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(5) > div > div > input', 'makan')

//Maximum of Allocation
.typeText('#root > div.css-1sswp3r > div.css-5wh8sj > div.css-17jkr29 > div > div.css-6wbjhi > div > form > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(5) > div > div > input', '3')

//Province
.click(selectProvince)
//.click('#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > div > div > div > div > input')
//.typeText('#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > div > div > div > div > input','DKI Jakarta')
.click('#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(8)')

//City
.click(selectCity)
.click('#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(7)')

//District
.click(selectDistrict)
.click('#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(8)')

//SubDistrict
.click(selectSubDistrict)
.click('#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(6)')

//submit
.click('#root > div.css-1sswp3r > div.css-5wh8sj > div.css-17jkr29 > div > div.css-6wbjhi > div > form > div.css-1o2zxqo > button')
.click('.css-1l6sr7v')
.click('.css-sga6tn')
*/

//switch label
if (await collectorRow.exists && switchLabel === 'Active') {
    await t
    .click('.toggle--off')
    .click('.css-1l6sr7v')
    .click('.css-sga6tn')
    
} else {
    await t
    .click('#root > div.css-1sswp3r > table > tbody > tr:nth-child(10) > td:nth-child(10) > div > div > label')
    .click('.css-1l6sr7v')
    .click('.css-sga6tn')
}
//await t
//.click('#root > div.css-1sswp3r > div.open.css-1rwjj1n > div.modal-body.css-e17q4p > div.css-k2f2ku > button')
//.expect(collectorRow.value).contains('Felix Lee')
//.click(collectorRow)
/*.click('.toggle--off')
.click('.css-1l6sr7v')
.click('.css-sga6tn')*/
await t
.debug()
//.wait(5000)
//.openWindow('https://mvp.uangteman.com/')
})