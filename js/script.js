$(document).ready(function(){
  var maths, eng, kisw, sci, sstre, marks, position = 0;

  $(".close").click(function() {
      $(".body").show();
  });

  $("#admissiontomodal").click(function(){
      $(".body").hide();
});

  $("#parenttomodal").click(function(){
      $(".body").hide();
});

    $("#teachertomodal").click(function(){
        $(".body").hide();
  });

    $("#closebtn").click(function() {
        $(".body").show();
    });

    $("#sendbtn").click(function() {

        maths = parseInt($("#mathsinput").val());
        eng = parseInt($("#enginput").val());
        kisw = parseInt($("#kiswinput").val());
        sci = parseInt($("#sciinput").val());
        sstre = parseInt($("#sstreinput").val());
        marks = (maths+eng+kisw+sci+sstre);
        position = parseInt($("#positioninput").val());
    });

    $("#submitbtn").click(function() {

        var firstname = $("#firstnameinput").val();
        var middlename = $("#middlenameinput").val();
        var surname = $("#surnameinput").val();
        var age = parseInt($("#ageinput").val());
        var gender
        var dateofbirth = $("#borninput").val();
        var father = $("#fatherinput").val();
        var mother = $("#motherinput").val();
        var ocupation = $("#occupationinput").val();
        var contacts = $("#contactsinput").val();
        var address = $("#addressinput").val();

        $(".body").show();

    });

});
