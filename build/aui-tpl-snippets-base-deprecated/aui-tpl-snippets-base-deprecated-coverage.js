if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-tpl-snippets-base-deprecated/aui-tpl-snippets-base-deprecated.js']) {
   __coverage__['build/aui-tpl-snippets-base-deprecated/aui-tpl-snippets-base-deprecated.js'] = {"path":"build/aui-tpl-snippets-base-deprecated/aui-tpl-snippets-base-deprecated.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0},"b":{"1":[0,0]},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":44},"end":{"line":1,"column":63}}},"2":{"name":"(anonymous_2)","line":11,"loc":{"start":{"line":11,"column":18},"end":{"line":11,"column":50}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":20,"column":69}},"2":{"start":{"line":3,"column":0},"end":{"line":8,"column":20}},"3":{"start":{"line":10,"column":0},"end":{"line":17,"column":2}},"4":{"start":{"line":12,"column":8},"end":{"line":12,"column":59}},"5":{"start":{"line":14,"column":8},"end":{"line":15,"column":23}}},"branchMap":{"1":{"line":14,"type":"cond-expr","locations":[{"start":{"line":14,"column":66},"end":{"line":14,"column":107}},{"start":{"line":15,"column":12},"end":{"line":15,"column":21}}]}},"code":["(function () { YUI.add('aui-tpl-snippets-base-deprecated', function (A, NAME) {","","var Lang = A.Lang,","","    AArray = A.Array,","","    STR_BLANK = '',","    STR_SPACE = ' ';","","A.TplSnippets = {","    getClassName: function(auiCssClass, cssClass) {","        var prefix = STR_SPACE + A.getClassName(STR_BLANK);","","        return AArray(cssClass).join(STR_SPACE) + (auiCssClass ? (prefix + AArray(auiCssClass).join(prefix)) :","            STR_BLANK);","    }","};","","","}, '3.1.0-deprecated.10', {\"requires\": [\"aui-template-deprecated\"]});","","}());"]};
}
var __cov_CVhNeYJ11uyecjSEApZKEQ = __coverage__['build/aui-tpl-snippets-base-deprecated/aui-tpl-snippets-base-deprecated.js'];
__cov_CVhNeYJ11uyecjSEApZKEQ.s['1']++;YUI.add('aui-tpl-snippets-base-deprecated',function(A,NAME){__cov_CVhNeYJ11uyecjSEApZKEQ.f['1']++;__cov_CVhNeYJ11uyecjSEApZKEQ.s['2']++;var Lang=A.Lang,AArray=A.Array,STR_BLANK='',STR_SPACE=' ';__cov_CVhNeYJ11uyecjSEApZKEQ.s['3']++;A.TplSnippets={getClassName:function(auiCssClass,cssClass){__cov_CVhNeYJ11uyecjSEApZKEQ.f['2']++;__cov_CVhNeYJ11uyecjSEApZKEQ.s['4']++;var prefix=STR_SPACE+A.getClassName(STR_BLANK);__cov_CVhNeYJ11uyecjSEApZKEQ.s['5']++;return AArray(cssClass).join(STR_SPACE)+(auiCssClass?(__cov_CVhNeYJ11uyecjSEApZKEQ.b['1'][0]++,prefix+AArray(auiCssClass).join(prefix)):(__cov_CVhNeYJ11uyecjSEApZKEQ.b['1'][1]++,STR_BLANK));}};},'3.1.0-deprecated.10',{'requires':['aui-template-deprecated']});
