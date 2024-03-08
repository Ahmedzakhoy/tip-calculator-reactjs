export function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} Average Tip)
    </h3>
  );
}
