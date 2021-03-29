import { Circle } from "better-react-spinkit";
function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="https://pngimg.com/uploads/whatsapp/whatsapp_PNG95150.png"
          alt="loading screen"
          style={{ marginBottom: 10 }}
          height={200}
        />
        <Circle color="#3cbc28" size={60} />
      </div>
    </center>
  );
}

export default Loading;
