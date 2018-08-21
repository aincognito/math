
define(['jquery', 'desmos'], function($, Desmos) {
    var target = this;

    target.width("100%");
    target.height(360);
var calc = Desmos.Calculator( target, {expressionsCollapsed:true} );
calc.setExpression({latex:"x^2", color:"blue"});
calc.setExpression({latex:"(-3,9), (0,0), (2,4)",color:"red"});
calc.setExpression({latex:"(t, -6t-9)", domain: {min: -3.3,max: -2.7}, color:"red"});
calc.setExpression({latex:"(t,0)", domain: {min: -1.1,max: 1.1}, color:"red"});
calc.setExpression({latex:"(t, 4t-4)", domain: {min: 1.6,max: 2.4}, color:"red"});
});