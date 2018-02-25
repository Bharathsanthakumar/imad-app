var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
'about':{
    title:'Bharath | about',
    heading:'Bharath',
    content:
            `<div class="container">
            <p> I am Bharath Santhakumar,</p>
            <p>S/o Santhakumar</p>
            <p>I am currently learning the basics of internet application and javascript</p>
            <p>This is all about me :-/</p>
            </div>`
    
},

'education':{
    title:'Bharath | education',
    heading:'Bharath Santhakumar',
    content:
            `<div class="container">
                <table>
        	        <tbody>
                	    <tr>
                		<th>SI.no</th>
                		<th>Institution</th>
                		</tr>
                		<tr>
                		<td>1</td>
                		<td>Ayira vaisya Secondary school</td>
                		</tr>
                		<tr>
                		<td>2</td>
                		<td>Don Bosco Matriculation School</td>
                		</tr>
                		<tr>
                		<td>3</td>
                		<td>Srv matric higher secondary school</td>
                		</tr>
                		<tr>
                		<td>4</td>
                		<td>Sri manaukula vinayagar enginnering college</td>
                		</tr>
        		    </tbody>
                 </table>
            </div>`
}
};

function templates(data)
{
    var title=data.title;
    var headings=data.heading;
    var content=data.content;
    var htmltemplate=`<!DOCTYPE html>
                        <html>
                            <head>
                                <title>${title}</title>
                                <link href="/ui/style.css" rel="stylesheet" />
                                <meta name="viewport" content="width=device-width,initial-scale=1" />
                                 <link href="/ui/madi.png" rel="shortcut icon" />
                                
                            </head>
                            <body>
                                ${content}
                            </body>
                        </html>`;
    return (htmltemplate);                    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter',function (req,res){
    counter = counter + 1;
    res.send(counter.toString());
});

var names =[];

app.get('/naming' , function(req,res) {
   var named=req.query.names;
   names.push(named);
   res.send(JSON.stringify(names));
    
});


app.get('/pic', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'pic.jpg'));
});

app.get('/:articlename', function (req, res) {
  articlename=req.params.articlename;
  res.send(templates(articles[articlename]));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
