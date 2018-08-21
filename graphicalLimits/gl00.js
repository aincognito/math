
define(['jquery', 'desmos'], function($, Desmos) {
    var target = this;

    target.width("100%");
    target.height(360);
var calc = Desmos.Calculator( target, {expressionsCollapsed:true} );
calc.setExpression({latex:"(x^3 + 7x^2)/6",color:"blue"});
calc.setExpression({latex:"(-4,8),(0,0),(2,6)",color:"blue"});
calc.setMathBounds({
  left: "-9",
  right: "4",
  bottom: "-3",
  top: "10"
});
});