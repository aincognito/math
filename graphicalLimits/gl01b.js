
define(['jquery', 'desmos'], function($, Desmos) {
    var target = this;

    target.width("100%");
    target.height(360);
var calc = Desmos.Calculator( target, {expressionsCollapsed:true} );
calc.setExpression({latex:"2^{x-1}-2 \\left\\{-5<x<2.99\\right\\}",color:"blue"});
calc.setExpression({latex:"(3,2)",color:"blue",style:"open"});
});