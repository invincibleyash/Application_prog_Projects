var objects =[
    ["xyz","?","1961"],
    ["abc","?","1962"],
    ["pqr","?","1966"],
    ["Dr. ghost","?","1983"],
    ["mno","?","1969"],
];
function bindobjects(objects){
    var row='<tr><th>sno.</th><th>title</th><th>year</th> </tr>';
    objects.forEach(function(objects,i){
        row+= '<tr><td>'+objects[0]+'</td><td>'+ objects[1] +'</td><td>'+ objects[2]+'</td><tr>';
    } )
    document.getElementById("tbl").innerHTML=row;
}

bindobjects(objects);
function addobject()
{
    var data=document.getElementById("data").value;
    var idr=document.getElementById("idr").value;
    var idc=document.getElementById("idc").value;
    objects[idr][idc]=data;
    bindobjects(objects);
    clearform();
}
function deleteobject()
{
    var data=" ";
    var idr=document.getElementById("idr").value;
    var idc=document.getElementById("idc").value;
    objects[idr][idc]=data;
    bindobjects(objects);
    clearform();
}
document.getElementById("btn-add").addEventListener("click",addobject);
document.getElementById("btn-delete").addEventListener("click",deleteobject);
function clearform()
{   
    document.getElementById("data").value="";
    document.getElementById("idr").value="";
    document.getElementById("idc").value="";
    

}
bindobjects(objects);