//配置信息  
require.config({
    //定义所有JS文件的基本路径,实际这可跟script标签的data-main有相同的根路径  
    baseUrl: "./scripts"
    //定义各个JS框架路径名,不用加后缀 .js  
    , paths: {
        "jquery": ["http://libs.baidu.com/jquery/2.0.3/jquery", "lib/jquery/jquery-1.9.1.min"] //把对应的 jquery 这里写对即可  
        , "workjs01": "work/workjs01"
        , "workjs02": "work/workjs02"
        , "underscore": "" //路径未提供，可网上搜索然后加上即可  
    }
    //包含其它非AMD规范的JS框架  
    , shim: {
        "underscore": {
            "exports": "_"
        }
    }

});
//按不同先后的依赖关系加载各个JS文件  
require(["jquery", "workjs01"], function ($, w1) {
    require(['workjs02']);
});  