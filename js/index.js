var BookNameInput = document.getElementById('BookName');
var BookUrLInput = document.getElementById('BookUrL');

var BookMarkContainer = [];

/*local storge */
if (localStorage.getItem("Bookcontain") !== null) {
    BookMarkContainer = JSON.parse(localStorage.getItem("Bookcontain"));
    DisplayBookMark()
}

/*Add Submit*/
function AddBOokMark() {
    if (ValidationName() == true && ValidationNameurl() == true) {
        var BooKList = {
            code: BookNameInput.value,
            BookUrl: BookUrLInput.value,
        }
        BookMarkContainer.push(BooKList);
        localStorage.setItem("Bookcontain", JSON.stringify(BookMarkContainer))

        clearInput()
        DisplayBookMark()
        console.log(BookMarkContainer);
    }
    else {
        var msgalertshow = document.getElementById("msgalert")

        msgalertshow.classList.remove("d-none")
    }
    function clearInput() {
        BookNameInput.value = null;
        BookUrLInput.value = null;
    }


}
/*Display Book*/
function DisplayBookMark() {
    var list = ``;
    for (i = 0; i < BookMarkContainer.length; i++) {
        list += `<tr>
        <td>${[i]}</td>
        <td>${BookMarkContainer[i].code}</td>
        <td><a href="${BookMarkContainer[i].BookUrl}" target="_blank"><button class= "color1 text-white  border-0 p-1"><i class="fa-solid fa-eye pe-1"></i>visit</button></a></td>
        <td><button class="color2 text-white  border-0 p-1" onclick="deleteitem(${i})"><i class="fa-solid fa-trash  pe-1"></i>Delete</button></td>
      </tr>`;
    }
    document.getElementById("RowDaTa").innerHTML = list;

}

/*DElete Index*/
function deleteitem(indexItemf) {
    BookMarkContainer.splice(indexItemf, 1)
    localStorage.setItem("Bookcontain", JSON.stringify(BookMarkContainer))
    DisplayBookMark()
    console.log(BookMarkContainer);
}
/*regex VaLidation*/
function ValidationName() {
    var text = BookNameInput.value;
    var regex = /^[A-Z][a-z]{1,}$/i
    var msgalertshow = document.getElementById("msgalert")
    if (regex.test(text)) {

        BookNameInput.classList.add("is-valid")
        BookNameInput.classList.remove("is-invalid")
        msgalertshow.classList.add("d-none")
        return true;
    }
    else {
        BookNameInput.classList.add("is-invalid")
        BookNameInput.classList.remove("is-valid")
        return false;
    }
}
function ValidationNameurl() {
    var text2 = BookUrLInput.value;
    var regex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/i
    var msgalertshow = document.getElementById("msgalert")
    if (regex.test(text2)) {

        BookUrLInput.classList.add("is-valid")
        BookUrLInput.classList.remove("is-invalid")
        msgalertshow.classList.add("d-none")
        return true;
    }
    else {
        BookUrLInput.classList.add("is-invalid")
        BookUrLInput.classList.remove("is-valid")

        return false;
    }
}
/*alert Delete*/
function deletediv() {
    var elment = document.getElementById('msgalert')
    elment.classList.add("d-none")
}
