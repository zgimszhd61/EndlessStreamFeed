'use client'
import React from 'react'
import { useInView } from 'react-intersection-observer';

const ExampleComponent = () => {
    // 使用 useInView hook 来检测元素是否在视口中
    const { ref, inView } = useInView({
      threshold: 0.5, // 视口中元素至少可见 50% 才触发
    });
  
    return (
      <div
        ref={ref}
        style={{
          height: '200px',
          backgroundColor: inView ? 'lightgreen' : 'lightcoral',
          transition: 'background-color 0.5s',
        }}
      >
        {inView ? 'In view!' : 'Not in view!'}
      </div>
  
    );
  };

export default ExampleComponent
