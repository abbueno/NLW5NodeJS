import { http } from "./http";
import "./websocket/cliente;"

http.listen(3333, () => console.log("Server is running on port 3333"));
