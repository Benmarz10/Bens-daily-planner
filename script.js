var today = dayjs();

$(init);

function init() {
//dayjs for current date
$('#currentDay').text(today.format('MMM D, YYYY'));

//set the color coding for each block and put it on an interval to change every minute
defineTimeBlocks();
setInterval(defineTimeBlocks, 60000);

//set local storage data

//event listnener for clicking save btn
    $("SaveBtn").on('click', clickSave)
    }

    function defineTimeBlocks(){
        $(".time-block").each(function(){
           
            var HourBlock = parseInt($(this).attr("id").replace("hour-", ""));
            var currentHour = parseInt(dayjs().format("H"));
            
            $(this).removeClass("future past present");
            
            if (HourBlock < currentHour) {
                $(this).addClass("past");
            } 
            else if (HourBlock > currentHour) {
                $(this).addClass("future");
            } 
            else {
                $(this).addClass("present")
            }

        })
    }

