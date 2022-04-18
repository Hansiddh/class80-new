var friends_array=[];
function submit(){
    var display_array=[];
    for(var j=1;j<=4;j++){
     var names=document.getElementById("friend_"+j).value;  
     console.log(names);
     friends_array.push(names);
    }
    console.log(friends_array);
    var length_of_names=friends_array.length;
    console.log(length_of_names);
    for(var k=0;k<length_of_names;k++){
        display_array.push("name - "+friends_array[k]);
        console.log(display_array);
    }
    console.log(display_array)
    document.getElementById("display_name").innerHTML=display_array;
    var remove_commas=display_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_names_without_commas").innerHTML=remove_commas; 
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
    
}
function sorting(){
friends_array.sort();
console.log(friends_array);
document.getElementById("display_name").innerHTML=friends_array;
}
