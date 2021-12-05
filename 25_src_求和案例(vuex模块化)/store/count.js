// 求和相关的配置
export default {
    namespaced: true,
    // 准备 actions —— 用于响应数组中的动作
    actions: {
        jiaOdd(context, value) {
            console.log("actions中的jiaOdd被调用了");
            if (context.state.sum % 2) {
                context.commit("JIA", value);
            }
        },
        jiaWait(context, value) {
            console.log("actions中的jiaWait被调用了");
            setTimeout(() => {
                context.commit("JIA", value);
            }, 500);
        },
    },
    // 准备 mutations —— 用于操作数据（state）
    mutations: {
        JIA(state, value) {
            console.log("mutations中的JIA被调用了");
            state.sum += value;
        },
        JIAN(state, value) {
            console.log("mutations中的JIAN被调用了");
            state.sum -= value;
        },
    },
    // 准备 state —— 用于存储数据
    state: {
        sum: 0, // 当前的和
        school: "zafu",
        subject: "web",
    },
    // 准备 getters —— 用于将state中的数据进行加工
    getters: {
        bigSum(state) {
            return state.sum * 10;
        },
    },
};
