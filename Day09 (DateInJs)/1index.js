/*
1.Creating Dates
new Date()                          → current system date & time.
new Date(ms)                        → from milliseconds since Jan 1, 1970.
new Date("YYYY-MM-DD")              → from string (Month = 1-based, time = UTC).
new Date(y, m, d, h, min, s, ms)    → with numbers (Month = 0-based, local time).

2.Date Get Methods
getDate()                                                   → day (1–31)
getDay()                                                    → weekday (0=Sun to 6=Sat)
getMonth()                                                  → month (0=Jan to 11=Dec)
getFullYear()                                               → 4-digit year
getTime()                                                   → total ms since Jan 1, 1970
getHours(), getMinutes(), getSeconds(), getMilliseconds()

4.Format/Display Methods 

1.toString()→ full local string
    does: Converts the full date object to a readable local date and time string.
    format: "Day Mon Date Year Time GMT+Offset (TimeZone)"
    Output: "Mon May 20 2025 14:45:00 GMT+0530 (India Standard Time)"

2.toLocaleString()→ formatted by system locale
    does: Converts the date to a string based on the user's system locale settings.
    Output: "20/5/2025, 2:45:00 pm" (in India)
   
3.toDateString()→ only date part
    does: Returns only the date part, omitting time details.
    format: "Day Mon Date Year"
    Output: "Tue May 20 2025"
    
4.toISOString()→ standard UTC format (good for storage)
    does: Converts the date into a standard UTC ISO 8601 format, suitable for APIs and databases.
    Format: "YYYY-MM-DDTHH:mm:ss.sssZ"
    Output: "2025-05-20T09:15:00.000Z"

*/



// let dat=new Date();//ye Date() system clock se hi calculate krta hai, agar system ka time change kr denge to change ho jayega date
// console.log(dat);  //2025-02-26T06:56:31.044Z
// console.log(dat.toLocaleString());//26/2/2025, 12:26:31 pm
// console.log(Date());//Wed Feb 26 2025 12:26:31 GMT+0530 (India Standard Time)



// let date1=new Date(60000);//[Jan:1:1970:12:00:00] se 1000ms ke baad time kitna hoga //1970-01-01
// console.log(date1);//date() ke andar kuch nhi bhejege to avi tkk ka total ms o khud se lega or avi ka time bata dega
// console.log(new Date(2000832891237));//2033-05-27T18:54:51.237Z

/*
const d = new Date();
console.log(d);                                            //2025-02-26T06:37:37.252Z
console.log(d.toDateString());//date is converted to this {Wed Feb 26 2025} if we use d.toDateString()
console.log(d.toString());  //Sun Dec 29 2024 14:45:18 GMT+0530 (India Standard Time)
console.log(d.toISOString());
*/

/*
// Sun, Mon, Tue, Wed, Thu ,fri, Sat
//  0,   1,   2 ,  3,   4,   5,   6
//Jan, feb, Mar, April
// 0,   1,   2,   3, 
const d = new Date();
console.log(d.toLocaleString());          //2025-02-26T06:44:00.019Z
console.log(d.getDate());//26
console.log(d.getDay()); //3(Wed)
console.log(d.getMonth());//1(Feb)

console.log(Date());

console.log(d.getFullYear());//2025
console.log(d.getMilliseconds());//314->usse particular min me kitna millisec paar ho chuka hai
console.log(d.getMinutes());//55-->particular hr me kitna min hua hai
console.log(d.getTime());//1735464351314-->kitna total millisec nikal chuka hai avi tkk [Jan:1:1970:12:00:00]
// const now = Date.now();
// console.log(now);//1735464535225-->diff value isliye hai kyuki kuch to time lega Date.now() ko execute hone me
*/

/*
//Number: 0 based start honge
//String: 1 based start honge
const d = new Date("2025-10-20");//ye String format me diye hai mtlb: 1 based start honge {Thu Oct 20 2022 05:30:00}
console.log(d.toString());//Mon Oct 20 2025 05:30:00 GMT+0530 (India Standard Time)

// year / Month / Date / Hour / Minute / second / millisecond
const date11 = new Date(2024,5,28, 10, 12,45, 231);//ye number format me diye hai mtlb:0 based start honge
console.log(date11.toString());//Fri Jun 28 2024 10:12:45 GMT+0530 (India Standard Time)
*/

/*
//setting Date Components
const d = new Date();
d.setDate(20);
d.setFullYear(2021);
d.setMonth(3);//april
console.log(d.toString());//Tue Apr 20 2021 15:36:11
console.log(d.toLocaleString());//20/4/2021, 3:35:03 pm
*/


