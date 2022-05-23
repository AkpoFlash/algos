import { StrongConnectedComponent } from '../../main/structures';
import { STRONG_CONNECTED_COMPONENT_TEST_DATA } from './resoures/strongConnectedComponent.resources';

describe('strongConnectedComponent', () => {
    it.each(STRONG_CONNECTED_COMPONENT_TEST_DATA)('should give correct component number', ({ graph, componentCount }) => {
        const scc = new StrongConnectedComponent(graph);
        expect(scc.componentCount()).toBe(componentCount);
    });

    it.each(STRONG_CONNECTED_COMPONENT_TEST_DATA)('should give correct verticle component id', ({ graph, verticles, componentId }) => {
        const scc = new StrongConnectedComponent(graph);
        verticles.forEach((verticle, index) => expect(scc.getComponentId(verticle)).toBe(componentId[index]));
    });
})
