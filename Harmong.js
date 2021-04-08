// xxx.js
import router from '@system.router';
export default {
    launch: function() {
        router.push ({
            uri: 'pages/2020/2020',
        });
    },
    data: {
        headTitle: 'HUAWEI 鸿蒙(HarmongOS)系统生态',
        paragraphFirst: '',
        paragraphSecond: '鸿蒙能兼容安卓的APK，是保证华为手机的软件生态不脱轨的关键，而安卓系统的APP那是彻彻底底的跟谷歌毛钱关系也没有！APK这种格式是公有的，和很多linux的APP一样，在开源这个大旗下，谁家的都不能有所谓的专利保护和私有。所以，华为的目标很简单，华为系的手机全部改用鸿蒙，利用兼容APK稳定软件生态，逐步砸钱把鸿蒙的软件生态规模化。',
        middleImage: '/common/st.jpg',
    },
}