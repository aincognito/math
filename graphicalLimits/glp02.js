
define(['jquery', 'desmos'], function($, Desmos) {
    var target = this;

    target.width("100%");
    target.height(360);
var calc = Desmos.Calculator( target, {expressionsCollapsed:true} );
calc.setExpression({latex:"(x^3-3x^2)/(3x-9) -2",color:"blue"});
calc.setExpression({latex:"(3,1)",color:"blue",style:"open"});
calc.setExpression({latex:"(3,-2)",color:"blue"});
});
