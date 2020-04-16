import vegaEmbed from 'vega-embed';
import spec from './histogram.json';

export default (res) => {
  const histogram = Object.assign(spec, { data: { values: res[0] } });
  histogram.encoding.color.condition.test = `datum.binned < ${res[1]} || datum.binned > ${res[2]}`;

  vegaEmbed('#viz', histogram);
};
