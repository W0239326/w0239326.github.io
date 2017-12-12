/**
 * Created by w0239326 on 12/4/2017.
 */

var xmlhttp = new XMLHttpRequest();
var countriesArray;

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // This code will run when I get JSON response data
        countriesArray = JSON.parse(this.responseText);
        var target_element = document.getElementById('SelectCountry');
        for(var i = 0; i < countriesArray.length; i++)
        {
            //target_element.innerHTML += myObj[i]['Name']  + "<br />";
            target_element.innerHTML += "<option value='" + (i + 1) + "'>" + countriesArray[i].Name + "</option>";
        }
    }
};

function DisplayCountryData() {

    //get the index currently selected country in the dropdown
    var selected_country = document.getElementById('SelectCountry').value;

    // alert(countriesArray[selected_country - 1].Name);

    // get the elements that we need to change in the html
    var country_name_text = document.getElementById('countryName');
    var country_flag_img = document.getElementById('flagImage');

    // country_name_text.innerHTML = "<h1>" + countriesArray[selected_country -1].Name + "</h1>";
    country_name_text.innerHTML = countriesArray[selected_country -1].Name;
    var country_name = countriesArray[selected_country -1].Name;


    //the picture files have underscores so in order to get the right picture I need to replace the spaces with underscores
    var country_name = country_name.replace(/ /g, "_");



    country_flag_img.innerHTML = "<img src ='flags/" + country_name + ".png'>";
}

xmlhttp.open("GET", "countries.json", true);
xmlhttp.send();



document.getElementById('SelectCountry').addEventListener('change', DisplayCountryData);