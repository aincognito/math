
define(['jquery', 'desmos'], function($, Desmos) {
    var target = this;

    target.width("100%");
    target.height(360);
var calc = Desmos.Calculator( target, {expressionsCollapsed:true} );
calc.setExpression({latex:"(5-x)^{1/2} \\left\\{-3.99<x<5\\right\\}", color:"blue"});
calc.setExpression({latex:"(-4,3)",color:"blue",style:"open"});
});