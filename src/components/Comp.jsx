import * as d3 from 'd3';
import React from 'react';
import ReactDOM from 'react-dom';

import style from './styles/Comp.scss';

class Comp extends React.Component {
  static propTypes() {
    return {
      width: React.PropTypes.number.isRequired,
      height: React.PropTypes.number.isRequired
    };
  }

  componentDidMount() {
    const svg = d3.select(ReactDOM.findDOMNode(this));

    svg.append('text')
      .attr('class', style.text)
      .attr('x', this.props.width / 2)
      .attr('y', this.props.height / 2)
      .attr('transform', 'rotate(30)')
      .text('this is not a test');
  }

  render() {
    console.log('is the source map working?');
    return (
      <svg
        className={style.Comp}
        width={this.props.width}
        height={this.props.height}
      />
    );
  }
}

Comp.defaultProps = {
  width: 1000,
  height: 1000
};
// const pureComp = () => (
//   <div className={style.pureComp}>
//     pureComp
//   </div>
//   );


export default Comp;
