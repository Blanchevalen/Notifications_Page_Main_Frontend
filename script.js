//--count the unread messages--//
const Unread=document.getElementsByClassName("unread-message");
const UNumber=Unread.length;
const Number=document.getElementById("unread_number");
Number.textContent=UNumber;



//Mark all message as read
const MarkButton = document.getElementById("mark_button");
const NewMark=document.getElementsByClassName("unread-circle");

MarkButton.addEventListener("click", function () {
    // Convert NodeList to Array
    const Unread = Array.from(document.getElementsByClassName("unread-message"));
    const UNumber = Unread.length;

    // Reverse iteration to avoid issues with changing indices
    for (let i = UNumber - 1; i >= 0; i--) {
        Unread[i].classList.remove("unread-message");
        console.log("Removed 'unread-message' class from element at index:", i);
        console.log(NewMark[i]);
        NewMark[i].style.visibility="hidden";
        

        Unread[i].classList.add("message");
        console.log("Added 'message' class to element at index:", i);
    }
    //Update the displayed count before marking as read
    UNumber2 = document.getElementsByClassName("unread-message").length
    Number.textContent=UNumber2;
});



