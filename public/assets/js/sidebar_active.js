
$(window).ready(()=>{
    var path = window.location.pathname;  
    console.log(path);
    var activePage = path.substring(path.lastIndexOf('/')+1);
    console.log(activePage);
    $('.nav li a').each(function(){  
        var currentPage = this.href.substring(this.href.lastIndexOf('/')+1);
        if (activePage == currentPage) {
            $(this).parent().addClass('active'); 
        } 
    });
});
