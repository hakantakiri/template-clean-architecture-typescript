import { API } from "./devices/api";

const main = async () : Promise<void> => {    
    const api = new API();
    api.run();
}

main();