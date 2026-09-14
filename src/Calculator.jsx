import { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  // Xử lý khi nhấn các nút
  const handleButtonClick = (value) => {
    if (value === 'Clear') {
      setDisplay('');
    } else if (value === 'Delete') {
      setDisplay(display.slice(0, -1));
    } else if (value === '=') {
      try {
        // Sử dụng eval để tính toán chuỗi biểu thức toán học (lưu ý: trong thực tế nên dùng thư viện parse toán học an toàn hơn)
        // eslint-disable-next-line no-eval
        const result = eval(display);
        setDisplay(String(result));
      } catch (error) {
        setDisplay('Error');
      }
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        {/* Màn hình hiển thị */}
        <div className="display">{display}</div>
        
        {/* Bàn phím */}
        <div className="keypad">
          <button onClick={() => handleButtonClick('Clear')}>Clear</button>
          <button onClick={() => handleButtonClick('Delete')}>Delete</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={() => handleButtonClick('/')}>/</button>

          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('*')}>*</button>

          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')}>-</button>

          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('+')}>+</button>

          {/* Dòng cuối cùng có ô trống ở đầu và cuối */}
          <div className="empty-btn"></div>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('=')}>=</button>
          <div className="empty-btn"></div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;