// version 1
var ans = prompt("(Versio 1) Are you there yet??");
while(ans !== "yes" && ans !== "Yeah" )
{
    var ans = prompt("Are you there yet??");
}
alert("YAY we made it.");

// version 2
var anss = prompt("(Versio 2) Are you there yet??");
while(anss.indexOf("yes") === -1)
{
    var anss = prompt("Are you there yet??");
}
alert("Yessssss!! we made it.");


