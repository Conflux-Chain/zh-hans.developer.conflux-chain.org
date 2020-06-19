(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return p}));var a=t(2),c=t(9),r=(t(0),t(163)),l={id:"sending_transactions",title:"\u53d1\u9001\u4ea4\u6613",source_url:"https://github.com/Conflux-Chain/conflux-portal-docs/blob/master/docs/en/portal/Main_Concepts/Sending_Transactions.md",custom_edit_url:"https://github.com/Conflux-Chain/zh-hans.developer.conflux-chain.org/edit/master/docs/conflux-portal/Main_Concepts/Sending_Transactions.md"},o={id:"conflux-portal/Main_Concepts/sending_transactions",isDocsHomePage:!1,title:"\u53d1\u9001\u4ea4\u6613",description:"\u672c\u6587\u6863\u5c06\u6307\u5bfc\u60a8\u64b0\u5199\u5e76\u53d1\u9001\u60a8\u7684\u7b2c\u4e00\u7b14\u4ea4\u6613\u8fdb\u5165Conflux\u7f51\u7edc\uff0c\u5305\u62ecConflux\u7684\u4ea4\u6613\u6280\u672f\u89c4\u8303\u4ecb\u7ecd\uff0c\u4ee5\u53ca\u5728Conflux\u7f51\u7edc\u4e2d\u8ddf\u8e2a\u53d1\u9001\u4ea4\u6613\u72b6\u6001\u548c\u9519\u8bef\u5904\u7406\u7684\u57fa\u672c\u6280\u5de7\u3002",source:"@site/docs/conflux-portal/Main_Concepts/Sending_Transactions.md",permalink:"/docs/conflux-portal/Main_Concepts/sending_transactions",editUrl:"https://github.com/Conflux-Chain/zh-hans.developer.conflux-chain.org/edit/master/docs/conflux-portal/Main_Concepts/Sending_Transactions.md",lastUpdatedAt:1592537167,sidebar:"docs",previous:{title:"\u83b7\u5f97\u8d26\u6237\u4fe1\u606f",permalink:"/docs/conflux-portal/Main_Concepts/accessing_accounts"},next:{title:"Portal \u7684 Provider API",permalink:"/docs/conflux-portal/API_Reference/provider_api"}},i=[{value:"\xa0 \xa0\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u901a\u8fc7JavaScript\u7a0b\u5e8f\u53d1\u9001\u4ea4\u6613",id:"\u901a\u8fc7javascript\u7a0b\u5e8f\u53d1\u9001\u4ea4\u6613",children:[]},{value:"\u4ea4\u6613\u8ffd\u6eaf",id:"\u4ea4\u6613\u8ffd\u6eaf",children:[{value:"1.\u7acb\u5373\u88abRPC\u63d0\u4f9b\u8005\u62d2\u7edd",id:"1\u7acb\u5373\u88abrpc\u63d0\u4f9b\u8005\u62d2\u7edd",children:[]},{value:"2.\u5361\u5728\u4e86\u4ea4\u6613\u6c60\u91cc",id:"2\u5361\u5728\u4e86\u4ea4\u6613\u6c60\u91cc",children:[]},{value:"3.\u5df2\u6316\u77ff\u4f46\u8df3\u8fc7",id:"3\u5df2\u6316\u77ff\u4f46\u8df3\u8fc7",children:[]},{value:"4.\u6316\u77ff\u5e76\u6267\u884c\u540e\uff0c\u51fa\u73b0\u4e86\u4e00\u4e9b\u9519\u8bef\u7684\u7ed3\u679c",id:"4\u6316\u77ff\u5e76\u6267\u884c\u540e\uff0c\u51fa\u73b0\u4e86\u4e00\u4e9b\u9519\u8bef\u7684\u7ed3\u679c",children:[]},{value:"5.\u6316\u77ff\u5e76\u6267\u884c\uff0c\u4ea4\u6613\u7ed3\u679c\u6ca1\u6709\u9519\u8bef",id:"5\u6316\u77ff\u5e76\u6267\u884c\uff0c\u4ea4\u6613\u7ed3\u679c\u6ca1\u6709\u9519\u8bef",children:[]}]}],b={rightToc:i};function p(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u672c\u6587\u6863\u5c06\u6307\u5bfc\u60a8\u64b0\u5199\u5e76\u53d1\u9001\u60a8\u7684\u7b2c\u4e00\u7b14\u4ea4\u6613\u8fdb\u5165Conflux\u7f51\u7edc\uff0c\u5305\u62ecConflux\u7684\u4ea4\u6613\u6280\u672f\u89c4\u8303\u4ecb\u7ecd\uff0c\u4ee5\u53ca\u5728Conflux\u7f51\u7edc\u4e2d\u8ddf\u8e2a\u53d1\u9001\u4ea4\u6613\u72b6\u6001\u548c\u9519\u8bef\u5904\u7406\u7684\u57fa\u672c\u6280\u5de7\u3002"),Object(r.b)("p",null,"\u5bf9\u4e8e\u666e\u901a\u7528\u6237\uff0c\u5efa\u8bae\u4f7f\u7528Conflux Portal\u8fd9\u6837\u7684Conflux\u94b1\u5305\uff0c\u65b9\u4fbf\u3001\u5b89\u5168\u3001\u6613\u7528\u3002"),Object(r.b)("p",null,"\u5bf9\u4e8e\u60f3\u5728\u81ea\u5df1\u7684\u7a0b\u5e8f\u4e2d\u7f16\u5199\u548c\u53d1\u9001\u4ea4\u6613\u7684\u5f00\u53d1\u8005\u6765\u8bf4\u3002Conflux\u4e3a\u60a8\u63d0\u4f9b\u4e86\u591a\u4e2a\u4e0d\u540c\u8bed\u8a00\u7684SDK\u3002"),Object(r.b)("p",null,"JavaScript: js-conflux-sdk"),Object(r.b)("p",null,"Java: java-conflux-sdk"),Object(r.b)("p",null,"Go: go-conflux-sdk"),Object(r.b)("p",null,"\u4ee5\u4e0b\u6587\u6863\u5c06\u4ee5js-conflux-sdk\u4e3a\u4f8b\u3002"),Object(r.b)("p",null,"\u7f16\u5199\u5e76\u53d1\u9001\u6211\u7684\u7b2c\u4e00\u4e2a\u4e8b\u52a1"),Object(r.b)("p",null,"\xa0 \xa0 \u5728Conflux Portal\u4e0a\u521b\u5efa\u4e00\u4e2a\u8d26\u6237"),Object(r.b)("p",null,"\xa0 \xa0 \xa0 1.\u5b89\u88c5",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/conflux-portal"}),"Conflux Portal")),Object(r.b)("p",null,"\xa0 \xa0 \xa0 2. \u751f\u6210\u4e00\u4e2a\u65b0\u8d26\u53f7"),Object(r.b)("p",null,"\xa0 \xa0 \xa0 3.\u4ece\u9f99\u5934\u5904\u83b7\u53d6\u6d4b\u8bd5\u7f51\u4ee3\u5e01"),Object(r.b)("p",null,"\xa0 \xa0 \xa0 4.\u5bfc\u51fa\u5e76\u590d\u5236\u4f60\u7684\u79c1\u94a5\u5230\u67d0\u4e2a\u5730\u65b9\uff0c\u6211\u4eec\u4ee5\u540e\u4f1a\u7528\u5230\u5b83"),Object(r.b)("h3",{id:"\u5b89\u88c5"},"\xa0 \xa0\u5b89\u88c5"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"npm install js-conflux-sdk")),Object(r.b)("h3",{id:"\u901a\u8fc7javascript\u7a0b\u5e8f\u53d1\u9001\u4ea4\u6613"},"\u901a\u8fc7JavaScript\u7a0b\u5e8f\u53d1\u9001\u4ea4\u6613"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u9700\u8981js-conflux-sdk\uff0c\u5e76\u8bbe\u7f6e\u4e00\u4e2aConflux\u63d0\u4f9b\u8005\u3002\u5bf9\u4e8eConflux \u6d4b\u8bd5\u7f51\u5df2\u6709\u4e00\u4e2a\u8282\u70b9\u63d0\u4f9b\uff0c",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://testnet-jsonrpc.conflux-chain.org:12537"}),"http://testnet-jsonrpc.conflux-chain.org:12537"),"\u3002\u5b83\u4e5f\u53ef\u4ee5\u6539\u6210\u4efb\u4f55\u5176\u4ed6Conflux\u8282\u70b9\uff0c\u751a\u81f3\u662f\u4f60\u81ea\u5df1\u8bbe\u7f6e\u7684\u8282\u70b9\u3002")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"const { Conflux, util } = require('js-conflux-sdk');\nconst cfx = new Conflux({\n  url: 'http://testnet-jsonrpc.conflux-chain.org:12537',\n  defaultGasPrice: 100, // The default gas price of your following transactions\n  defaultGas: 1000000, // The default gas of your following transactions\n  logger: console,\n});\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5c06\u79c1\u94a5\u7c98\u8d34\u5230\u7a0b\u5e8f\u4e2d")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const PRIVATE_KEY = 'Your Private Key';\n// const PRIVATE_KEY = '0x5f15f9e52fc5ec6f77115a9f306c120a7e80d83115212d33a843bb6b7989c261';\nconst account = cfx.Account(PRIVATE_KEY); // create account instance\nconst receiver = '0xa70ddf9b9750c575db453eea6a041f4c8536785a'\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u4ea4\u6613\u7ec4\u6210\u90e8\u5206\uff0c\u4e0b\u9762\u662f\u53ef\u4ee5\u586b\u5199\u7684\u5b57\u6bb5\uff1a",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"nonce"),": \u53ef\u9009\uff0c\u4e00\u4e2a\u4ea4\u6613\u7684\u58f0\u660e\uff0c\u4ee5\u4fdd\u8bc1\u4f60\u7684\u4ea4\u6613\u53d1\u9001\u987a\u5e8f\uff0c\u4ece\u67d0\u4e2a\u968f\u673a\u7684\u5927\u6570\u5f00\u59cb\uff0c\u7136\u540e\u9010\u4e2a\u589e\u52a0\u3002\u5982\u679c\u7f3a\u5931\uff0ccfx_getNextNonce\u7684\u7ed3\u679c\u4f1a\u81ea\u52a8\u586b\u5165\uff0c\u5b83\u9002\u7528\u4e8e\u4e00\u822c\u60c5\u51b5\u3002\u6709\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6bd4\u5982\u77ed\u65f6\u95f4\u5185\u53d1\u9001\u5927\u91cf\u7684\u4ea4\u6613\u3002\u5efa\u8bae\u81ea\u884c\u7ef4\u62a4nonce\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"gasPrice"),":\u53ef\u9009\uff0c\u5728Drip\u4e2d\uff0c\u4f60\u5e0c\u671b\u4e3a\u6bcf\u4e00\u6b21\u6d88\u8017\u7684\u71c3\u6599\u652f\u4ed8\u7684\u4ef7\u683c\u3002\u5982\u679c\u7f3a\u5931\uff0c\u5c06\u81ea\u52a8\u586b\u5199cfx_gasPrice\u7684\u7ed3\u679c\uff0c\u4e5f\u5c31\u662f\u6700\u8fd1\u4ea4\u6613\u7684\u4e2d\u4f4d\u6570\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"gas:"),"\u53ef\u9009\uff0c\u60a8\u5e0c\u671b\u5728\u4ea4\u6613\u4e2d\u4f7f\u7528\u7684\u6700\u5927\u71c3\u6599\u6d88\u8017\u3002\u5728\u4ea4\u6613\u5904\u7406\u7ed3\u675f\u540e\uff0c\u5982\u679c used_gas >= gas * 0.75\uff0c\u672a\u4f7f\u7528\u7684\u71c3\u6599\u8d39\u5c06\u88ab\u9000\u8fd8\u3002\u5982\u679c\u7f3a\u5931\uff0c\u5c06\u81ea\u52a8\u586b\u5199cfx_estimateGasAndCollateral\u7684\u7ed3\u679c\uff0c\u5b83\u9002\u7528\u4e8e\u4e00\u822c\u573a\u666f\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"to"),": \u4ea4\u6613\u7684\u63a5\u6536\u65b9\uff0c\u53ef\u4ee5\u662f\u4e2a\u4eba\u8d26\u6237(\u4ee51\u5f00\u5934)\u6216\u5408\u540c(\u4ee58\u5f00\u5934)\u3002\u8fd9\u91cc\u7559\u4e00\u4e2a\u7a7a\uff0c\u53ef\u4ee5\u90e8\u7f72\u4e00\u4e2a\u5408\u540c\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"value"),"\uff1a\u8981\u8f6c\u79fb\u7684\u4ef7\u503c\uff08\u4ee5drip\u4e3a\u5355\u4f4d\uff09\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"storageLimit"),": \u53ef\u9009\u7684\uff0c\u4f60\u60f3\u5728\u4ea4\u6613\u4e2d\u62b5\u62bc\u7684\u6700\u5927\u5b58\u50a8\u91cf\uff08\u4ee5Byte\u4e3a\u5355\u4f4d\uff09\u3002\u5982\u679c\u7f3a\u5931\uff0c\u5c06\u81ea\u52a8\u586b\u5199cfx_estimateGasAndCollateral\u7684\u7ed3\u679c\uff0c\u5b83\u9002\u7528\u4e8e\u4e00\u822c\u7684\u4ea4\u6613\u573a\u666f\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"epochHeight"),": \u53ef\u9009\uff0c\u4e00\u4e2a\u4ea4\u6613\u662f\u53ea\u80fd\u5728","[epochHeight - 10000, epochHeight + 10000]","\u8303\u56f4\u5185\u7684epochs\u5185\u8fdb\u884c\u9a8c\u8bc1\uff0c\u6240\u4ee5\u8fd9\u662f\u4e00\u4e2a\u8d85\u65f6\u673a\u5236\u3002\u5982\u679c\u7f3a\u5931\uff0c\u5c06\u81ea\u52a8\u586b\u5199cfx_epochNumber\u7684\u7ed3\u679c\uff0c\u5b83\u9002\u7528\u4e8e\u4e00\u822c\u573a\u666f\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"data"),"\uff1a\u53ef\u9009\uff0c\u53ef\u4ee5\u662f\u4ea4\u6613\u7684\u9644\u4ef6\u6d88\u606f\uff0c\u4e5f\u53ef\u4ee5\u662f\u5408\u7ea6\u8c03\u7528\u7684\u51fd\u6570\u7b7e\u540d\u3002\u5982\u679c\u7f3a\u5931\uff0c\u5219\u4f1a\u586b\u5165\u4e00\u4e2a\u7a7a\u503c\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"chain ID"),"\uff1a\u53ef\u9009\uff0c\u7528\u4e8e\u5904\u7406\u786c\u5206\u53c9\u6216\u9632\u6b62\u4ea4\u6613\u91cd\u5165\u653b\u51fb\u3002\u5982\u679c\u7f3a\u5931\uff0c\u5c06\u586b\u51650\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"from"),"\uff1a\u7528\u4e8e\u7b7e\u7f72\u4ea4\u6613\u7684\u53d1\u9001\u8005\u8d26\u6237\uff08\u542b\u79c1\u94a5\uff09\u3002")))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"let txParams = {\n  from: account, // from account instance and will by sign by account.privateKey\n  // nonce \n  // gasPrice\n  // gas\n  to: receiver, // accept address string or account instance\n  value: util.unit.fromCFXToDrip(0.125), // use unit to transfer from 0.125 CFX to Drip\n  // storageLimit\n  // epochHeight\n  // data\n};\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u901a\u8fc7\u53d1\u9001 ",Object(r.b)("inlineCode",{parentName:"li"},"cfx.sendTransaction")," \uff0c\u5f97\u5230\u8fd4\u56de\u7684\u4ea4\u6613\u54c8\u5e0c\u503c\uff0c\u7136\u540e\u53ef\u4ee5\u5728",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://confluxscan.io/"}),"Conflux Scan"),"\u4e0a\u641c\u7d22\u54c8\u5e0c\u503c\u67e5\u770b\u4ea4\u6613\u8be6\u60c5\u3002")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"async function main() {\n  const txHash = await cfx.sendTransaction(txParams);\n  console.log(txHash);\n}\nmain().catch(e => console.error(e));\n")),Object(r.b)("h2",{id:"\u4ea4\u6613\u8ffd\u6eaf"},"\u4ea4\u6613\u8ffd\u6eaf"),Object(r.b)("p",null,"\xa0 \xa0 \xa0 \u4ea4\u6613\u53d1\u9001\u540e\u53ef\u80fd\u5904\u4e8e\u4ee5\u4e0b\u51e0\u79cd\u4e0d\u540c\u7684\u72b6\u6001\uff1a"),Object(r.b)("h3",{id:"1\u7acb\u5373\u88abrpc\u63d0\u4f9b\u8005\u62d2\u7edd"},"1.\u7acb\u5373\u88abRPC\u63d0\u4f9b\u8005\u62d2\u7edd"),Object(r.b)("p",null,"\u5f53\u63d0\u4f9b\u8005\u6536\u5230 cfx_sendRawTransaction RPC \u8c03\u7528\u540e\uff0c\u5b83\u4f1a\u5c1d\u8bd5\u505a\u57fa\u672c\u7684\u9a8c\u8bc1\u5e76\u5c06\u5176\u63d2\u5165\u5230\u4ea4\u6613\u6c60\u4e2d\u3002\u5982\u679c\u4ea4\u6613\u6709\u660e\u663e\u7684\u9519\u8bef\uff0c\u4f8b\u5982\uff1aRLP\u89e3\u7801\u9519\u8bef\uff0c\u7b7e\u540d\u9a8c\u8bc1\u9519\u8bef\uff0c\u5b83\u5c06\u88ab\u7acb\u5373\u62d2\u7edd\uff0c\u5426\u5219\uff0c\u5b83\u5c06\u88ab\u63d2\u5165\u4ea4\u6613\u6c60\u5e76\u5f00\u59cb\u7b49\u5f85\u3002\u5426\u5219\uff0c\u5c06\u88ab\u63d2\u5165\u4ea4\u6613\u6c60\uff0c\u5f00\u59cb\u7b49\u5f85\u6316\u77ff\uff0cRPC\u5c06\u8fd4\u56de\u4e00\u4e2a\u4ea4\u6613\u54c8\u5e0c\u3002"),Object(r.b)("h3",{id:"2\u5361\u5728\u4e86\u4ea4\u6613\u6c60\u91cc"},"2.\u5361\u5728\u4e86\u4ea4\u6613\u6c60\u91cc"),Object(r.b)("p",null,"\u4f46\u662f\uff0c\u4f60\u5f97\u5230\u7684\u4ea4\u6613\u54c8\u5e0c\u503c\u5e76\u4e0d\u4ee3\u8868\u5b83\u5df2\u7ecf\u6210\u529f\u6267\u884c\u4e86\u3002Conflux\u4ea4\u6613\u4f1a\u5c3d\u53ef\u80fd\u591a\u5730\u5c06\u5df2\u9a8c\u8bc1\u7684\u4ea4\u6613\u5b58\u50a8\u5728\u6c60\u5b50\u91cc\uff0c\u5373\u4f7f\u662f\u90a3\u4e9bnonce\u4e0e\u9884\u671f\u4e0d\u7b26\u6216\u8005\u4f59\u989d\u4e0d\u8db3\u4ee5\u652f\u4ed8",Object(r.b)("inlineCode",{parentName:"p"},"gas * gasPrice + value")," \u7684\u4ea4\u6613."),Object(r.b)("p",null,"\u6240\u4ee5\uff0c\u5982\u679c\u4f60\u7b49\u4e861\u5206\u949f\uff0c\u5728",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://confluxscan.io/"}),"ConfluxScan"),"\u4e2d \u4ecd\u7136\u627e\u4e0d\u5230\u4ea4\u6613\uff0c\u90a3\u4e48\u5b83\u5f88\u53ef\u80fd\u88ab\u5361\u5728\u4ea4\u6613\u6c60\u4e2d\u4e86\u3002"),Object(r.b)("p",null,"\u53ef\u4f7f\u7528"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"cfx_getTransactionByHash\ncfx_getBalance\ncfx_getNextNonce\n")),Object(r.b)("p",null,"\u6765\u68c0\u67e5\u4f60\u7684\u4ea4\u6613\u662f\u5426\u5df2\u7ecf\u51c6\u5907\u597d\u88ab\u6253\u5305\u548c\u6316\u77ff\u4e86\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),'curl -X POST --data \'{"jsonrpc": "2.0", "method": "cfx_getBalance", "params":["0xfbe45681ac6c53d5a40475f7526bac1fe7590fb8"], "id":1}\' -H "Content-Type: application/json" http://testnet-jsonrpc.conflux-chain.org:12537\n')),Object(r.b)("p",null,"\u7136\u540e\u5c06\u7ed3\u679c\u4e0evalue + gas * gasPrice\u8fdb\u884c\u6bd4\u8f83\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),'curl -X POST --data \'{"jsonrpc": "2.0", "method": "cfx_getNextNonce", "params":["0xfbe45681ac6c53d5a40475f7526bac1fe7590fb8"], "id":1}\' -H "Content-Type: application/json" http://testnet-jsonrpc.conflux-chain.org:12537\u3002\n')),Object(r.b)("p",null,"\u7136\u540e\u5c06\u7ed3\u679c\u4e0e\u4f60\u586b\u5199\u7684nonce\u8fdb\u884c\u6bd4\u8f83\u3002\n\u4f60\u53ef\u4ee5\u901a\u8fc7cfx_getTransactionByHash\u83b7\u53d6\u4ea4\u6613\u7ec6\u8282\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),'curl -X POST --data \'{"jsonrpc": "2.0", "method": "cfx_getTransactionByHash", "params":["0x53fe995edeec7d241791ff32635244e94ecfd722c9fe90f34ddf59082d814514"], "id":1}\' -H "Content-Type: application/json" http://testnet-jsonrpc.conflux-chain.org:12537\u3002\n')),Object(r.b)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u80fd\u5e0c\u671b\u5728\u4fee\u590dnonce\u6216\u4f59\u989d\u95ee\u9898\u540e\u53d1\u9001\u4e00\u4e2a\u65b0\u7684\u4ea4\u6613\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u7528\u76f8\u540c\u7684nonce\u66ff\u6362\u6c60\u4e2d\u7684\u4ea4\u6613\uff0c\u9700\u8981\u66f4\u9ad8\u7684gasPrice\u3002"),Object(r.b)("h3",{id:"3\u5df2\u6316\u77ff\u4f46\u8df3\u8fc7"},"3.\u5df2\u6316\u77ff\u4f46\u8df3\u8fc7"),Object(r.b)("p",null,'\u5982\u679c\u4f60\u53ef\u4ee5\u5728ConfluxScan\u4e0a\u67e5\u770b\u4ea4\u6613\uff0c\u4f46\u5b83\u7684\u72b6\u6001\u603b\u662f\u663e\u793a "\u8df3\u8fc7"\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u6ca1\u6709\u901a\u8fc7\u6267\u884c\u5f15\u64ce\u7684\u57fa\u672c\u9a8c\u8bc1\uff08\u6bd4\u5982\uff0cnonce\u4e0d\u5339\u914d\uff0c\u4f59\u989d\u65e0\u6cd5\u652f\u4ed8\u57fa\u672c\u8d39\u7528\uff09\u800c\u88ab\u8df3\u8fc7\u3002'),Object(r.b)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u80fd\u8981\u5728\u4fee\u590dnonce\u6216\u4f59\u989d\u95ee\u9898\u540e\u53d1\u9001\u4e00\u4e2a\u65b0\u7684\u4ea4\u6613\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u7528\u76f8\u540c\u7684nonce\u66ff\u6362\u6c60\u4e2d\u7684\u4ea4\u6613\uff0c\u9700\u8981\u66f4\u9ad8\u7684gasPrice\u3002"),Object(r.b)("h3",{id:"4\u6316\u77ff\u5e76\u6267\u884c\u540e\uff0c\u51fa\u73b0\u4e86\u4e00\u4e9b\u9519\u8bef\u7684\u7ed3\u679c"},"4.\u6316\u77ff\u5e76\u6267\u884c\u540e\uff0c\u51fa\u73b0\u4e86\u4e00\u4e9b\u9519\u8bef\u7684\u7ed3\u679c"),Object(r.b)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u4f1a\u5728ConfluxScan\u4e0a\u770b\u5230\u4e00\u4e2a\u9519\u8bef\u4fe1\u606f\u3002\u8fd9\u53ef\u80fd\u662f\u8fd9\u51e0\u4e2a\u539f\u56e0\uff1a"),Object(r.b)("p",null,"a. \xa0EVM\u9519\u8bef\uff1a \u6bd4\u5982assert\uff0crequire"),Object(r.b)("p",null,"b. \u4f59\u989d\u8db3\u4ee5\u652f\u4ed8\u57fa\u672c\u8d39\u7528\uff0c\u4f46\u4e0d\u8db3\u4ee5\u652f\u4ed8\u5168\u90e8\u4ea4\u6613\u8d39\u7528\u3002"),Object(r.b)("p",null,"c. \xa0\u8fbe\u5230\u5b58\u50a8\u4e0a\u9650 \xa0"),Object(r.b)("p",null,"\xa0\u6700\u597d\u5728Remix IDE\u4e2d\u4ed4\u7ec6\u68c0\u67e5\u4f60\u7684\u5408\u7ea6\uff0c\u5e76\u901a\u8fc7 cfx_estimateGasAndCollateral RPC\u68c0\u67e5\u5b58\u50a8\u6781\u9650\u548c\u4f59\u989d\u95ee\u9898\u3002"),Object(r.b)("h3",{id:"5\u6316\u77ff\u5e76\u6267\u884c\uff0c\u4ea4\u6613\u7ed3\u679c\u6ca1\u6709\u9519\u8bef"},"5.\u6316\u77ff\u5e76\u6267\u884c\uff0c\u4ea4\u6613\u7ed3\u679c\u6ca1\u6709\u9519\u8bef"),Object(r.b)("p",null,"\u606d\u559c\uff01\u4f60\u7684\u7b2c\u4e00\u7b14\u4ea4\u6613\u5b8c\u6210\u4e86\uff01"))}p.isMDXComponent=!0},163:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return j}));var a=t(0),c=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,c=function(e,n){if(null==e)return{};var t,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var b=c.a.createContext({}),p=function(e){var n=c.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return c.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},f=c.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,j=u["".concat(l,".").concat(f)]||u[f]||s[f]||r;return t?c.a.createElement(j,o(o({ref:n},b),{},{components:t})):c.a.createElement(j,o({ref:n},b))}));function j(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=f;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<r;b++)l[b]=t[b];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);