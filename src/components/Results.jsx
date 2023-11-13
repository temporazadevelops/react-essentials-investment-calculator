import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ fields }) {
  let data = calculateInvestmentResults(fields);
  const initialInvestment =
    data[0].valueEndOfYear - data[0].interest - data[0].annual;

  return (
    <div id="result" style={{ display: "flex", justifyContent: "center" }}>
      <table className="center">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Interested Capital</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            let totalInterest =
              item.valueEndOfYear - item.annual * item.year - initialInvestment;
            let totalAmountInvested = item.valueEndOfYear - initialInvestment;

            return (
              <tr key={index}>
                <td>{item.year}</td>
                <td>{formatter.format(item.valueEndOfYear)}</td>
                <td>{formatter.format(item.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
