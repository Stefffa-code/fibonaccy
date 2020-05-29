import React from 'react';
import PropTypes from 'prop-types';

FibList.propTypes = {
  lists: PropTypes.array,
};
FibList.defaultProps = {
  lists: [],
};
export function FibList({ lists }) {
  if (!lists.length) {
    return <p className="center">Ничего нет</p>;
  }
  return (
    <div>
      <table className="highlight">
        <thead>
          <tr>
            <th>IP</th>
            <th>Order</th>
            <th>Fibonacci number</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          { lists.map((list) => {
            return (
              <tr key={list.id}>
                <td>{list.IP}</td>
                <td>{list.order}</td>
                <td>{list.fibonaccy}</td>
                <td>
                  <strong>
                    {new Date(list.date).toLocaleDateString()}
                  </strong>
                  <br />
                  {new Date(list.date).toLocaleTimeString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
