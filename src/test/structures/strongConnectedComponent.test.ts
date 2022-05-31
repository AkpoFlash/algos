import { StrongConnectedComponent } from '../../main/structures';
import { STRONG_CONNECTED_COMPONENT_TEST_DATA } from './resoures/strongConnectedComponent.resources';

describe('strongConnectedComponent', () => {
    it.each(STRONG_CONNECTED_COMPONENT_TEST_DATA)('should give correct component number', ({ graph, componentCount }) => {
        const scc = new StrongConnectedComponent(graph);
        expect(scc.componentCount()).toBe(componentCount);
    });

    it.each(STRONG_CONNECTED_COMPONENT_TEST_DATA)('should give correct vertice component id', ({ graph, vertices, componentId }) => {
        const scc = new StrongConnectedComponent(graph);
        vertices.forEach((vertice, index) => expect(scc.getComponentId(vertice)).toBe(componentId[index]));
    });
})
