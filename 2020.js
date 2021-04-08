// xxx.js
import router from '@system.router';
export default {
    launch: function() {
        router.push ({
            uri: 'pages/logo/logo',
        });
    },
    data: {
        headTitle: 'HUAWEI 2020年财报',
        paragraphFirst: '',
        paragraphSecond: '推出一站式AI开发平台ModelArts3.0，发布业界首个全生命周期知识计算解决方案，加速行业AI落地。开放鲲鹏全栈能力、昇腾全栈基础软硬件平台，使能伙伴和开发者加速创新，高效使用人工智能能力。在智能汽车解决方案领域，联合伙伴帮助车企造好车，30多个智能化部件将陆续上市。',
        middleImage: '/common/cb.jpg',
    },
}