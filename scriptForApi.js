
var myAlert = "Oops, looks like you typed something wrong, or the API is a bit tired";

// This is func 1, enetr a valid Symbol of stock, and get it's name, and then all the most relevant data of it inside an unordered list
function doSearch1(val,divName) {                                                        //each time get a diff val
    $.getJSON("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + val + "&apikey=myKey"
        , function (data) {  
            //saving all the data in variables, and ill check if they are defined
            var d1 = (data["Global Quote"]["01. symbol"]); var d2 = (data["Global Quote"]["02. open"]); var d3 = (data["Global Quote"]["03. high"]);
            var d4 = (data["Global Quote"]["04. low"]); var d5 = (data["Global Quote"]["05. price"]); var d6 = (data["Global Quote"]["06. volume"]);
            var d7 = (data["Global Quote"]["07. latest trading day"]); var d8 = (data["Global Quote"]["08. previous close"]); var d9 = (data["Global Quote"]["09. change"]);
            var d10 = (data["Global Quote"]["10. change percent"]);
          
            var openDouble = (data["Global Quote"]["02. open"]);    
            var ul; var uul = document.getElementById('theList1');  //checking if the user already built a list before
            if (uul == null) {
                ul = document.createElement('ul1');                 // if he didnt, I'll create one
            }
            if (uul)
            {
                while (uul.firstChild) {
                    uul.removeChild(uul.firstChild);                //if the list has items, while im about to create new list, I want to remove them 
                }
                ul = document.getElementById('theList1');           
            }
            
            if (openDouble != undefined)  //only if I get a valid stock symbol 
            {
                var cont = document.getElementById(divName); 
                 ul.setAttribute('style', 'padding: 0; font-size:14px;  margin: 0;'); ul.setAttribute('id', 'theList1');
                if (d1 != undefined)   //creating list elements,                                                                                        //append
                    var li = document.createElement('li'); li.innerHTML = "Symbol of the stock is: " + d1; li.setAttribute('style', 'display: block;'); ul.appendChild(li); cont.appendChild(ul);
                if (d2 != undefined)   //it's not in a loop because I want each row to have specific values that aren't written in the Json data!
                    li = document.createElement('li'); li.innerHTML = "Today's opening price was: " + d2; li.setAttribute('style', 'display: block;'); ul.appendChild(li); cont.appendChild(ul);
                if (d3 != undefined)
                    li = document.createElement('li'); li.innerHTML = "Highest price today was: " + d3; li.setAttribute('style', 'display: block;'); ul.appendChild(li); cont.appendChild(ul);
                if (d4 != undefined)
                    li = document.createElement('li'); li.innerHTML = "Lowest price today was: " + d4; li.setAttribute('style', 'display: block;'); ul.appendChild(li); cont.appendChild(ul);
                if (d5 != undefined)
                    li = document.createElement('li'); li.innerHTML = "Price now is: " + d5; li.setAttribute('style', 'display: block;'); ul.appendChild(li); cont.appendChild(ul);
                if (d6 != undefined)
                    li = document.createElement('li'); li.innerHTML = "Volume of the stock is: " + d6; li.setAttribute('style', 'display: block;'); ul.appendChild(li); cont.appendChild(ul);
                if (d7 != undefined)
                    li = document.createElement('li'); li.innerHTML = "Latest trading day: " + d7; li.setAttribute('style', 'display: block;'); ul.appendChild(li); cont.appendChild(ul);
                if (d8 != undefined)
                    li = document.createElement('li'); li.innerHTML = "Previous close price: " + d8; li.setAttribute('style', 'display: block;'); ul.appendChild(li); cont.appendChild(ul);
                if (d9 != undefined)
                    li = document.createElement('li'); li.innerHTML = "Today's change in Dollars: " + d9; li.setAttribute('style', 'display: block;'); ul.appendChild(li); cont.appendChild(ul);
                if (d10 != undefined)
                    li = document.createElement('li'); li.innerHTML = " Today's change in perecntages: " + d10; li.setAttribute('style', 'display: block;'); ul.appendChild(li); cont.appendChild(ul);
                doMyChart1(val);
            }
            else {
                alert(myAlert);
            }
        });
}
/*        *                    *                       *                            *                     *           *                */
function doSearch2(val, divName) {                                                        //each time get a different value
    $.getJSON("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + val + "&apikey=myKey"
        , function (data) {
            //saving all the data in variables, and i'll check if they are defined
            var d1 = (data["Global Quote"]["01. symbol"]); var d2 = (data["Global Quote"]["02. open"]); var d3 = (data["Global Quote"]["03. high"]);
            var d4 = (data["Global Quote"]["04. low"]); var d5 = (data["Global Quote"]["05. price"]); var d6 = (data["Global Quote"]["06. volume"]);
            var d7 = (data["Global Quote"]["07. latest trading day"]); var d8 = (data["Global Quote"]["08. previous close"]); var d9 = (data["Global Quote"]["09. change"]);
            var d10 = (data["Global Quote"]["10. change percent"]);

            //same documentation as the function before

            var openDouble = (data["Global Quote"]["02. open"]);
            var ul; var uul = document.getElementById('theList2');
            if (uul == null) {
                ul = document.createElement('ul2');
            }
            if (uul) {
                while (uul.firstChild) {
                    uul.removeChild(uul.firstChild);
                }
                ul = document.getElementById('theList2');
            }

            if (openDouble != undefined)  //only if I get a valid stock symbol 
            {
                var cont = document.getElementById(divName);
                var myEle = document.getElementById("theList2");
                ul.setAttribute('style', 'padding: 0; font-size:14px;  margin: 0;'); ul.setAttribute('id', 'theList2');
                if (d1 != undefined)   //creating list elements,                                                                                        //append
                    var li = document.createElement('li'); li.innerHTML = "Symbol of the stock is: " + d1; li.setAttribute('style', 'display: block;'); ul.appendChild(li); cont.appendChild(ul);
                if (d2 != undefined)   //it's not in a loop because I want each row to have specific values that aren't written in the Json data!
                    li = document.createElement('li'); li.innerHTML = "Today opening price was: " + d2; li.setAttribute('style', 'display: block;'); ul.appendChild(li); cont.appendChild(ul);
                if (d3 != undefined)
                    li = document.createElement('li'); li.innerHTML = "Highest price today was: " + d3; li.setAttribute('style', 'display: block;'); ul.appendChild(li); cont.appendChild(ul);
                if (d4 != undefined)
                    li = document.createElement('li'); li.innerHTML = "Lowest price today was: " + d4; li.setAttribute('style', 'display: block;'); ul.appendChild(li); cont.appendChild(ul);
                if (d5 != undefined)
                    li = document.createElement('li'); li.innerHTML = "Price now is: " + d5; li.setAttribute('style', 'display: block;'); ul.appendChild(li); cont.appendChild(ul);
                if (d6 != undefined)
                    li = document.createElement('li'); li.innerHTML = "Volume of the stock is: " + d6; li.setAttribute('style', 'display: block;'); ul.appendChild(li); cont.appendChild(ul);
                if (d7 != undefined)
                    li = document.createElement('li'); li.innerHTML = "Latest trading day: " + d7; li.setAttribute('style', 'display: block;'); ul.appendChild(li); cont.appendChild(ul);
                if (d8 != undefined)
                    li = document.createElement('li'); li.innerHTML = "Previous close price: " + d8; li.setAttribute('style', 'display: block;'); ul.appendChild(li); cont.appendChild(ul);
                if (d9 != undefined)
                    li = document.createElement('li'); li.innerHTML = "Today change in Dollars: " + d9; li.setAttribute('style', 'display: block;'); ul.appendChild(li); cont.appendChild(ul);
                if (d10 != undefined)
                    li = document.createElement('li'); li.innerHTML = " Today change in perecntages: " + d10; li.setAttribute('style', 'display: block;'); ul.appendChild(li); cont.appendChild(ul);
                doMyChart2(val);
            }
            else {
                alert(myAlert);
            }
        });
}
/*  * *   *    *    *    *    *    *    *     *     *    *    *  *     *      *      *     *     *       *         *      *       *       *      *     */
// This is func two, it used for search by first few letters, returns a select list of stocks that might be what user is looking for

