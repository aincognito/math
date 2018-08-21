
define(['jquery', 'desmos'], function($, Desmos) {
    var target = this;

    target.width("100%");
    target.height(360);
var calc = Desmos.Calculator( target, {expressionsCollapsed:true} );
calc.setExpression({latex:"2-4/x \\left\\{x<-4\\right\\}",color:"blue"});
calc.setExpression({latex:"(-4,3)",color:"blue"});
calc.setExpression({latex:"x+5 \\left\\{-4<x<-1\\right\\}",color:"purple"});
calc.setExpression({latex:"(-4,1), (-1,4)",color:"purple",style:"open"});
calc.setExpression({latex:"1/x \\left\\{-1<x<1\\right\\}",color:"red"});
calc.setExpression({latex:"(-1,-1)",color:"red"});
calc.setExpression({latex:"(1,1)",color:"red",style:"open"});
calc.setExpression({latex:"1+ x^{1/2} \\left\\{1<x<4\\right\\}",color:"orange"});
calc.setExpression({latex:"(1,2), (4,3)",color:"orange"});
calc.setExpression({latex:"6-x \\left\\{4<x<6\\right\\}",color:"green"});
calc.setExpression({latex:"(4,2), (6,0)",color:"green",style:"open"});
calc.setExpression({latex:"(6,-3)",color:"green"});
calc.setExpression({latex:"1+6/x \\left\\{6<x\\right\\}",color:"blue"});
calc.setExpression({latex:"(6,2)",color:"blue",style:"open"});
});