"use strict";

var scrollMsg = " Winter Flex 3-Day Trial Going On NOW!! ~ WE WANT TO FLEX WITH YOU! ~ GIFT A MEMBERSHIP PACKAGE FOR LOVED ONE! ~";
var beginPos = 0;
function scrollingMsg(){
    document.msgForm.scrollingMsg.value = scrollMsg.substring(beginPos,scrollMsg.length) + scrollMsg.substring(0,beginPos);
    beginPos = beginPos + 1;
    if (beginPos > scrollMsg.length){
        beginPos = 0;
    }
    window.setTimeout("scrollingMsg()",200);
}