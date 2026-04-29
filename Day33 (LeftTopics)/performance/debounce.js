/*DEBOUNCE
    -limit the rate at which fn is executed.
    -ensure fn is only executed/called after certain delay has passed from previous call
    -it takes the delay and fn is executed only after that delay is passed.
    -eg:-search: for each input search is made and API is called, so we can delay a call for certain time 
*/

/*THROTTLING
    -it limits how often a fn can be called over a time period.
    -fn should called atleast once in that time period ,whereas debounce fn run after that time period is over
    -eg:-fn should be called 3time for this time period.
*/