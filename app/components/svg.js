import Component from '@glimmer/component';

export default class SvgComponent extends Component {
  get calculatedSize() {
    const { size } = this.args;
    return size ?? '18px';
  }
}
