var today = dayjs();

$(init);

function init() {
//Jquery for current date
$('#currentDay').text(today.format('MMM D, YYYY'));

defineTimeBlocks();
setInterval(defineTimeBlocks, 60000);

$(".time-block").each(function() {
    var blockId = $(this).attr("id");
    // load saved data from local storage
    $("#" + blockId + " textarea").text(localStorage.getItem(dayjs().format("DDDYYYY") + blockId));
  });

    $(".SaveBtn").on('click', clickSave)
    }

    function defineTimeBlocks(){
        $(".time-block").each(function(){
            var HourBlock = parseInt($(this).attr("id").replace("hour-", ""));
            var currentHour = parseInt(dayjs().format("H"));
            $(this).removeClass("past present future");
            if (HourBlock < currentHour) {
                $(this).addClass("past");
            } else if (HourBlock > currentHour) {
                $(this).addClass("future");
            } else {
                $(this).addClass("present")
            }

        })
    }

    function clickSave() {
        $('#' + blockId + " textarea").text(localStorage.setItem(dayjs().format("DDDYYYY") + blockId));
    }
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.