function doSearchByLetters(val2) {                                                          // each time I get different symbol name
    $.getJSON("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + val2 + "&apikey=myKey"
        , function (data) {
            document.getElementById('myLbl').style.visibility = "visible";
            var brr = [];                                          // creating array which will contain all the options I get when user dont remember the symbol

            for (var i = 0; i < data["bestMatches"].length; i++)   // the array called bestMatches
            {                                                      //each element has another element called symbol name, which I would like to present
                var sym = (data["bestMatches"][i]["1. symbol"]);   //append it inside var
                if (sym != undefined) {                            // making sure it's defined  
                    brr.push(sym);                                 // if defined push inside array 
                }
            }
                /*     *     *     *      *     *     *      *     *    *     *    *     *     *      *      *     *     *        *      */
            document.getElementById("selectStock").options.length = 0;    //in case there was a search before I want the list to be empty
            var select = document.getElementById("selectStock");          // calling the id I want from html
            var optionsAsString = "";                                     //will be a var to help me save the options vals and strings

            for (var i = 0; i < brr.length; i++)
            {
                optionsAsString += "<option value='" + brr[i] + "'>" + brr[i] + "</option>";  // the format for select options
                var option = document.createElement("OPTION"),                                // create the elemnt ofoption
                txt = document.createTextNode(brr[i]);                                        // create text
                option.appendChild(txt);                                                      // append it
                option.setAttribute("value", brr[i]);                                         // give it value
                select.insertBefore(option, select.lastChild);                                // placement in select
            }
            $('select[name="selectStock"]').append(optionsAsString);                          // actual appending, calling by id, and use the var optionAsString
           
        });
}


