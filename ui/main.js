var button=document.getElementById('1');

button.onClick = function()
{
    var request=new XMLHttpRequest();
    
    request.onreadystatechange =function()
    {
        if(request.readystate === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
                var counter=request.responseText;
                var span=document.getElementById('2');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    request.open('GET' , 'http://bharathsanthakumar99.imad.hasura-app.io/counter' ,true);
    request.send(null);
    
};


var submit=document.getElementById('sub');

submit.onClick = function()
{
    var request=new XMLHttpRequest();
    
    request.onreadystatechange =function()
    {
        if(request.readystate === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
                var name=request.responseText;
                names=JSON.parse(name);
                var htmllist='';
                for(var i=0;i<names.length;i++)
                {
                    htmllist="<ul>"+names[i]+"</ul>";
                }
    
                var listt=document.getElementById('list');
                listt.innerHTML=htmllist;
            }
        }
    };
    
    var name=document.getElementById('name_input');
    var names=name.value;
    
    request.open('GET' , 'http://bharathsanthakumar99.imad.hasura-app.io/nameing?names=names' ,true);
    request.send(null);
    
    
    
};
