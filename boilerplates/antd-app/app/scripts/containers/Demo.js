import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { demo } from '../actions/demo.action';
import logo from '../../assets/images/wci_logo.png';
import styles from './demo.less';


@connect(
  state => ({
    demoData: state.demo.demoData,
  }),
  {
    demo,
  },
)
class Demo extends Component {
  static propTypes = {
    demo: PropTypes.func.isRequired,
    demoData: PropTypes.objectOf(PropTypes.any).isRequired,
  }

  componentWillMount() {
    this.props.demo({
      title: 'Hello wci',
      content: 'A Webpack Continuous integration for React、Ant Design',
    });
  }

  render() {
    return (
      <div className={styles.demo}>
        <img className={styles.logo} src={logo} alt="logo" />
        <Button type="primary">Primary</Button>
        <div className={styles.name}>
          {this.props.demoData.title}
        </div>
        <div>{this.props.demoData.content}</div>
      </div>
    );
  }
}

export default Demo;