function doMyChart1(val) {                                                        //each time get a diff val of stock
    $.getJSON(" https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+ val + "&apikey=myKey"
        , function (data3) {
            var d1 = (data3["Time Series (Daily)"]);  //[0]["4. close"]
            if (d1 != undefined) {
                /*******************************************/
                var d3 = Object.keys(d1)[0];
                var d4 = Object.keys(d1)[1];
                var d5 = Object.keys(d1)[2];
                var d6 = Object.keys(d1)[3];    //here I get the keys of the last 7 days  (the object by date)
                var d7 = Object.keys(d1)[4];
                var d8 = Object.keys(d1)[5];
                var d9 = Object.keys(d1)[6];
                /*******************************************/

                /*******************************************/         //here I get the close price in each day
                var d10 = (d1[d3]["4. close"]); var d11 = (d1[d4]["4. close"]); var d12 = (d1[d5]["4. close"]); var d13 = (d1[d6]["4. close"]);
                var d14 = (d1[d7]["4. close"]); var d15 = (d1[d8]["4. close"]); var d16 = (d1[d9]["4. close"]);

                /********************************************/
            }
            else {
                alert(myAlert);
            }

            /**************************************************/

            const ctx = document.getElementById('chart1').getContext('2d');  //chart id from html
            const xLabels = [d9, d8, d7, d6, d5, d4, d3];                    // dates will be my x items
            const myChart = new Chart(ctx, {
                type: 'line',                                                // want a line graph
                data: {
                    labels: xLabels,
                    datasets: [{
                        label: 'This week stock changes',
                        data: [d10, d11, d12, d13, d14, d15, d16],         // the prices are my y items
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: false,

                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: false
                            }
                        }]
                    }
                }
            })
        })
}

/*      *      *          *             *              *               *                  *                *                    *                  *         */
// same documentation as the func above, creating chart 2
function doMyChart2(val) {                                                        //each time get a diff symbol value
    $.getJSON(" https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + val + "&apikey=myKey"
        , function (data3) {
            var d1 = (data3["Time Series (Daily)"]);  //[0]["4. close"]
            if (d1 != undefined) {
              
                /*******************************************/
                var d3 = Object.keys(d1)[0];
                var d4 = Object.keys(d1)[1];
                var d5 = Object.keys(d1)[2];
                var d6 = Object.keys(d1)[3];    //here i get the keys of the last 7 days  (the object by date)
                var d7 = Object.keys(d1)[4];
                var d8 = Object.keys(d1)[5];
                var d9 = Object.keys(d1)[6];
                /*******************************************/

                /*******************************************/         //here i get the close price in each day
               
                var d10 = (d1[d3]["4. close"]); var d11 = (d1[d4]["4. close"]); var d12 = (d1[d5]["4. close"]); var d13 = (d1[d6]["4. close"]);
                var d14 = (d1[d7]["4. close"]); var d15 = (d1[d8]["4. close"]); var d16 = (d1[d9]["4. close"]);
                    
                /********************************************/
            }
            else {
                alert(myAlert);
            }

            /**************************************************/

            const ctx = document.getElementById('chart2').getContext('2d');
            const xLabels = [d9, d8, d7, d6, d5, d4, d3];
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: xLabels,
                    datasets: [{
                        label: 'This week stock changes',
                        data: [d10, d11, d12, d13, d14, d15, d16],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: false,

                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: false
                            }
                        }]
                    }
                }
            })
        })
}
