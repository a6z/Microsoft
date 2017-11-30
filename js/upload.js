// $(function () {
//     $("#info-button").click(function () {
//         $.ajax({
//             async: false,
//             cache: false,
//             contentType: false,
//             processData: false,
//             data: new FormData($('#profile-form')[0]),
//             type: "POST",
//             url: "/upload.php",
//             success: function (data) {
//                 data = data.replace(/http:\/\//, "");
//                 $("#url").val(data);
//             }
//         });
//     });
// });

// 前端 render 未處理圖片
var reader = new FileReader();
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
