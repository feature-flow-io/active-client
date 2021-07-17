import Component from '@glimmer/component';

export default class SvgComponent extends Component {
  get calculatedSize() {
    const { size } = this.args;

    if (size) {
      return size;
    } else {
      return '20px';
    }
  }
}
