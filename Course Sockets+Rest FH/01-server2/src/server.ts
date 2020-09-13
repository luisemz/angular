import app from "./core/app";
import { PORT } from "./config/enviroment";

app.listen(PORT, () => console.log(`Server running on: ${PORT}!`));
