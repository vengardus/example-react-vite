import { useSelector } from 'react-redux';

const GastosList = () => {
  const gastos = useSelector((state) => state.gastos);

  return (
    <ul>
      {gastos?.map((gasto, index) => (
        <li key={index}>
          <strong>{gasto.category}</strong>: ${gasto.total}
        </li>
      ))}
    </ul>
  );
};

export default GastosList;
