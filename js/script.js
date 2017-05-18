// var dob = $("#born").val();

$(document).ready(function(event) {
      $("#form1 form").submit(function() {
        var firstname = $("input#firstname").val();
        var middlename = $("input#middlename").val();
        var surname= $("input#surname").val();
        var age = $("input#age").val();
        var gender = $("input#gender").val();
        var born = $("input#born").val();
        var father = $("input#father").val();
        var mother =$("input#mother").val();
        var occupation = $("input#occupation").val();
        var contacts =$("input#contacts").val();
        var address =$("input#contacs").val();

        $(".firstname").text(firstnameInput);
        $(".middlename").text(person2Input);
        $(".surname").text(surnamelInput);
        $(".age").text(ageInput);
        $(".gender").text(genderInput);
        $(".born").text(bornInput);
        $(".father").text(fatherInput);
        $(".mother").text(motherInput);
        $(".occupation").text(occupationInput);
        $(".contacts").text(contactsInput);
        $(".address").text(addressInput);

        $("form1").show();
        $("#story").show();


        event.preventDefault();
      });
    });
