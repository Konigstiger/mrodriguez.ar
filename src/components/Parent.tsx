import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [data, setData] = useState('');
  
  const childToParent = (childdata) => {
    setData(childdata);
  }

  return (
    <div>
     {data}
      <div>
        <Child childToParent={childToParent}/>
      </div>
    </div>
  );
}