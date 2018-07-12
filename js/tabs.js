var hash=document.location.hash;
if(hash){
    $('.nav-pills a[href="'+ hash+'1"]').tab('show');
}
$('.nav-pills a').on('shown.bs.tab',function(e){window.location.hash=(e.target.hash).replace('1','');});