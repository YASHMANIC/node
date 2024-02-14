const figlet = require('figlet');

figlet('YASH MANIC !',function(err,data)
{
    if(err)
    {
        console.log("SOMETHING FUCKED UP");
        console.dir(err);
        return ;
    }
    else{
        console.log(data);
    }
})