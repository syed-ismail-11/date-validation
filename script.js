var day = moment();
document.getElementById("currentdate").innerHTML = "Current Date: "+`<br>` + day._d;

var changeddate1 = moment().subtract({ days: 30 });
document.getElementById("changeddate1").innerHTML = "Subtracting 30 days from today : " +`<br>` + changeddate1._d;




let dtElem = document.getElementById('datetime');
             let minDate = new Date();
             let maxDate = new Date();
             minDate.setDate(maxDate.getDate() - 60);
             
             dtElem.min = formatDate(minDate);
             dtElem.max = formatDate(maxDate);
             
             console.log(formatDate(minDate));
             console.log(formatDate(maxDate));
             
             
             function formatDate(date) {
               let dd = String(date.getDate()).padStart(2, '0');
               let mm = String(date.getMonth() + 1).padStart(2, '0');
               let yyyy = date.getFullYear();
               return `${yyyy}-${mm}-${dd}`;
             }