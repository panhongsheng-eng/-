// xxx.js
import router from '@system.router';
export default {
    launch: function() {
        router.push ({
            uri: 'pages/index/index',
        });
    },
    data: {
        headTitle: 'HUAWEI 打造5G智慧型城市',
        paragraphFirst: '',
        paragraphSecond: '作为全球增速最快的主流云服务厂商，华为云已上线220多个云服务和210多个解决方案，发展了19,000多家合作伙伴和160万开发者，云市场上架应用4,000多个；启动全球抗疫行动，携手伙伴和科研机构为各地区提供华为云AI辅助诊断等服务，共克时艰。提出以云为基础、以AI为核心的开放技术参考架构“智能体”，联合伙伴在600多个场景落地，助力政企智能升级。全球已有700多个城市、253家世界500强企业选择华为作为数字化转型的合作伙伴，华为企业市场合作伙伴超过30,000家。',
        middleImage: '/common/wl.jpg',
    },
}