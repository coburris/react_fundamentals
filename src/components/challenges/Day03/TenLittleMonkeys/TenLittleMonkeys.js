import { useState } from 'react';


const TenLittleMonkeys = () => {
    
    const [count, setCount] = useState(10)
    
    function decCount() {
        if(count != 0){
            setCount(count -1);
        }
    }
    
    
    return (
        <>
        <span> {count !=0 ?`${count} little monkeys jumping` : 'no more monkeys'}</span>
        <br/>
        <button onClick={decCount}>Monkey Jump</button>
        </>
    );
}

export default TenLittleMonkeys;