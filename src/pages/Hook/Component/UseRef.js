import React, {
  PureComponent,
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';

class ClassSon extends PureComponent {
  state = {
    nama: 'classSon',
  };

  sayHelloWorld = () => {
    alert('hello world,我是class组件');
  };

  render() {
    return <div>我是classSon</div>;
  }
}

const FunctionSon = (props, ref) => {
  const sayHelloWorld = () => {
    alert('hello world,我是class组件');
  };

  useImperativeHandle(ref, () => ({
    sayHelloWorld,
  }));

  return <div>我是FunctionSon</div>;
};

FunctionSon = forwardRef(FunctionSon);

const UseRef = (props) => {
  const classSonRef = useRef();
  const functionSonRef = useRef();
  console.log('classSonRef', classSonRef);
  console.log('functionSonRef', functionSonRef);

  useEffect(() => {
    classSonRef?.current?.sayHelloWorld();
    functionSonRef?.current?.sayHelloWorld();
  });
  return (
    <>
      useRef
      <ClassSon ref={classSonRef} />
      <FunctionSon ref={functionSonRef} />
    </>
  );
};

export default UseRef;
