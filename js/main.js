$(function () {
  $("#LoginBtn").on("click", function () {
    $("#pills-register").removeClass("show active");
    $("#pills-login").removeClass("show active").addClass("show active");
    $("#pills-login-tab").removeClass("active").addClass("active");
    $("#pills-register-tab").removeClass("active");
    $("#LogRegModal").modal("show");
  });

  $("#RegisterBtn").on("click", function () {
    $("#pills-register").removeClass("show active").addClass("show active");
    $("#pills-login").removeClass("show active");
    $("#pills-login-tab").removeClass("active");
    $("#pills-register-tab").removeClass("active").addClass("active");
    $("#LogRegModal").modal("show");
  });
});
