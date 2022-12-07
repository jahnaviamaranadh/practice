let employees = [{"id":1,"name":"Falkner","email":"frenish0@wikipedia.org","company":"Female","gender":"Male"},
{"id":2,"name":"Tristan","email":"tielden1@vk.com","company":"Male","gender":"Male"},
{"id":3,"name":"Orson","email":"odongall2@java.com","company":"Female","gender":"Bigender"},
{"id":4,"name":"Georgena","email":"greuben3@geocities.com","company":"Male","gender":"Female"},
{"id":5,"name":"Timotheus","email":"tlewknor4@mail.ru","company":"Male","gender":"Male"},
{"id":6,"name":"Sydney","email":"stackley5@printfriendly.com","company":"Female","gender":"Male"},
{"id":7,"name":"Daryl","email":"dturl6@biblegateway.com","company":"Male","gender":"Male"},
{"id":8,"name":"Jason","email":"jpedgrift7@seesaa.net","company":"Male","gender":"Male"},
{"id":9,"name":"Ellsworth","email":"edegg8@cdc.gov","company":"Female","gender":"Male"},
{"id":10,"name":"Michel","email":"mbeamiss9@cyberchimps.com","company":"Female","gender":"Male"},
{"id":11,"name":"Jabez","email":"jissacofa@smh.com.au","company":"Female","gender":"Male"},
{"id":12,"name":"Charla","email":"cgroocockb@tumblr.com","company":"Female","gender":"Female"},
{"id":13,"name":"Kelsey","email":"koferc@dyndns.org","company":"Male","gender":"Male"},
{"id":14,"name":"Garek","email":"gwhitleyd@chron.com","company":"Male","gender":"Male"},
{"id":15,"name":"Stillmann","email":"sghente@creativecommons.org","company":"Female","gender":"Male"},
{"id":16,"name":"Stanislas","email":"smccarverf@spotify.com","company":"Female","gender":"Male"},
{"id":17,"name":"Gard","email":"ghattamg@unblog.fr","company":"Male","gender":"Male"},
{"id":18,"name":"Stearn","email":"sbottrellh@answers.com","company":"Female","gender":"Male"},
{"id":19,"name":"Ruthy","email":"raristidei@google.cn","company":"Male","gender":"Female"},
{"id":20,"name":"Sherwynd","email":"spadulaj@adobe.com","company":"Male","gender":"Male"},
{"id":21,"name":"Charlean","email":"cbalcombek@list-manage.com","company":"Male","gender":"Female"},
{"id":22,"name":"Sholom","email":"stattersilll@amazon.de","company":"Male","gender":"Male"},
{"id":23,"name":"Wallace","email":"wrosencwaigm@dion.ne.jp","company":"Female","gender":"Male"},
{"id":24,"name":"Kendal","email":"kkingettn@ameblo.jp","company":"Male","gender":"Male"},
{"id":25,"name":"Othilie","email":"omcnalleyo@edublogs.org","company":"Male","gender":"Female"},
{"id":26,"name":"Davine","email":"dlagop@woothemes.com","company":"Female","gender":"Female"},
{"id":27,"name":"Jada","email":"jbrumbyq@rediff.com","company":"Female","gender":"Female"},
{"id":28,"name":"Germaine","email":"gveitchr@oracle.com","company":"Female","gender":"Genderfluid"},
{"id":29,"name":"Audrie","email":"amcasters@cpanel.net","company":"Male","gender":"Female"},
{"id":30,"name":"Lem","email":"lrodgiert@geocities.com","company":"Male","gender":"Male"},
{"id":31,"name":"Cora","email":"cgatsbyu@kickstarter.com","company":"Male","gender":"Female"},
{"id":32,"name":"Shana","email":"smcleesev@taobao.com","company":"Agender","gender":"Female"},
{"id":33,"name":"Lanie","email":"lfossordw@bizjournals.com","company":"Female","gender":"Male"},
{"id":34,"name":"Rosaline","email":"rrowlsonx@ezinearticles.com","company":"Female","gender":"Female"},
{"id":35,"name":"Travers","email":"tmasurely@facebook.com","company":"Genderfluid","gender":"Male"},
{"id":36,"name":"Rochell","email":"rwankz@cnbc.com","company":"Male","gender":"Female"},
{"id":37,"name":"Ardene","email":"abapty10@nytimes.com","company":"Female","gender":"Female"},
{"id":38,"name":"Eloisa","email":"ekirkpatrick11@amazon.de","company":"Female","gender":"Female"},
{"id":39,"name":"Tyrus","email":"tagerskow12@reddit.com","company":"Female","gender":"Male"},
{"id":40,"name":"Wyndham","email":"wever13@shareasale.com","company":"Male","gender":"Male"},
{"id":41,"name":"Henrik","email":"hbatey14@stanford.edu","company":"Female","gender":"Male"},
{"id":42,"name":"Sibbie","email":"sclouston15@scribd.com","company":"Female","gender":"Female"},
{"id":43,"name":"Nyssa","email":"ndjekovic16@webs.com","company":"Female","gender":"Female"},
{"id":44,"name":"Roxane","email":"rverdie17@soup.io","company":"Female","gender":"Female"},
{"id":45,"name":"Patten","email":"pwinslade18@sciencedaily.com","company":"Male","gender":"Polygender"},
{"id":46,"name":"Waylin","email":"wadin19@apache.org","company":"Female","gender":"Male"},
{"id":47,"name":"Benjamin","email":"bokenden1a@blinklist.com","company":"Male","gender":"Male"},
{"id":48,"name":"Egon","email":"ehawker1b@mayoclinic.com","company":"Male","gender":"Male"},
{"id":49,"name":"Imogene","email":"idovydenas1c@a8.net","company":"Male","gender":"Female"},
{"id":50,"name":"Pacorro","email":"pkalberer1d@booking.com","company":"Female","gender":"Male"}]
function displayData() {
 let rows = "";
 for (emp of employees) {
   rows =
     rows +
     `<tr> 
           <td> ${emp.id}</td> 
           <td> ${emp.name}</td> 
           <td> ${emp.email}</td> 
     </tr>`;
 }
 document.getElementById("abc").innerHTML = rows;
}