import { ConnectedComponent } from '../../main/structures';
import { CONNECTED_COMPONENT_TEST_DATA } from './resoures/connectedComponent.resources';

describe('connectedComponent', () => {
    it.each(CONNECTED_COMPONENT_TEST_DATA)('should give correct component number', ({ graph, componentCount }) => {
        const cc = new ConnectedComponent(graph);
        expect(cc.componentCount()).toBe(componentCount);
    });

    it.each(CONNECTED_COMPONENT_TEST_DATA)('should give correct vertice component id', ({ graph, vertices, componentId }) => {
        const cc = new ConnectedComponent(graph);
        vertices.forEach((vertice, index) => expect(cc.getComponentId(vertice)).toBe(componentId[index]));
    });
})
