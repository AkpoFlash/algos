import { QuickFind } from "../../main/structures";
import { UNION_FIND_TEST_DATA } from "./resoures/unionFind.resources";

describe('unionFind', () => {
    it.each(UNION_FIND_TEST_DATA)('should find connecting (QuickFind)', ({ values, connection, hasConnection }) => {
        const qf = new QuickFind(values);
        connection.forEach(c => qf.union(...c));
        hasConnection.forEach(c => expect(qf.connected(c[0], c[1])).toBe(c[2]));
    });
});
