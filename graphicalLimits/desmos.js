
define(['jquery', 'desmos'], function($, Desmos) {
    var target = this;

    target.width("100%");
    target.height(360);
var calc = Desmos.Calculator( target, {expressionsCollapsed:true} );
calc.setExpression({latex:"(x^2-1)/(x-1)",color:"blue"});
calc.setExpression({latex:"(1,2)",color:"blue",style:"open"});
calc.setExpression({latex:"-2^x",color:"green"});
calc.setExpression({latex:"2^x\{0<x<2\}",color:"red"});
calc.setExpression({latex:"3-x \\left\\{0<x<2\\right\\}",color:"purple"});
calc.setExpression({latex:"(t, 2^t)", domain: {min: 0,max: 2}, color:"orange"});
calc.setMathBounds({
  left: "-1",
  right: "6",
  bottom: "-10",
  top: "4"
});
});