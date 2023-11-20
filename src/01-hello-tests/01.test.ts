import {splitIntoWords, sum} from "./01";
import {multi} from "./01";

test('sum should be correct', () => {
    //data
    const a = 5;
    const b = 10;
    const c = 3;

    //action
    const result1 = sum(a,b);
    const result2 = sum(b,c);
    //expected result
    expect(result1).toBe(15)
    expect(result2).toBe(13)
})



test('multiply should be correct', () => {
    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const result1 = multi(a,b);
    const result2 = multi(b,c);
    //expected result
    expect(result1).toBe(2)
    expect(result2).toBe(6)
})


test ('split into words should be correct', () => {
    //data
    const sent1 = 'Hello my friends';

    //actions
    const result1 =splitIntoWords(sent1)

    // expected result
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('Hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friends')
})