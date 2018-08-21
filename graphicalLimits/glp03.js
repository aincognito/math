
define(['jquery', 'desmos'], function($, Desmos) {
    var target = this;

    target.width("100%");
    target.height(360);
var calc = Desmos.Calculator( target, {expressionsCollapsed:true} );
calc.setExpression({latex:"x/2-3/2 \\left\\{x<-1\\right\\}",color:"blue"});
calc.setExpression({latex:"(-1,-2)",color:"blue"});
calc.setExpression({latex:"3+sin(x+1) \\left\\{-1<x\\right\\}",color:"blue"});
calc.setExpression({latex:"(-1,3)",color:"blue",style:"open"});
});
