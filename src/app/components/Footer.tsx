export default function Footer() {
  let d = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/Toronto" })
  );

  let hour = d.getHours();
  let minute = d.getMinutes();

  return (
    <div>
      <hr className="my-2" />
      <div className="flex flex-wrap justify-around my-8">
        <div>ilaohmichael@gmail.com</div>
        <div>Toronto, CAN</div>
        <div>Local Time: {hour + ":" + minute}</div>
      </div>
    </div>
  );
}
