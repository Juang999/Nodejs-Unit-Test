import {sum} from "../src/sum"

test("first test to sum", () => {
    const total = sum(1, 2)

    expect(total).toBe(3)
})