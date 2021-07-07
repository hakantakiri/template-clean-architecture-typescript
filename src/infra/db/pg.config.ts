import { Pool } from "pg";

export const PostgresDB = new Pool ({
    max: 10,
    connectionString: 'postgres://postgres:postgres@localhost:5432/data',
    idleTimeoutMillis: 30000,
});