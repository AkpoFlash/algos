import { ConnectedComponent } from '../../main/structures';
import { CONNECTED_COMPONENT_TEST_DATA } from './resoures/connectedComponent.resources';

describe('connectedComponent', () => {
    it.each(CONNECTED_COMPONENT_TEST_DATA)('should give correct component number', ({ graph, componentCount }) => {
        const cc = new ConnectedComponent(graph);
        expect(cc.componentCount()).toBe(componentCount);
    });

    it.each(CONNECTED_COMPONENT_TEST_DATA)('should give correct verticle component id', ({ graph, verticles, componentId }) => {
        const cc = new ConnectedComponent(graph);
        verticles.forEach((verticle, index) => expect(cc.getComponentId(verticle)).toBe(componentId[index]));
    });
})
