import React from 'react';
import {Spin} from 'antd'

const Pageloader =()=>{
    return(
        <div style={{ marginTop:2000, textAlign: 'center' }}>
        <Spin size="large" />
      </div>
    )
}
export default Pageloader