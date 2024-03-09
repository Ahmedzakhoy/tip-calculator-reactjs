export function Output({ bill, tip, averageTip }) {
  const roundedTip = Math.round(tip);
  return (
    <h3>
      You pay ${bill + roundedTip} (${bill} + ${roundedTip} Average Tip (
      {averageTip}%))
    </h3>
  );
}
