import React from 'react';
import Loadable from '@loadable/component';
import faker from 'faker';

import './semiotic.css';
const NetworkFrame = Loadable(() => import('semiotic/lib/NetworkFrame'));

export default class Network extends React.Component {
  frameProps = {
    /* --- Layout --- */
    nodeSizeAccessor: (d) => d.scaled * 20,
    networkType: {
      type: 'force',
      zoom: true,
      forceManyBody: (d) => -1 / d.centrality,
      //edgeStrength: 2,
      iterations: 50,
    },
    //nodeRenderMode: 'sketchy',
    edgeRenderMode: 'painty',
    edgeStyle: (d) => ({
      stroke: 'rgb(255, 121, 198)',
      fill: 'none',
      opacity: 0.4,
    }),
    nodeStyle: { fill: 'rgb(139, 233, 253)', stroke: 'rgb(68, 71, 90)' },
    //download: true,
    hoverAnnotation: true,
  };

  constructor(props) {
    super(props);
    this.state = { nodes: [], edges: [] };
  }

  update(data) {
    const ids = {};
    let min = 1000;
    let max = 0;
    const nodes = data.nodes;
    const edges = data.links;

    nodes.forEach((n) => {
      const name = faker.name.findName();
      ids[n.id] = name;
      min = n.centrality < min ? n.centrality : min;
      max = n.centrality > max ? n.centrality : max;
      n.id = name;
    });

    nodes.forEach((n) => {
      n.scaled = (n.centrality - min) / (max - min);
    });

    edges.forEach((e) => {
      e.source = ids[e.source];
      e.target = ids[e.target];
    });

    this.setState({ nodes: nodes, edges: edges });
  }

  render() {
    return (
      <NetworkFrame
        {...this.frameProps}
        nodes={this.state.nodes}
        edges={this.state.edges}
      />
    );
  }
}
