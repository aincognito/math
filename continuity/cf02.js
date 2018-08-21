
define(['jquery', 'desmos'], function($, Desmos) {
    var target = this;

    target.width("100%");
    target.height(360);
var calc = Desmos.Calculator( target, {expressionsCollapsed:true} );
calc.setExpression({latex:"-1 \\left\\{x<0\\right\\}",color:"blue", });
calc.setExpression({latex:"(0,-1)",color:"blue",style:"open"});
calc.setExpression({latex:"1 \\left\\{0<x\\right\\}",color:"blue"});
calc.setExpression({latex:"(0,1)",color:"blue",style:"open"});
});
