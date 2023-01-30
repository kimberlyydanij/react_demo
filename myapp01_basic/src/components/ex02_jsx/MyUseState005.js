import { useState } from 'react';

const MyUseState005 = () => {
  const [customerList, setCustomerList] = useState([
    {
      name: '고수',
      address: '서울시 강남구',
      phone: '010-123-4567',
    },
    {
      name: '여진구',
      address: '서울시 서초구',
      phone: '010-111-1111',
    },
    {
      name: '송중기',
      address: '서울시 용산구',
      phone: '010-222-2222',
    },
  ]);

  const handleName = (e) => {
    setCustomer({ ...customer, name: e.target.value });
  };

  const handleAddress = (e) => {
    setCustomer({ ...customer, address: e.target.value });
  };

  const handlePhone = (e) => {
    setCustomer({ ...customer, phone: e.target.value });
  };

  const handleCommit = (e) => {
    setCustomerList([...customerList, customer]);
  };
  const [customer, setCustomer] = useState({
    name: '',
    address: '',
    phone: '',
  });

  return (
    <div>
      <p>
        <span>이름</span>
        <input type='text' value={customer.name} onChange={handleName} />
      </p>

      <p>
        <span>주소</span>
        <input type='text' value={customer.address} onChange={handleAddress} />
      </p>

      <p>
        <span>전화번호</span>
        <input type='text' value={customer.phone} onChange={handlePhone} />
      </p>

      <button onClick={handleCommit}>확인</button>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>주소</th>
            <th>전화번호</th>
          </tr>
        </thead>
        <tbody>
          {customerList.map((elements, idx) => {
            return (
              <tr key={idx}>
                <td>{elements.name}</td>
                <td>{elements.address}</td>
                <td>{elements.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default MyUseState005;
