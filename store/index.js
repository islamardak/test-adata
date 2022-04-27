export const state = () => ({
    items: [{
        id: 1,
        name: "Алматы",
        total: 100,
        actual: 15,
        children: [{
            id: 2,
            name: "Бостандыкский угд",
            total: 50,
            actual: 5,
        },
        {
            id: 3,
            name: "Ауэзовский угд",
            totalQuantity: 200,
            actual: 10,
        },
        ],
    },],
})
export const mutations = {
    ADD_TASK: (state, item) => {
        console.log(item)
        state.items = [
            item,
            ...state.items,
        ]
    },
    REMOVE_TASK(state, index) {
        console.log(index);
        state.items.splice(state.items.indexOf(index), 1)
    },

    CHANGE_TASK_DATA(state, { index, data }) {
        for (let item in state.items[index]) {
            state.items[index][item] = data[item]
        }
    }
}
export const actions = {}
export const getters = {

    // getName: (state) => state.name,
    // getTotal: (state) => state.total,
    // getActual: (state) => state.actual
}