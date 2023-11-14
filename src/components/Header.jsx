import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <div id="header">
      <img src={logo} alt="react-investment-calculator-logo" />
      <h1>Investment Calculator</h1>
    </div>
  );
}
