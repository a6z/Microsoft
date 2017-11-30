$(function(){
  reader.onload = function(e) {
      $("#preview_img").attr("src", e.target.result);
      
  }
  
  console.log("yy");
  
  $("#file").change(function() {
      var upload_file = $("#file")[0].files[0];
      reader.readAsDataURL(upload_file);
      console.log("render..");
  })
})