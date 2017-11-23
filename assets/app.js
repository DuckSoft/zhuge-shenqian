let app = new Vue({
    el: "#app",
    data: {
        user_input: "",
        result: "请开始您的求签之路。"
    },
    methods: {
        getRandom: function() {
            this.result = qian[Math.floor(Math.random()*384)];
        },
        getSpecific: function() {
            this.result = (/^[\u4e00-\u9fa5]+$/.test(this.user_input)) ? (
                qian[getNumber(this.user_input)]
            ) : (
                "您似乎并没有输入汉字！"
            );
        }
    }
});