/*//Date calculation
const date1 = new Date();
const date2 = new Date("2026-01-01");
const date=(date2-date1);//difference between date is in millisecond
console.log(date);

let hr=(date/(1000*60*60))
console.log(hr);//5491.207648888889
let hrModulofnUsing=((date/(1000*60*60))%24)
console.log(hrModulofnUsing);//19.207648888888798

let hrRoundOff=(Math.floor(date/(1000*60*60))%24)
console.log(hrRoundOff);//19
let hrRoundOffWithoutUsingModulo=(Math.floor(date/(1000*60*60)))
console.log(hrRoundOffWithoutUsingModulo);//5491
*/


 
/*
//Countdown Timer for olympics// Days , hour, minute , second
const date1 = new Date();
const date2 = new Date("2028-07-14T00:00:00");

const date = date2-date1;//kitna time bacha hua hai millisec me dega
console.log(date);
const days = Math.floor(date/(1000*60*60*24));//ye dega kitna din bacha hua hai
const hour = Math.floor((date/(1000*60*60))%24);//ye dega kitna hour bacha hua hai
const minute = Math.floor((date/(1000*60))%60);//kitna min bacha hua hai 
const second = Math.floor((date/(1000))%60);//kitna sec dega 

console.log(`Olympics CountDownTime: Days:${days} hour:${hour} minute:${minute} second:${second}`);
*/

/*
//Countdown Timer for olympics// Days , hour, minute , second
const date1 = new Date();
const date2 = new Date("2028-07-14T11:00:00");//T mtlb time start ho raha hai yaha se
const date=(date2-date1)
const day=Math.floor(date/(1000*60*60*24))
const hour=Math.floor(date/(1000*60*60)%24)
const min=Math.floor(date/(1000*60)%60)
const sec=Math.floor(date/(1000)%60)
console.log(`Olympic CountDown Time Left: Day:${day} hours:${hour} min:${min} sec:${sec}`);//Olympic CountDown Time Left: 1292 7 51 19
//Olympic CountDown Time Left: 1292 31015 1860955 111657305
*/


//CountDown Timer for IPL(2025)
let dateI1=new Date();
let dateI2=new Date("2026-03-28T19:30:00");
timeLeft=(dateI2-dateI1);
console.log(timeLeft); //1219399132 ms


let dayLeft=Math.floor(timeLeft/(1000*60*60*24));
let hourLeft=Math.floor(timeLeft/(1000*60*60)%24);
let minLeft=Math.floor(timeLeft/(1000*60)%60);
let secLeft=Math.floor(timeLeft/(1000)%60);
let millisecLeft=Math.floor(timeLeft%60);

console.log(`Exact time left is=Day:${dayLeft} hours:${hourLeft} min:${minLeft} sec:${secLeft} millisec:${millisecLeft}`);


/*//DATE & TIME

// 1.Creating Dates
// new Date()                          → current system date & time.
// new Date(ms)                        → from milliseconds since Jan 1, 1970.
// new Date("YYYY-MM-DDT19:30:00")              → from string (Month = 1-based, time = UTC).
// new Date(y, m, d, h, min, s, ms)    → with numbers (Month = 0-based, local time).

// const now = new Date();
// console.log(now);//2026-03-14T10:44:16.473Z
// console.log(now.toString());//Sat Mar 14 2026 16:15:45 GMT+0530 (India Standard Time)
// console.log(now.toISOString());//2026-03-14T10:45:45.230Z
// console.log(now.toLocaleString());//3/14/2026, 4:15:45 PM

// Local time chal rha
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getHours());
// console.log(now.getSeconds());

//JS one more bug ,which again cant br fixed bcz legacy code will break
// days: Mon-tue(1 based)
// Month: 0 1 ... 11 , so use string format
*/
// year month date hour minute second millisecond
const nowNum = new Date(2025,8,21,8,25,16,125);
const nowStr = new Date("2025-08-21T19:30:00");
console.log(nowNum.toString());//Sun Sep 21 2025 08:25:16 GMT+0530 (India Standard Time)
console.log(nowStr.toString());//Sun Sep 21 2025 08:25:16 GMT+0530 (India Standard Time)
// console.log(now);//2025-09-21T02:55:16.125Z

// Timestamp
// const now = Date.now();
// console.log(now);//1773485643219  TimeStamp

// const dates = new Date(1759275037293);
// const dates = new Date(0);//Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
// console.log(dates.toString());

// console.log(dates);

