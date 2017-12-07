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


var reader = new FileReader();
var file_name = "";


$(function () {
    $('#start').click(function () {
        $('html,body').animate({ scrollTop: $('#section2').offset().top }, 500);
    });

// 前端 render 圖片
    reader.onload = function (e) {
        $("#preview_img").attr("src", e.target.result);
        console.log("render successful!")
    }

    $("#file").change(function () {
        var upload_file = $("#file")[0].files[0];
        console.log(upload_file.name);
        file_name = upload_file.name;
        reader.readAsDataURL(upload_file);
        console.log("catch..");
    })

// render python 處理後的圖片
    //var mes = "訊號";
    // if('no_one_smoking') {
    //   $("#afpreview_img").attr("src", "upload/" + file_name);
    // }
    // else if('successful') {
    //     file_name = "output_" + file_name;
    //     $("#afpreview_img").attr("src", "upload/" + file_name);
    // else {
    //      
    //    console.log("error")
    // }
    // }
    
})
