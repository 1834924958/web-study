import React from 'react';
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

export default () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <Row wrap>
          <Col l="6"></Col>
          <Col l="7">
            <div style={styles.rightContent}>
              <img
                src={require('../../static/image/48_8386044.png')}
                alt=""
                style={styles.qrcode}
              />

            </div>
            <div style={styles.rightTitle}>科技让创意永无边界</div>
          </Col>
          <Col l="11">
            <div style={styles.title}>联系方式</div>
            <div style={styles.desc}>
              <img src={require('../../static/image/mail.png')} alt="" style={styles.image} />
              <div style={{ marginLeft: '10px' }}>123456@qq.com.com</div>
            </div>
            <div style={styles.desc}>
              <img src={require('../../static/image/adress.png')} alt="" style={{ ...styles.image2, marginLeft: '0.03rem' }} />
              <div style={{ marginLeft: '10px' }}>上海市徐汇区</div>
            </div>
          </Col>
        </Row>
      </div>
      <div style={styles.footer}>沪ICP备123456号-1</div>
    </div>
  );
};

const styles = {
  container: {
    background: '#353535',
    // minHeight: '6.52rem',
    // padding: '80px 0px 130px',
  },
  content: {
    maxWidth: '1200px',
    margin: ' 0 auto',
    padding: '80px 0px 130px',
  },
  title: {
    fontSize: '20px',
    lineHeight: '26px',
    color: '#fff',
  },
  desc: {
    fontSize: '16px',
    lineHeight: '20px',
    color: '#fff',
    textAlign: 'justify',
    marginTop: '27px',
    maxWidth: '830px',
    display: 'flex',
  },
  rightContent: {
    position: 'relative',
    height: '0.64rem',
    marginTop: '40px',
  },
  rightTitle: {
    color: '#ffffff',
    fontSize: '0.12rem',
    /* padding-left: 0.2rem; */
    width: '1.72rem',
    textAlign: 'center',
  },
  textBox: {
    paddingLeft: '100px',
  },
  qrcode: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '1.72rem',
    height:'20px',
  },
  image: {
    width: '0.26rem',
    height: '0.19rem',
  },
  image2: {
    width: '0.2rem',
    height: '0.25rem',
  },
  footer: {
    height: '34px',
    lineHeight: '34px',
    background: '#000000',
    color: '#ffffff',
    textAlign: 'center',
    lineAeight: '32px',
  },
};
