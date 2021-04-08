// index.js
import router from '@system.router';
export default {

    data: {
        cartText: '点击一下',
        cartStyle: 'cart-text',
        isCartEmpty: true,
        descriptionFirstParagraph: '华为的“1+8+N”这个产品战略是为了要打造未来5G全场景智慧生活而制定，面向5G高品质全场景的智慧生活，生态在各领域都可以体现出它的存在和价值。',
        imageList: ['/common/1.jpg', '/common/znhl.png', '/common/zl.jpg', '/common/st.jpg'],
    },

    swipeToIndex(index) {
        this.$element('swiperImage').swipeTo({index: index});
    },

    addCart() {
        if (this.isCartEmpty) {
            this.cartText = 'Cart + 1';
            this.cartStyle = 'add-cart-text';
            this.isCartEmpty = false;
        }
    },

    getFocus() {
        if (this.isCartEmpty) {
            this.cartStyle = 'cart-text-focus';
        }
    },

    lostFocus() {
        if (this.isCartEmpty) {
            this.cartStyle = 'cart-text';
        }
    },
    launch: function() {
        router.push ({
            uri: 'pages/detail/detail',
        });
    },
}