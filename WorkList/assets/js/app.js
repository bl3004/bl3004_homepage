(function(a){a(".navbar-nav a").each(function(){if(this.href==window.location.href){a(this).parent().addClass("active-item");a(this).parent().parent().parent().addClass("active-item")}})})(jQuery);