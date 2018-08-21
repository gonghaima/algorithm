import test from "../../node_modules/ava";
import { ReverseString } from "../../src/General/reverseString";

test("String Reversal should reverse string", t => {
    const actual = ReverseString("Hello World!");
    t.is(actual, "!dlroW olleH")
});
