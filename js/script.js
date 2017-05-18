$(document).ready(function(){

  $(".close").click(function() {
      $(".body").show();
  });

    $("#teachertomodal").click(function(){
        $(".body").hide();
  });

    $("#closebtn").click(function() {
        $(".body").show();
    });

    $("#sendbtn").click(function() {

        var maths = parseInt($("#mathsinput").val());
        var eng = parseInt($("#enginput").val());
        var kisw = parseInt($("#kiswinput").val());
        var sci = parseInt($("#sciinput").val());
        var sstre = parseInt($("#sstreinput").val());
        var marks = (maths+eng+kisw+sci+sstre);
        var position = parseInt($("#positioninput").val());
    });

});
