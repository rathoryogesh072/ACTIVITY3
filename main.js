let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595";
let request=require("request");
let cheerio=require("cheerio");
let allmatchobj=require("./allmatch")
request(url,cb);
function cb(err,response,html){
    if(err){
        console.log(err);
    }
    else {
        extractLink(html);
    }
}
function extractLink(html){
    let $=cheerio.load(html);
    let anchorElem=$("a[data-hover='View All Results']");
    let link=anchorElem.attr("href");
   // console.log(link)
    let fullink="https://www.espncricinfo.com/"+link;
   // console.log(fulllink);
    allmatchobj.getllmatchlink(fullink);
}
