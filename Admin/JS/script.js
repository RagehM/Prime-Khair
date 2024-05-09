document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("myelement").classList.add("load");
  }, 1);
  setTimeout(function () {
    document.getElementById("myelement").classList.add("hide");
  }, 1200);
});

function goToMoreDetailsOrganization() {
  window.location.href = "/Admin/organizationMoreDetails.html";
}

function goToOrganizationList() {
  window.location.href = "/Admin/organizationsRequestsReview.html";
}



function showForm() {
  var form = document.getElementById("reviewcard");

  form.classList.remove("hidden");

  const scrollPosition =
    (document.documentElement.scrollHeight - window.innerHeight) * 0.7;

  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth",
  });
}