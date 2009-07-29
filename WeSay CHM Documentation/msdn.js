window.onload = Resize;
window.onresize = Resize;

function Resize() {
  if (document.body.clientWidth == 0) return;

  var PageHeader = document.all("PageHeader");
  var PageFooter = document.all("PageFooter");
  var PageBody   = document.all("PageBody");

  PageBody.style.width  = document.body.offsetWidth - 4;
	PageBody.style.height = Math.max(document.body.offsetHeight - PageHeader.offsetHeight - PageFooter.offsetHeight - 4, 0);

  try {
    PageBody.setActive();
  }
  catch(e) {
  }
}