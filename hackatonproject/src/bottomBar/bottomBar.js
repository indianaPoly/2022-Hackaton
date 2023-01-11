import "./bottomBar.css";

function BottomBar() {
  return (
    <>
      <ul id="snsList">
        <li className="box">
          <button className="snsButton">슦</button>
        </li>
        <li className="box">
          <button className="snsButton">카</button>
        </li>
        <li className="box">
          <button className="snsButton">우</button>
        </li>
        <li className="box">
          <button className="snsButton">터</button>
        </li>
      </ul>
      <div id="title">SSCC SoongSil Computer Club</div>
    </>
  );
}

export default BottomBar;
