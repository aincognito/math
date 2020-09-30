define(['jquery', 'desmos'], function($, Desmos) {
    var target = this;

    target.width("100%");
    target.height(360);
var calc = Desmos.Calculator( target, {expressionsCollapsed:true} );
calc.setExpression({latex:"f(x) = \arctan(x)", color:"blue"});
calc.setExpression({latex:"a=0", sliderBounds: {min: -10,max: 10}});
calc.setExpression({latex:"(a,f(a))", color:"red"});
calc.setExpression({latex:"g(x) = 1/(1+x^2)", color:"purple"});
calc.setExpression({latex:"(a,g(a))", color:"purple"});
calc.setExpression({latex:"g(a)(x-a) + f(a)", color:"red"});
});
