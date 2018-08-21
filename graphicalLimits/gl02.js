
define(['jquery', 'desmos'], function($, Desmos) {
    var target = this;

    target.width("100%");
    target.height(360);
var calc = Desmos.Calculator( target, {expressionsCollapsed:true} );
calc.setExpression({latex:"(x^2-4x+3)/(3x-9) + 4/3",color:"blue"});
calc.setExpression({latex:"(3,2)",color:"blue",style:"open"});
calc.setExpression({latex:"(3,4)",color:"blue"});
});
