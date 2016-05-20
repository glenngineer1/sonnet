var content = document.getElementById("sonnet").innerHTML;
// console.log("content", content );

// console.log("output orphans:", content.indexOf("orphans"));

// console.log("output sonnet characters", content.length);

var newContent = content.replace("winter", "yuletide");
// console.log("new content yuletide", newContent);

var moreNewContent = content.replace(/the /g, "a large ");
// console.log("more new content a large", moreNewContent);

document.getElementById("sonnet").innerHTML = moreNewContent;

// console.log(moreNewContent);
