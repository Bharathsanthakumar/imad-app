var button=document.getElementById("1");

button.onClick = function()
{
    var request=new XMLHttpRequest();
    
    request.onreadystatechange =function()
    {
        if(request.readystate ===XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
                var counter=request.responsetext;
                var span=document.getElementById("2");
                span.innerHTML = counter.toString();
            }
        }
    };
    
    request.open('GET' , 'http://bharathsanthakumar99.imad.hasura-app.io/counter' ,true);
    request.send(null);
    
};