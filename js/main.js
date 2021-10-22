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

const percent = 90;
let grade = "unknown";

switch (percent) {
  case percent >= 90:
    grade = "A";
    break;
  case percent >= 80:
    grade = "B";
    break;
  case percent >= 70:
    grade = "C";
    break;
  case percent >= 60:
    grade = "D";
    break;
  case percent >= 50:
    grade = "F";
    break;
  default:
    grade = "unknown";
}
