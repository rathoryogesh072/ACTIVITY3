let request=require("request");
let cheerio=require("cheerio");
let processmatchobj=require("./scorecard");
function getllmatchlink(fullink){
    request(fullink,function(err,response,html){
        if(err){
            console.log(err);
        }
        else{
            extractallLinks(html);
        }
    })
}
function extractallLinks(html){
    let $=cheerio.load(html);
    let scorecardElems=$("a[data-hover='Scorecard']");
    for(let i=0;i<scorecardElems.length;i++){
        let link=$(scorecardElems[i]).attr("href");
        let puramatchlink="https://www.espncricinfo.com"+link;
        console.log(puramatchlink);
        processmatchobj.processmatch(puramatchlink);
    }

}
module.exports={
    getllmatchlink:getllmatchlink
}