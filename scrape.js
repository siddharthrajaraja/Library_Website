const axios= require('axios');
const cheerio =require('cheerio')
var request = require('request');
const url="http://10.0.0.12/library/link.html"

request(url,(err,response,html)=>{
    if(!err){
        var $ = cheerio.load(html);
        // This is to scrape table -- >
     // console.log($('table').length)
    // console.log($('ul.tab_list>li').length)

    databases=[]
    for(var i=0;i<$('ul.tab_list>li').length;i++){
        databases.push($('ul.tab_list>li').eq(i).text().trim())
    }
    console.log( "Databases are: ", databases) 
  
    
        $('.tab_content').each((i,el) => {
            
            //console.log($(el).find('table').html());
            console.log(i)
//            console.log($(el).find('tr').length)
        header=0    
        $(el).find('tr').each((j,fl) =>{
            Headers_in_table=[]
            if(header==0)
                {
                    arr=$(fl).text().split("\n"); header++;
                    
                    for(var i=1;i<arr.length-1;i++){
                            Headers_in_table.push(String(arr[i]).trim())
                    }
                    console.log(Headers_in_table);
                    console.log("End of header")
                }
            else{
                $(fl).find('td').each((k,gl) => {
                    Links=[]
                    Images=[]

                    if($(gl).has('a')){
                        $(gl).find('a').each((zz,linkss)=>{
                            console.log($(linkss).attr('href'))
                            console.log("Links ended")
                    
                        })
                    }
                    if ($(gl).has('img')){
                        $(gl).find('img').each((zz,imagess)=>{
                            console.log($(imagess).attr('src'))
                            console.log("Image ended")
                    
                        })
                    

                    }
                    //console.log($(gl).text().split())
                })

            }
            
            console.log("ends one row ")
            
            /*$(fl).find('th').each((k,gl) => {
                console.log($(gl).text().split())
            })*/
            
        })    

        /*$(el).find('tr').each((j,fl) =>{
                    //console.log($(fl).text())
                    $(fl).find('td').each((k,gl) => {
                        console.log($(gl).text().split())
                    })
            })*/
        });


  /*    //All table headers :  ------------------
      for(var i=0;i<$('th').length;i++){
          console.log($('th').eq(i).text())
      } 
*/
     //  Collection names  ---------------------
     
//         for(var i=0;i<5;i++){
// //            console.log($('ul.tab_list>li').eq(i).text());
//             console.log(i,($('table>tbody>tr').eq(i).text()).split("\n"));
//             databases.push(($('table>tbody>tr').eq(i).text()).split("\n"));
//       }
     
      
    //   console.log($('th').text().split(" "))
    }
})

