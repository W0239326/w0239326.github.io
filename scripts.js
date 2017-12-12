function CountVowels() {
    {
        //get target html element
        var target_element = document.getElementById('outputbox');

        var sentence = document.getElementById('phraseentry').value;

        var a_counter = 0;
        var e_counter = 0;
        var i_counter = 0;
        var o_counter = 0;
        var u_counter = 0;

        for (var i = 0; i < sentence.length; i++) {
            if (sentence.charAt(i).toLowerCase() == "a") {
                a_counter = (a_counter + 1);
            }

            else if (sentence.charAt(i).toLowerCase() == "e") {
                e_counter = (e_counter + 1);
            }

            else if (sentence.charAt(i).toLowerCase() == "i") {
                i_counter = (i_counter + 1);
            }
            else if (sentence.charAt(i).toLowerCase() == "o") {
                o_counter = (o_counter + 1);
            }
            else if (sentence.charAt(i).toLowerCase() == "u") {
                u_counter = (u_counter + 1);
            }

            target_element.value = (`Letter A Count: ${a_counter} \n`) +
                (`Letter E Count: ${e_counter} \n`) +
                (`Letter I Count: ${i_counter} \n`) +
                (`Letter O Count: ${o_counter} \n`) +
                (`Letter U Count: ${u_counter} \n`)
        }

    }
}


    document.getElementById('check').addEventListener("click", CountVowels);

