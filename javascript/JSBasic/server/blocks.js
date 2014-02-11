var v1=1;

var a=1;
{
    var b=2;
    {
        var c=3;
        var v1=2;
        {
            console.log("Inside block");
            console.log(v1);
            console.log(c);

        }
    }
}
console.log("Global");
console.log(v1);
console.log(c);
