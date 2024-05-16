import {reducer, StateType} from "./Reducer";

test('collapsed should be true', () => {
    //data
const state: StateType = {
    collapsed: false
}
    //action

    const newState = reducer(state, {type:'TOGGLE-COLLAPSED'})

    //expectation
    expect(newState.collapsed).toBe(true)

})

test('reducer should throw Error because action type is incorrect', () => {
    //data
const state: StateType = {
    collapsed: true
}
    //action

    const newState = reducer(state, {type:'TOGGLE-COLLAPSED'})

    //expectation
    expect(() => {
        reducer(state, {type: "FAKETYPE"})
    }).toThrowError();

})