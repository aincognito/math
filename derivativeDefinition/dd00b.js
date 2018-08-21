define(['jquery', 'desmos'], function($, Desmos) {
    var target = this;

    target.width("100%");
    target.height(360);
var calc = Desmos.Calculator( target, {expressionsCollapsed:true} );
calc.setExpression({latex:"f(x) = ((x-3)^3 + 7(x-3)^2)/12 -2", color:"blue"});
calc.setExpression({latex:"a=0", sliderBounds: {min: -10,max: 10}});
calc.setExpression({latex:"(a,f(a))", color:"red"});
calc.setExpression({latex:"(3(a-3)^2 + 14(a-3))(x-a)/12 + f(a)", color:"red"});
});