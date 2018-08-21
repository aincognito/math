
define(['jquery', 'desmos'], function($, Desmos) {
    var target = this;

    target.width("100%");
    target.height(360);
var calc = Desmos.Calculator( target, {expressionsCollapsed:true} );
calc.setExpression({latex:"((x-3)^3 + 7(x-3)^2)/12 -2",color:"blue"});
calc.setExpression({latex:"(-1,2),(3,-2),(5,1)",color:"blue"});
});
