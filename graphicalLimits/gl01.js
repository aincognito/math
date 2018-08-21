
define(['jquery', 'desmos'], function($, Desmos) {
    var target = this;

    target.width("100%");
    target.height(360);
var calc = Desmos.Calculator( target, {expressionsCollapsed:true} );
calc.setExpression({latex:"(t, 2^{t-2} -4)", domain: {min: -15,max: 5}, color:"blue"});
calc.setExpression({latex:"(5,4)",color:"blue",style:"open"});
});