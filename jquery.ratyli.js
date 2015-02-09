(function($){
    $.ratyli = function(el, options){
        var base = this;
        base.$el = $(el);
        base.el = el;
        
        base.$el.data("ratyli", base);
        
        base.init = function(){
            // extend with parameters
            base.options = $.extend({},$.ratyli.defaultOptions, options);
          
            // extend with html5 dataset
            base.options =$.extend({},base.options,base.$el.data());
  
            // for the loop
            base.set(base.options.rate,true);
          
            // event listeners for rating signs
            base.$el.on("click","> *",function(e){
              if(base.options.interactive){
                base.options.onSignClick.call(base,e);
                var val=$(e.target).prevAll().length+1;
                base.set(val);
              }
            });
          
            base.$el.on("mouseenter","> *",function(e){
                if(base.options.interactive){
                  $(e.target).addClass("rate-active");
                  $(e.target).prevAll().addClass("rate-active");
                }
                base.options.onSignEnter.call(base,e);
            });

            base.$el.on("mouseleave","> *",function(e){
                if(base.options.interactive){
                  $(e.target).removeClass("rate-active");
                  $(e.target).prevAll().removeClass("rate-active");
                }
                base.options.onSignLeave.call(base,e);
            });

        };
      
        base.set=function(val,init){
            if(val<0 || (val % 1 != 0) || val>base.options.max) val=0; // reset to 0.
          
            base.options.rate=val;          
 
            // reset html
            base.$el.html("");
          
             // generate signs
             var i=0;
             while (i < base.options.max) {
                  var tmp="";
                  if(i<base.options.rate){
                    tmp=base.signTemplate("full");
                  }else{
                    tmp=base.signTemplate("empty");
                  }
                  base.$el.append(tmp);
                  i++;
            } 
            
            // set rated
            if(!init && base.options.interactive) base.$el.addClass("ratyli-rated");
            
            //rated callack
            base.options.onRated.call(base,val,init);
          
            return base.options.rate;
        };
      
      
        base.signTemplate=function(type){
            return "<span class='rate rate-"+type+"' style='cursor:"+base.options.cursor+";'>"+base.options[type]+"</span>";
        };
                  
        base.init();
       
    };
    
    $.ratyli.defaultOptions = {
        interactive:true,
        full: "★",
        empty: "☆",
        cursor:"default",
        rate:0,
        max:5,
        onSignEnter:function(){},
        onSignLeave:function(){},
        onSignClick:function(){},
        onRated:function(){}
    };
    
    $.fn.ratyli = function(options){
        return this.each(function(){
            (new $.ratyli(this, options));
        });
    };
    
})(jQuery);
