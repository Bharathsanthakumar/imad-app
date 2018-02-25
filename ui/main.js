var button=document.getElementById("1");

button.onClick = function()
{
    var request=new XMLHttpRequest();
    
    request.onreadystatechange =function()
    {
        if(request.readystate ===XMLHttpRequestDONE)
        {
            if(request.readystate === 200)
            {
                var counter=request.responsetext;
                var span=document.getElementById("2");
                span.innerHTML = counter+1;
            }
        }
    };
    
};