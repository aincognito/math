
define(['jquery', 'desmos'], function($, Desmos) {
    var target = this;

    target.width("100%");
    target.height(360);
var calc = Desmos.Calculator( target, {expressionsCollapsed:true} );
calc.setExpression({latex:"2^x -3 \\left\\{x<1\\right\\}",color:"blue"});
calc.setExpression({latex:"(1,-1)",color:"blue",style:"open"});
calc.setExpression({latex:"3-1/x \\left\\{1<x\\right\\}",color:"blue"});
calc.setExpression({latex:"(1,2)",color:"blue"});
});
